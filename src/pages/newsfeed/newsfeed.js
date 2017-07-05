var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import { Calendar, Network } from 'ionic-native';
import { EventPage } from '../eventpage/event-page';
import { LocalData } from '../../providers/LocalData';
import { LocalStorage } from '../../providers/LocalStorage';
import { Observable } from 'rxjs/Rx';
var Newsfeed = (function () {
    function Newsfeed(navCtrl, localData, localStorage, alertCtrl, network, calendarCtrl) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.localData = localData;
        this.localStorage = localStorage;
        this.alertCtrl = alertCtrl;
        this.network = network;
        this.calendarCtrl = calendarCtrl;
        this.timeframe = "thisweek";
        this.feedType = "All";
        this.message = "All Events this week";
        console.log("Opening newsfeed");
        Observable.forkJoin([
            Observable.fromPromise(this.localData.getClubs(true)),
            Observable.fromPromise(this.localData.getCustomFeed()),
            Observable.fromPromise(this.localData.getExportedEvents())
        ])
            .subscribe(function (data) {
            _this.events = data[1];
            _this.clubs = data[0];
            console.log('events:', _this.events);
            // console.log("Events this week:",this.events[this.timeframe]);
            //console.log('clubs:',JSON.stringify(this.clubs));
        });
    }
    Newsfeed.prototype.hasEvents = function () {
        if (this.events != null) {
            if (this.feedType === "All") {
                return !this.isEmptyObj(this.events[this.timeframe]); //If not custom mode, just return whether there are events in the timeframe
            }
            else {
                for (var key in this.events[this.timeframe]) {
                    //Return true if there is a single visible event
                    if (this.events[this.timeframe][key].visible)
                        return true;
                }
            }
        }
        //Both custom mode and no visible events, or events are null
        return false;
    };
    Newsfeed.prototype.isEmptyObj = function (obj) {
        return JSON.stringify(obj) === JSON.stringify({});
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
    //For facebook links
    Newsfeed.prototype.openLink = function (url) {
        window.open(url, "_system");
    };
    Newsfeed.prototype.isValidURL = function () {
        return true;
    };
    Newsfeed.prototype.addToCalendar = function (event) {
        var startTime = new Date(event.start_date_time);
        var endTime = new Date(event.end_date_time);
        startTime.setHours(startTime.getUTCHours());
        endTime.setHours(endTime.getUTCHours());
        Calendar.createEventInteractively(event.title, event.location, event.sub_heading, startTime, endTime)
            .then(function (msg) { return console.log(msg); }, function (err) { return console.log(err); });
    };
    Newsfeed.prototype.viewEvent = function (event) {
        this.navCtrl.push(EventPage, { event: event, club: this.clubs[event.club_id.toString()] });
    };
    //Toggle between custom and all view
    Newsfeed.prototype.toggleFeed = function () {
        var _this = this;
        if (this.feedType == "Custom")
            this.feedType = "All";
        else {
            this.feedType = "Custom";
            if (Network.type != 'none') {
                this.localData.getCustomFeed()
                    .then(function (data) { return _this.events = data; })
                    .catch(function (err) { return console.log(err); });
            }
        }
    };
    Newsfeed.prototype.doRefresh = function (refresher) {
        var _this = this;
        if (Network.type != 'none') {
            this.localData.getCustomFeed()
                .then(function (data) {
                _this.events = data;
                console.log(Network.type);
                refresher.complete();
            }).catch(function (err) {
                console.log(err);
            });
        }
        else {
            this.showAlert('Oh snap!', "Looks like you're disconnected. Try again later!");
        }
    };
    return Newsfeed;
}());
Newsfeed = __decorate([
    Component({
        templateUrl: 'newsfeed.html'
    }),
    __metadata("design:paramtypes", [NavController, LocalData, LocalStorage, AlertController, Network, Calendar])
], Newsfeed);
export { Newsfeed };
//# sourceMappingURL=newsfeed.js.map