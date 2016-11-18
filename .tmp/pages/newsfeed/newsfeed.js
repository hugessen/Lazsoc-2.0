import { Component } from '@angular/core';
import { NavController, AlertController, PopoverController } from 'ionic-angular';
import { Calendar, Network } from 'ionic-native';
import { EventPage } from '../eventpage/event-page';
import { PopoverPage } from '../popover/popover';
import { LocalData } from '../../providers/LocalData';
import { LocalStorage } from '../../providers/LocalStorage';
import { Observable } from 'rxjs/Rx';
export var Newsfeed = (function () {
    function Newsfeed(navCtrl, localData, localStorage, alertCtrl, popoverCtrl, network, calendarCtrl) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.localData = localData;
        this.localStorage = localStorage;
        this.alertCtrl = alertCtrl;
        this.popoverCtrl = popoverCtrl;
        this.network = network;
        this.calendarCtrl = calendarCtrl;
        this.timeframe = "this week";
        this.feedType = "all";
        this.message = "All Events This Week";
        Observable.forkJoin([
            Observable.fromPromise(this.localData.getClubs(true)),
            Observable.fromPromise(this.localData.getCustomFeed()),
            Observable.fromPromise(this.localData.getExportedEvents())
        ])
            .subscribe(function (data) {
            _this.events = data[1];
            _this.clubs = data[0];
            if (data[2] != null) {
                _this.exportedEvents = data[2].data;
                console.log('exported events:', _this.exportedEvents);
                _this.checkExportConflicts(_this.exportedEvents, _this.events);
            }
            else {
                _this.exportedEvents = new Array();
            }
            console.log('events:', _this.events);
            console.log('clubs:', _this.clubs);
        });
    }
    Newsfeed.prototype.checkExportConflicts = function (exp, events) {
        var conflictTitles = [];
        var now = new Date();
        for (var i = 0; i < exp.length; i++) {
            console.log(exp[i].title);
            if (new Date(exp[i].time).getTime >= now.getTime) {
                console.log(exp[i].title, "being evaluated");
                if (events.hasOwnProperty(exp[i].key)) {
                    var found = false;
                    for (var _i = 0, _a = events[exp[i].key].events; _i < _a.length; _i++) {
                        var event_1 = _a[_i];
                        if (event_1.id == exp[i].id && new Date(event_1.start_date_time).getTime() == new Date(exp[i].time).getTime()) {
                            found = true;
                            break;
                        }
                    }
                    if (!found) {
                        console.log("Not found");
                        conflictTitles.push(exp[i].title);
                    }
                }
                else {
                    console.log("hasOwnProperty");
                    conflictTitles.push(exp[i].title);
                }
            }
            else {
                console.log("removing", exp[i].title, "from array");
                exp.splice(i, 1); //Remove it
            }
        }
        if (conflictTitles.length > 0)
            this.notifyConflicts(conflictTitles);
    };
    Newsfeed.prototype.notifyConflicts = function (conflicts) {
        for (var _i = 0, conflicts_1 = conflicts; _i < conflicts_1.length; _i++) {
            var conflict = conflicts_1[_i];
            this.showAlert("Event Changed!", "Your event " + conflict + " has been moved or cancelled. Remove it from your calendar and check back later");
        }
    };
    Newsfeed.prototype.showAlert = function (title, message) {
        var alert = this.alertCtrl.create({
            title: title,
            subTitle: message,
            buttons: ['OK']
        });
        alert.present();
    };
    Newsfeed.prototype.openLink = function (url) {
        window.open(url, "_system");
    };
    Newsfeed.prototype.presentPopover = function (myEvent) {
        var _this = this;
        var popover = this.popoverCtrl.create(PopoverPage, { feedType: this.feedType, timeframe: this.timeframe }, { cssClass: 'popoverClass', enableBackdropDismiss: false });
        popover.present({
            ev: myEvent
        });
        popover.onDidDismiss(function (data) {
            _this.feedType = data.feedType;
            _this.timeframe = data.timeframe;
            if (_this.feedType == "all") {
                if (_this.timeframe == "past")
                    _this.message = "All Past Events";
                else if (_this.timeframe == "this week")
                    _this.message = "All Events This Week";
                else if (_this.timeframe == "upcoming")
                    _this.message = "All Upcoming Events";
            }
            else if (_this.feedType == "custom") {
                if (_this.timeframe == "past")
                    _this.message = "Custom Feed of Past Events";
                else if (_this.timeframe == "this week")
                    _this.message = "Custom Feed of Events this Week";
                else if (_this.timeframe == "upcoming")
                    _this.message = "Custom Feed of Upcoming Events";
            }
        });
    };
    Newsfeed.prototype.isValidURL = function () {
        return true;
    };
    Newsfeed.prototype.addToCalendar = function (event) {
        var _this = this;
        this.exportedEvents.push({ id: event.id, key: this.localData.generateDateKey(event.start_date_time), title: event.title, time: event.start_date_time });
        this.localStorage.set('exported-events', { data: this.exportedEvents });
        console.log("Exporting to exportedEvents", this.exportedEvents);
        Calendar.createEventInteractively(event.title, event.location, event.sub_heading, new Date(event.start_date_time), new Date(event.end_date_time))
            .then(function (msg) {
            console.log(msg);
            _this.localStorage.set('exported-events', { data: _this.exportedEvents });
        }, function (err) { return console.log(err); });
    };
    Newsfeed.prototype.viewEvent = function (event) {
        this.navCtrl.push(EventPage, { event: event, club: this.clubs[event.club_id.toString()] });
    };
    Newsfeed.prototype.doRefresh = function (refresher) {
        var _this = this;
        if (Network.connection.toString() != 'none') {
            this.localData.getCustomFeed()
                .then(function (data) {
                _this.events = data;
                console.log(Network.connection);
                refresher.complete();
            }).catch(function (err) {
                console.log(err);
            });
        }
        else {
            this.showAlert('Oh snap!', "Looks like you're disconnected. Try again later!");
        }
    };
    Newsfeed.decorators = [
        { type: Component, args: [{
                    templateUrl: 'newsfeed.html'
                },] },
    ];
    /** @nocollapse */
    Newsfeed.ctorParameters = [
        { type: NavController, },
        { type: LocalData, },
        { type: LocalStorage, },
        { type: AlertController, },
        { type: PopoverController, },
        { type: Network, },
        { type: Calendar, },
    ];
    return Newsfeed;
}());
