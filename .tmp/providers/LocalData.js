import { Injectable } from '@angular/core';
import { CacheService } from '../providers/CacheService';
import { Observable } from 'rxjs/Rx';
export var LocalData = (function () {
    function LocalData(cacheService) {
        this.cacheService = cacheService;
        this.cache = cacheService;
    }
    LocalData.prototype.saveData = function (name, data, ttl) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            if (ttl) {
                _this.cache.setItem(name, data, ttl)
                    .then(function (res) { return resolve(res); })
                    .catch(function (err) { return reject(err); });
            }
            else {
                _this.cache.setItem(name, data)
                    .then(function (res) { return resolve(res); })
                    .catch(function (err) { return reject(err); });
            }
        });
    };
    LocalData.prototype.getEvents = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.cache.getItem('events', 'app_events.php', 12 * 60 * 60) //Cache for 12 hours
                .then(function (res) {
                _this.events = res;
                resolve(res);
            }).catch(function (err) { return reject(err); });
        });
    };
    LocalData.prototype.getUserInfo = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.cache.getItem('userdata', '')
                .then(function (res) {
                _this.events = res;
                resolve(res);
            }).catch(function (err) { return reject(err); });
        });
    };
    LocalData.prototype.getCustomFeed = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            Observable.forkJoin([
                Observable.fromPromise(_this.getEvents()),
                Observable.fromPromise(_this.getClubs()),
                Observable.fromPromise(_this.getInterests())
            ]).subscribe(function (data) {
                //Applies the visible property to events based on Clubs and Interests
                var val = _this.doCustomFeed(data[0], data[1], data[2]);
                resolve(val);
            });
        });
    };
    LocalData.prototype.doCustomFeed = function (events, clubs, interests) {
        var result = [];
        //Sorting by time
        events.sort(function (a, b) {
            return Date.parse(a.startDate) - Date.parse(b.startDate);
        });
        //Applying visible property based on prefs
        for (var _i = 0, events_1 = events; _i < events_1.length; _i++) {
            var event_1 = events_1[_i];
            var currentTime = new Date().getTime();
            var eventStart = Date.parse(event_1.startDate);
            event_1.visible = false; //initially
            event_1.timeframe = "";
            event_1.basedOn = "";
            //Filtering by prefs
            if (clubs[event_1.clubRef].selected)
                event_1.visible = true; //Set to true if club selected
            else {
                for (var _a = 0, _b = event_1.tags; _a < _b.length; _a++) {
                    var tag = _b[_a];
                    for (var _c = 0, interests_1 = interests; _c < interests_1.length; _c++) {
                        var interest = interests_1[_c];
                        if (tag == interest.name && interest.selected) {
                            event_1.visible = true;
                            event_1.basedOn = tag;
                        }
                    }
                }
            }
            //Checking timeframe
            if (eventStart < currentTime)
                event_1.timeframe = "past";
            else if (eventStart >= currentTime && eventStart <= currentTime + 60 * 60 * 24 * 7)
                event_1.timeframe = "this week";
            else
                event_1.timeframe = "upcoming";
            result.push(event_1); //Add to the list
        }
        return result;
    };
    LocalData.prototype.getClubs = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.cache.getItem('clubs', 'app_clubs.php')
                .then(function (res) {
                _this.clubs = res;
                resolve(_this.clubs);
            }).catch(function (err) { return reject(err); });
        });
    };
    LocalData.prototype.getInterests = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.cache.getItem('interests', 'app_interests.php')
                .then(function (res) {
                _this.interests = res;
                resolve(_this.interests);
            }).catch(function (err) { return reject(err); });
        });
    };
    LocalData.prototype.getDiscountSponsors = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.cache.getItem('discount-sponsors', 'app_discount.php')
                .then(function (res) {
                _this.discountSponsors = res;
                resolve(res);
            }).catch(function (err) { return reject(err); });
        });
    };
    LocalData.prototype.getEventsLocally = function () {
        return [
            {
                id: 0,
                title: "5 Days for the Homeless!",
                startDate: "3/11/2017 9:00 AM",
                endDate: "3/11/2017 4:30 PM",
                location: "Fred Nichols Building",
                subheader: "Come out and support us as we sleep outside for a week!",
                club: 21,
                banner: "assets/img/Event Banners/5DaysBanner.jpg",
                tags: [
                    "Philanthropy", "Leadership", "Social"
                ],
                desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
            },
            { id: 1,
                title: "O-Day",
                startDate: "9/11/2016 9:00 AM",
                endDate: "9/11/2016 4:30 PM",
                location: "Bingeman's Conference Centre",
                subheader: "Come out and learn what it means to be a business student!",
                club: 22,
                banner: "assets/img/Event Banners/O-Day.jpg",
                tags: [
                    "Networking", "First Year"
                ],
                desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." }
        ];
    };
    LocalData.decorators = [
        { type: Injectable },
    ];
    /** @nocollapse */
    LocalData.ctorParameters = [
        { type: CacheService, },
    ];
    return LocalData;
}());
