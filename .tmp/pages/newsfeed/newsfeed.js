var _this = this;
import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import { Calendar, Network } from 'ionic-native';
import { EventPage } from '../eventpage/event-page';
import { LocalData } from '../../providers/LocalData';
var disconnectSubscription = Network.onDisconnect().subscribe(function () {
    _this.showAlert('Disconnected!', 'network was disconnected :-(');
});
var connectSubscription = Network.onConnect().subscribe(function () {
    _this.showAlert('network connected!', '');
});
export var Newsfeed = (function () {
    function Newsfeed(navCtrl, localData, alertCtrl) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.localData = localData;
        this.alertCtrl = alertCtrl;
        this.localData.getCustomFeed()
            .then(function (data) {
            _this.events = data;
            console.log(_this.events);
        });
        this.view = "custom"; //Set to the All Events view initially
    }
    Newsfeed.prototype.showAlert = function (title, message) {
        var alert = this.alertCtrl.create({
            title: title,
            subTitle: message,
            buttons: ['OK']
        });
        alert.present();
    };
    Newsfeed.prototype.addToCalendar = function (event) {
        Calendar.createEventInteractively(event.title, event.location, event.tagline, new Date(event.startTime), new Date(event.endTime))
            .then(function (msg) { return console.log(msg); }, function (err) { return console.log(err); });
    };
    Newsfeed.prototype.viewEvent = function (event) {
        this.navCtrl.push(EventPage, { event: event });
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
                    templateUrl: '../newsfeed/newsfeed.html',
                },] },
    ];
    /** @nocollapse */
    Newsfeed.ctorParameters = [
        { type: NavController, },
        { type: LocalData, },
        { type: AlertController, },
    ];
    return Newsfeed;
}());
