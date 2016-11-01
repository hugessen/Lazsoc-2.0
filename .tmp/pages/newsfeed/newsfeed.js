import { Component } from '@angular/core';
import { NavController, AlertController, PopoverController } from 'ionic-angular';
import { Calendar, Network } from 'ionic-native';
import { EventPage } from '../eventpage/event-page';
import { PopoverPage } from '../popover/popover';
import { LocalData } from '../../providers/LocalData';
import { LocalStorage } from '../../providers/LocalStorage';
import { Observable } from 'rxjs/Rx';
export var Newsfeed = (function () {
    function Newsfeed(navCtrl, localData, localStorage, alertCtrl, popoverCtrl) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.localData = localData;
        this.localStorage = localStorage;
        this.alertCtrl = alertCtrl;
        this.popoverCtrl = popoverCtrl;
        this.timeframe = "this week";
        this.feedType = "all";
        this.message = "All Events This Week";
        Observable.forkJoin([
            Observable.fromPromise(this.localData.getClubs(true)),
            Observable.fromPromise(this.localData.getCustomFeed())
        ])
            .subscribe(function (data) {
            _this.events = data[1];
            _this.clubs = data[0];
            console.log('events:', _this.events);
            console.log('clubs:', _this.clubs);
        });
    }
    Newsfeed.prototype.showAlert = function (title, message) {
        var alert = this.alertCtrl.create({
            title: title,
            subTitle: message,
            buttons: ['OK']
        });
        alert.present();
    };
    Newsfeed.prototype.presentPopover = function (myEvent) {
        var _this = this;
        var popover = this.popoverCtrl.create(PopoverPage, { feedType: this.feedType, timeframe: this.timeframe }, { enableBackdropDismiss: false });
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
        Calendar.createEventInteractively(event.title, event.location, event.sub_heading, new Date(event.start_date_time), new Date(event.end_date_time))
            .then(function (msg) { return console.log(msg); }, function (err) { return console.log(err); });
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
                refresher.complete();
            }).catch(function (err) {
                _this.showAlert("Promise didn't return", err);
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
    ];
    return Newsfeed;
}());
