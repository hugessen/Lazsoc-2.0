var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable } from '@angular/core';
import { CacheService } from '../providers/CacheService';
import { LocalStorage } from '../providers/LocalStorage';
import { Observable } from 'rxjs/Rx';
var STALE_TIME = 14;
var AHEAD_TIME = 14;
var LocalData = (function () {
    // public exportedEvents;
    function LocalData(cacheService, localStorage) {
        this.cacheService = cacheService;
        this.localStorage = localStorage;
        this.cache = cacheService;
    }
    //Remember to fix this to pull from API after
    LocalData.prototype.getCustomFeed = function (club) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            Observable.forkJoin([
                Observable.fromPromise(_this.getEvents()),
                Observable.fromPromise(_this.getClubs()),
                Observable.fromPromise(_this.getPrefs()),
            ]).subscribe(function (data) {
                console.log(data[0]); //Events and recurring events
                var events = data[0].events;
                var clubs = data[1];
                clubs = _this.transformClubs(clubs);
                var prefs = (data[2] != null) ? data[2] : { clubPrefs: {}, interestPrefs: {} };
                ;
                //Handle Recurring Events
                var recurring = _this.parseRecurringEvents(data[0].recurring_events);
                for (var _i = 0, recurring_1 = recurring; _i < recurring_1.length; _i++) {
                    var r_event = recurring_1[_i];
                    events.push(r_event);
                }
                _this.localStorage.set('prefs', prefs);
                if (club)
                    var val = _this.generateCustomFeed(events, clubs, prefs, club);
                else
                    var val = _this.generateCustomFeed(events, clubs, prefs);
                resolve(val);
            });
        });
    };
    LocalData.prototype.generateCustomFeed = function (events, clubs, prefs, club) {
        var result;
        result = { past: {}, thisweek: {}, upcoming: {} };
        //Sorting by time
        events.sort(function (a, b) {
            return Date.parse(a.start_date_time) - Date.parse(b.start_date_time);
        });
        console.log("doCustomFeed events:", events);
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
                if (prefs.clubPrefs.hasOwnProperty(event_1.club_id.toString()) && prefs.clubPrefs[event_1.club_id.toString()].selected == true)
                    event_1.visible = true; //Set to true if club selected
                else {
                    for (var _a = 0, _b = event_1.event_tags; _a < _b.length; _a++) {
                        var event_tag = _b[_a];
                        if (prefs.interestPrefs.hasOwnProperty(event_tag) && prefs.interestPrefs[event_tag].selected) {
                            event_1.visible = true;
                            event_1.basedOn = event_tag;
                        }
                    }
                }
                //Checking timeframe
                if (eventStart < currentTime)
                    event_1.timeframe = "past";
                else if (eventStart >= currentTime && eventStart <= currentTime + 60 * 60 * 24 * 7 * 1000)
                    event_1.timeframe = "thisweek";
                else
                    event_1.timeframe = "upcoming";
                if (!result[event_1.timeframe].hasOwnProperty(eventDateKey)) {
                    var dividerVal = this.getLongDate(new Date(event_1.start_date_time));
                    result[event_1.timeframe][eventDateKey] = { divider: dividerVal, events: [], visible: false };
                }
                if (event_1.visible)
                    result[event_1.timeframe][eventDateKey].visible = true; //So we know whether to show the divider
                result[event_1.timeframe][eventDateKey].events.push(event_1);
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
    //Generates the hashkey for getting events by day. Used for dividers in the newsfeed
    LocalData.prototype.generateDateKey = function (date) {
        return (new Date(date).getDate().toString() + "-" + new Date(date).getMonth().toString() + "-" + new Date(date).getFullYear().toString()).toString();
    };
    //The divider text for the newsfeed
    LocalData.prototype.getLongDate = function (date) {
        var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        var result = days[date.getDay()] + ", " + months[date.getMonth()] + " " + date.getDate() + ", " + date.getFullYear();
        return result;
    };
    //Turns clubs from an array into a hash table, and turns their social links into hash tables similarly.
    LocalData.prototype.transformClubs = function (clubs) {
        var result = {};
        for (var _i = 0, clubs_1 = clubs; _i < clubs_1.length; _i++) {
            var club = clubs_1[_i];
            club.club_social_links = this.formatSocialLinks(club.club_social_links);
            result[club.id.toString()] = club;
        }
        return result;
    };
    //Turns the clubs's social links into a hash table for easy access. Much easier to manipulate than an array.
    LocalData.prototype.formatSocialLinks = function (socialLinks) {
        var result = {};
        for (var _i = 0, socialLinks_1 = socialLinks; _i < socialLinks_1.length; _i++) {
            var link = socialLinks_1[_i];
            result[link.link_type] = link.url;
        }
        return result;
    };
    //Only used locally. Returns raw event data from the server
    LocalData.prototype.getEvents = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.cache.getItem('events', 'events.json', 60 * 20) //Cache for 20 mins
                .then(function (res) {
                //resolve(res.cacheVal);
                resolve(_this.getDummyEvents());
            }).catch(function (err) { return reject(err); });
        });
    };
    //Returns user's locally stored preferences
    LocalData.prototype.getPrefs = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.localStorage.get('prefs')
                .then(function (res) {
                resolve(JSON.parse(res));
            }).catch(function (err) { return reject(err); });
        });
    };
    //Gets clubs from the server. Cache expires after 24 hours
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
    LocalData.prototype.getTags = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.cache.getItem('tags', 'event_tags.json', 60 * 60 * 24)
                .then(function (res) {
                resolve(res.cacheVal);
            }).catch(function (err) { return reject(err); });
        });
    };
    LocalData.prototype.getDiscountSponsors = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.cache.getItem('discount-sponsors', 'discount_partners.json', 60 * 60 * 12)
                .then(function (res) {
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
    LocalData.prototype.getDummyEvents = function () {
        return JSON.parse("\n            {\n              \"events\": [\n                {\n                  \"id\": 82,\n                  \"title\": \"Orientation Day 2016\",\n                  \"sub_heading\": \"The must-attend event for all first-years\",\n                  \"location\": \"Bingemans\",\n                  \"banner\": \"assets/img/O-Day.jpg\",\n                  \"club_id\": 2,\n                  \"facebook_event_link\": \"\",\n                  \"event_description\": \"Welcome Class of 2020 to the Lazaridis Students' Society's Orientation Day 2016! You aren't the only one nervous about what the Lazaridis business experience is going to throw at you. Check out the information below to find out how you can be one step further into ensuring your future success as a student here at Laurier! Orientation Day (O-Day) 2016 is an exclusive orientation event for incoming Business & Economics first year students planned by the Lazaridis Students' Society. This event gives students more information about what Laurier Business and Economics has to offer and the resources available, as well as networking with other first year students and upper year mentors. MORNING SESSIONS Attend sessions that will answer your most important questions about succeeding as a business student. From various specializations, to potential career designations, to even learning about how to survive your first year at Laurier; you will learn from your designated CEO (upper year student group leader) that will meet with you in the morning. LUNCH & KEYNOTE SPEECH Enjoy a three course lunch and a keynote speech from our distinguished guest speaker. This year's keynote speaker is: Michael Hamilton, Senior-Vice President of RBC Insurance. Don't worry, this is the first of many events highlighting food you'll see at Laurier. LAZSOC CLUBS FAIR & MERCHANDISE SALE Attend the LazSoc Clubs Fair and meet representatives from our 22 Clubs & Associations, all of which are looking to hire first year students! Have the chance to chat with student leaders, professors, and corporate sponsors. The earlier you get involved, the better! These club representatives are here to help you get started. Be one of the first people to grab exclusive products from our Class of 2020 merchandise and apparel line at http://shop.lazsoc.ca! FIRST YEAR HANDBOOK Need advice on getting set up at Laurier? Looking for academic resources? Or even wondering about the social life at Laurier? Check out our exclusive First Year Handbook for ALL Laurier students at http://fyh.lazsoc.ca! Online ticket sales end September 5th at http://oday.lazsoc.ca! Tickets can be purchased in-person on Sunday September 4/5th, in the Athletic Complex during move-in.\",\n                  \"start_date_time\": \"2017-05-30T08:00:00.000Z\",\n                  \"end_date_time\": \"2017-05-30T10:00:00.000Z\",\n                  \"is_recurring\": false,\n                  \"created_at\": \"2017-05-27T20:22:37.000Z\",\n                  \"updated_at\": \"2017-05-27T20:53:56.000Z\",\n                  \"app_thumbnail\": \"\",\n                  \"event_tags\": []\n                },\n                {\n                  \"id\": 81,\n                  \"title\": \"Year End Gala 2017 | A Night at the Oscars\",\n                  \"sub_heading\": \"Come enjoy a night of celebration and awards to celebrate all the accomplishments of student volunteers\",\n                  \"location\": \"Crowne Plaza Kitchener\",\n                  \"banner\": \"http://i.imgur.com/OT0Wq5p.png\",\n                  \"club_id\": 2,\n                  \"facebook_event_link\": \"https://www.facebook.com/events/1847071392235374/\",\n                  \"event_description\": \"It's a brisk spring evening. Flashes of bright lights fill the atmosphere as stars dressed in glamour and extravagance make their way down the red carpet. Dozens of camera flashes go off as you celebrate the night away with your friends. You are cordially invited to the fourth annual Year End Gala on March 24th! This year's Year End Gala theme is... A Night at the Oscars! At this black tie themed spectacle you will enjoy a three-course meal, two complimentary drink tickets, an awards ceremony, and a dance to end off the night and celebrate the year's successes. Year End Gala focuses on the accomplishments of our Clubs & Associations. Their efforts, dedication, and commitment will be recognized at the award ceremony; and celebrate the achievements of our student volunteers! Tickets: http://yeg.lazsoc.ca/ Sale ends on March 19th at 11:59PM\",\n                  \"start_date_time\": \"2017-05-30T08:00:00.000Z\",\n                  \"end_date_time\": \"2017-05-30T10:00:00.000Z\",\n                  \"is_recurring\": false,\n                  \"created_at\": \"2017-05-27T20:22:37.000Z\",\n                  \"updated_at\": \"2017-05-27T20:53:56.000Z\",\n                  \"app_thumbnail\": \"\",\n                  \"event_tags\": []\n                },\n                {\n                  \"id\": 80,\n                  \"title\": \"EC290 Mock Midterm 1\",\n                  \"sub_heading\": \"Need that extra help before writing your midterm? Come write LEC's mock midterm!\",\n                  \"location\": \"SBE1250\",\n                  \"banner\": \"\",\n                  \"club_id\": 10,\n                  \"facebook_event_link\": \"https://www.facebook.com/events/1847071392235374/\",\n                  \"event_description\": \"Need that extra help before writing your midterm? Come write LEC's mock midterm! The mock midterms are written to be an accurate representation of the midterm your professor will test you on. After the test, student tutors who have taken and excelled in the course will work with the class, take up the midterm, and answer any other questions you have!\",\n                  \"start_date_time\": \"2017-05-31T15:00:00.000Z\",\n                  \"end_date_time\": \"2017-05-31T18:00:00.000Z\",\n                  \"is_recurring\": false,\n                  \"created_at\": \"2017-05-27T20:22:37.000Z\",\n                  \"updated_at\": \"2017-05-27T20:53:56.000Z\",\n                  \"app_thumbnail\": \"\",\n                  \"event_tags\": [\"Exam Review\",\"Economics\"]\n                },\n                                {\n                  \"id\": 79,\n                  \"title\": \"Startup Consulting Case Competition\",\n                  \"sub_heading\": \"LCC: Laurier Consulting Club and Startup Laurier are excited to announce our fourth annual Startup Consulting Case Competition!\",\n                  \"location\": \"67 Erb Street West\",\n                  \"banner\": \"assets/img/Startup Consulting.jpg\",\n                  \"club_id\": 19,\n                  \"facebook_event_link\": \"https://www.facebook.com/events/1847071392235374/\",\n                  \"event_description\": \"Have you ever wondered what it\u2019s like working in a startup? Are you eager to prove your entrepreneurial skills as well as consulting capabilities? If you answered yes to any of those questions, then this is the event for you! In teams of four, you will tackle a case and present your innovative new ideas to a panel of judges composed of Canada\u2019s brightest entrepreneurs whose startups need YOUR help! Aim high and you could have a chance to win some great prizes (TBA) as well connecting with up-and-coming startups.\",\n                  \"start_date_time\": \"2017-06-05T08:00:00.000Z\",\n                  \"end_date_time\": \"2017-06-05T10:00:00.000Z\",\n                  \"is_recurring\": false,\n                  \"created_at\": \"2017-05-27T20:22:37.000Z\",\n                  \"updated_at\": \"2017-05-27T20:53:56.000Z\",\n                  \"app_thumbnail\": \"\",\n                  \"event_tags\": []\n                }\n              ],\n              \"recurring_events\": []\n            }\n        ");
    };
    return LocalData;
}());
LocalData = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [CacheService, LocalStorage])
], LocalData);
export { LocalData };
//# sourceMappingURL=LocalData.js.map