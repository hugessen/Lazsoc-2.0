var _this = this;
import { Component } from '@angular/core';
import { NavController, AlertController, PopoverController } from 'ionic-angular';
import { Calendar, Network } from 'ionic-native';
import { EventPage } from '../eventpage/event-page';
import { PopoverPage } from '../popover/popover';
import { LocalData } from '../../providers/LocalData';
var disconnectSubscription = Network.onDisconnect().subscribe(function () {
    _this.showAlert('Disconnected!', 'network was disconnected :-(');
});
var connectSubscription = Network.onConnect().subscribe(function () {
    _this.showAlert('network connected!', '');
});
export var Newsfeed = (function () {
    function Newsfeed(navCtrl, localData, alertCtrl, popoverCtrl) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.localData = localData;
        this.alertCtrl = alertCtrl;
        this.popoverCtrl = popoverCtrl;
        this.timeframe = "this week";
        this.feedType = "all";
        this.message = "All Events This Week";
        this.localData.getCustomFeed()
            .then(function (data) {
            _this.events = data;
            console.log(_this.events);
        });
        this.localData.getClubs()
            .then(function (data) {
            _this.clubs = data;
            console.log(_this.clubs);
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
    Newsfeed.prototype.addToCalendar = function (event) {
        Calendar.createEventInteractively(event.title, event.location, event.subheader, new Date(event.startDate), new Date(event.endDate))
            .then(function (msg) { return console.log(msg); }, function (err) { return console.log(err); });
    };
    Newsfeed.prototype.viewEvent = function (event) {
        this.navCtrl.push(EventPage, { event: event, club: this.clubs[event.clubRef] });
    };
    Newsfeed.prototype.doRefresh = function (refresher) {
        var _this = this;
        if (Network.connection.toString() != 'none') {
            this.localData.getCustomFeed()
                .then(function (data) {
                _this.events = data;
                refresher.complete();
            });
        }
        else {
            this.showAlert('Oh snap!', "Looks like you're disconnected. Try again later!");
        }
    };
    Newsfeed.decorators = [
        { type: Component, args: [{
                    templateUrl: 'newsfeed.html',
                },] },
    ];
    /** @nocollapse */
    Newsfeed.ctorParameters = [
        { type: NavController, },
        { type: LocalData, },
        { type: AlertController, },
        { type: PopoverController, },
    ];
    return Newsfeed;
}());
