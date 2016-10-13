import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Calendar } from 'ionic-native';
export var EventPage = (function () {
    function EventPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.event = this.navParams.get('event'); //Event object being passed via NavParams
        this.message = "this works";
    }
    EventPage.prototype.addToCalendar = function () {
        Calendar.createEventInteractively(this.event.title, this.event.location, this.event.tagline, new Date(this.event.startTime), new Date(this.event.endTime))
            .then(function (msg) { return console.log(msg); }, function (err) { return console.log(err); });
    };
    EventPage.decorators = [
        { type: Component, args: [{
                    templateUrl: '../eventpage/event-page.html'
                },] },
    ];
    /** @nocollapse */
    EventPage.ctorParameters = [
        { type: NavController, },
        { type: NavParams, },
    ];
    return EventPage;
}());