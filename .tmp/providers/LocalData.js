import { Injectable } from '@angular/core';
import { CacheService } from '../providers/CacheService';
import { LocalStorage } from '../providers/LocalStorage';
import { Observable } from 'rxjs/Rx';
var STALE_TIME = 14;
var AHEAD_TIME = 14;
export var LocalData = (function () {
    // public exportedEvents;
    function LocalData(cacheService, localStorage) {
        this.cacheService = cacheService;
        this.localStorage = localStorage;
        this.cache = cacheService;
        this.prefs = { clubPrefs: {}, interestPrefs: {} };
    }
    //Remember to fix this to pull from API after
    LocalData.prototype.getCustomFeed = function (club) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            Observable.forkJoin([
                Observable.fromPromise(_this.getEvents()),
                Observable.fromPromise(_this.getClubs()),
                Observable.fromPromise(_this.getInterests()),
                Observable.fromPromise(_this.getPrefs())
            ]).subscribe(function (data) {
                var events = data[0].events;
                var clubs = data[1];
                var interests = _this.getInterestsLocally();
                var exportedEvents;
                //Turn recurring events into a list of regular events
                var recurring = _this.parseRecurringEvents(data[0].recurring_events);
                //Add recurring events to event list
                for (var _i = 0, recurring_1 = recurring; _i < recurring_1.length; _i++) {
                    var r_event = recurring_1[_i];
                    events.push(r_event);
                }
                //Applies the visible property to events based on Clubs and Interests
                if (data[3] != null)
                    _this.prefs = data[3];
                else {
                    for (var _a = 0, clubs_1 = clubs; _a < clubs_1.length; _a++) {
                        var club_1 = clubs_1[_a];
                        _this.prefs.clubPrefs[club_1.id.toString()] = { club_id: club_1.id, selected: false };
                    }
                    for (var _b = 0, interests_1 = interests; _b < interests_1.length; _b++) {
                        var interest = interests_1[_b];
                        _this.prefs.interestPrefs[interest.name] = { interest_id: interest.id, selected: false };
                    }
                }
                clubs = _this.transformClubs(clubs);
                _this.localStorage.set('prefs', _this.prefs);
                if (club)
                    var val = _this.doCustomFeed(events, clubs, interests, _this.prefs, club);
                else
                    var val = _this.doCustomFeed(events, clubs, interests, _this.prefs);
                resolve(val);
            });
        });
    };
    LocalData.prototype.doCustomFeed = function (events, clubs, interests, prefs, club) {
        var result = {};
        //Sorting by time
        events.sort(function (a, b) {
            return Date.parse(a.start_date_time) - Date.parse(b.start_date_time);
        });
        //Applying visible property based on prefs
        for (var _i = 0, events_1 = events; _i < events_1.length; _i++) {
            var event_1 = events_1[_i];
            var currentTime = new Date().getTime();
            var eventStart = Date.parse(event_1.start_date_time);
            if (eventStart > currentTime - 60 * 60 * 24 * 1000 * STALE_TIME && (!club || clubs[event_1.club_id.toString()].name == club.name)) {
                var eventDateKey = this.generateDateKey(event_1.start_date_time);
                event_1.visible = false; //initially
                event_1.timeframe = "";
                event_1.basedOn = "";
                //Filtering by prefs
                if (prefs.clubPrefs[event_1.club_id.toString()].selected == true)
                    event_1.visible = true; //Set to true if club selected
                else {
                    for (var _a = 0, _b = event_1.event_tags; _a < _b.length; _a++) {
                        var tag = _b[_a];
                        if (prefs.interestPrefs[tag.tag].selected) {
                            event_1.visible = true;
                            event_1.basedOn = tag.tag;
                        }
                    }
                }
                //Checking timeframe
                if (eventStart < currentTime)
                    event_1.timeframe = "past";
                else if (eventStart >= currentTime && eventStart <= currentTime + 60 * 60 * 24 * 7 * 1000)
                    event_1.timeframe = "this week";
                else
                    event_1.timeframe = "upcoming";
                if (!result.hasOwnProperty(eventDateKey)) {
                    var dividerVal = this.getLongDate(new Date(event_1.start_date_time));
                    result[eventDateKey] = { divider: dividerVal, events: [], visible: false };
                }
                if (event_1.visible)
                    result[eventDateKey].visible = true; //So we know whether to show the divider
                result[eventDateKey].events.push(event_1);
            }
        }
        return result;
    };
    LocalData.prototype.parseRecurringEvents = function (recurring_events) {
        var event_list = [];
        var now = new Date();
        var past = new Date();
        past.setDate(past.getDate() - STALE_TIME);
        var ahead = new Date();
        ahead.setDate(ahead.getDate() + AHEAD_TIME);
        for (var _i = 0, recurring_events_1 = recurring_events; _i < recurring_events_1.length; _i++) {
            var event_2 = recurring_events_1[_i];
            var duration = (Date.parse(event_2.end_date_time) - Date.parse(event_2.start_date_time));
            if (event_2.hasOwnProperty('is_recurring') && event_2.is_recurring) {
                var rule = new RRule({
                    freq: RRule.WEEKLY,
                    interval: event_2.recurring_event.repeat_every,
                    byweekday: this.getByWeekday(event_2),
                    dtstart: new Date(event_2.start_date_time),
                    until: new Date(event_2.recurring_event.ends_on)
                });
            }
            //Get all the occurrences between specified dates
            var occurrences = rule.between(now, ahead);
            //So, for now I'm just pushing a singular instance of each event type, the soonest upcoming one
            if (occurrences.length > 0)
                event_list.push(this.createEventInstance(event_2, new Date(occurrences[0]), duration));
        }
        return event_list;
    };
    //Returns an instance of a recurring event given one of its dates
    LocalData.prototype.createEventInstance = function (event, date, duration) {
        var new_event = event;
        var startTime = date.toString();
        var endTime = new Date(Date.parse(date) + duration).toString();
        new_event.start_date_time = startTime;
        new_event.end_date_time = endTime;
        return event;
    };
    LocalData.prototype.getByWeekday = function (event) {
        var by_week_day = [];
        if (event.recurring_event.monday) {
            by_week_day.push(RRule.MO);
        }
        if (event.recurring_event.tuesday) {
            by_week_day.push(RRule.TU);
        }
        if (event.recurring_event.wednesday) {
            by_week_day.push(RRule.WE);
        }
        if (event.recurring_event.thursday) {
            by_week_day.push(RRule.TH);
        }
        if (event.recurring_event.friday) {
            by_week_day.push(RRule.FR);
        }
        if (event.recurring_event.saturday) {
            by_week_day.push(RRule.SA);
        }
        if (event.recurring_event.sunday) {
            by_week_day.push(RRule.SU);
        }
        return by_week_day;
    };
    LocalData.prototype.generateDateKey = function (date) {
        return (new Date(date).getDate().toString() + "-" + new Date(date).getMonth().toString() + "-" + new Date(date).getFullYear().toString()).toString();
    };
    LocalData.prototype.getLongDate = function (date) {
        var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        var result = days[date.getDay()] + ", " + months[date.getMonth()] + " " + date.getDate() + ", " + date.getFullYear();
        return result;
    };
    LocalData.prototype.transformClubs = function (clubs) {
        var result = {};
        for (var _i = 0, clubs_2 = clubs; _i < clubs_2.length; _i++) {
            var club = clubs_2[_i];
            club.club_social_links = this.formatSocialLinks(club.club_social_links);
            club.app_banner = "assets/img/" + club.app_banner;
            result[club.id.toString()] = club;
        }
        return result;
    };
    LocalData.prototype.formatSocialLinks = function (socialLinks) {
        var result = {};
        for (var _i = 0, socialLinks_1 = socialLinks; _i < socialLinks_1.length; _i++) {
            var link = socialLinks_1[_i];
            result[link.link_type] = link.url;
        }
        return result;
    };
    LocalData.prototype.getEvents = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.cache.getItem('events', 'events.json', 60 * 20) //Cache for 20 mins
                .then(function (res) {
                resolve(res.cacheVal);
            }).catch(function (err) { return reject(err); });
        });
    };
    LocalData.prototype.getPrefs = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.localStorage.get('prefs')
                .then(function (res) {
                resolve(JSON.parse(res));
            }).catch(function (err) { return reject(err); });
        });
    };
    LocalData.prototype.getClubs = function (doTransform) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.cache.getItem('clubs', 'clubs.json', 60 * 60 * 24)
                .then(function (res) {
                if (doTransform)
                    resolve(_this.transformClubs(res.cacheVal));
                else
                    resolve(res.cacheVal);
            }).catch(function (err) { return reject(err); });
        });
    };
    LocalData.prototype.getInterests = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.localStorage.get('app-interests')
                .then(function (res) {
                resolve(JSON.parse(res));
            }).catch(function (err) { return reject(err); });
        });
        // return new Promise((resolve,reject) => {
        //     this.cache.getItem('interests','app_interests.php',60*60*24)
        //     .then(res => {
        //         resolve(res);
        //     }).catch(err => reject(err));
        // })
    };
    LocalData.prototype.getDiscountSponsors = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.cache.getItem('discount-sponsors', 'discount_partners.json', 60 * 60 * 24)
                .then(function (res) {
                _this.discountSponsors = res;
                resolve(res);
            }).catch(function (err) { return reject(err); });
        });
    };
    LocalData.prototype.getExportedEvents = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.localStorage.get('exported-events')
                .then(function (res) {
                resolve(JSON.parse(res));
            }).catch(function (err) { return reject(err); });
        });
    };
    LocalData.prototype.getInterestsLocally = function () {
        return JSON.parse("[\n    {\n        \"id\": 0,\n        \"name\": \"Accounting\"\n    },\n    {\n        \"id\": 1,\n        \"name\": \"Finance\"\n    },\n    {\n        \"id\": 2,\n        \"name\": \"Competitions\"\n    },\n    {\n        \"id\": 3,\n        \"name\": \"Exam Review\"\n    },\n    {\n        \"id\": 4,\n        \"name\": \"Debate\"\n    },\n    {\n        \"id\": 5,\n        \"name\": \"Networking\"\n    },\n    {\n        \"id\": 6,\n        \"name\": \"Academic Help\"\n    },\n    {\n        \"id\": 7,\n        \"name\": \"E-Business\"\n    },\n    {\n        \"id\": 8,\n        \"name\": \"Economics\"\n    },\n    {\n        \"id\": 9,\n        \"name\": \"Entrepreneurship\"\n    },\n    {\n        \"id\": 10,\n        \"name\": \"First Year\"\n    },\n    {\n        \"id\": 11,\n        \"name\": \"International\"\n    },\n    {\n        \"id\": 12,\n        \"name\": \"Journalism and Media\"\n    },\n    {\n        \"id\": 13,\n        \"name\": \"Leadership\"\n    },\n    {\n        \"id\": 14,\n        \"name\": \"Marketing\"\n    },\n    {\n        \"id\": 15,\n        \"name\": \"Public Speaking\"\n    },\n    {\n        \"id\": 16,\n        \"name\": \"Sales\"\n    },\n    {\n        \"id\": 17,\n        \"name\": \"Philanthropy\"\n    },\n    {\n        \"id\": 18,\n        \"name\": \"Sports Management\"\n    },\n    {\n        \"id\": 19,\n        \"name\": \"Consulting\"\n    },\n    {\n        \"id\": 20,\n        \"name\": \"Social\"\n    }\n    ]");
    };
    LocalData.decorators = [
        { type: Injectable },
    ];
    /** @nocollapse */
    LocalData.ctorParameters = [
        { type: CacheService, },
        { type: LocalStorage, },
    ];
    return LocalData;
}());
