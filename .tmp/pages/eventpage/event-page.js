import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Calendar } from 'ionic-native';
export var EventPage = (function () {
    function EventPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.event = this.navParams.get('event'); //Event object being passed via NavParams
        this.club = this.navParams.get('club');
    }
    EventPage.prototype.addToCalendar = function () {
        Calendar.createEventInteractively(this.event.title, this.event.location, this.event.sub_heading, new Date(this.event.start_date_time), new Date(this.event.end_date_time))
            .then(function (msg) { return console.log(msg); }, function (err) { return console.log(err); });
    };
    EventPage.prototype.getTime = function (date) {
        var hour = new Date(date).getHours();
        var min = new Date(date).getMinutes();
        var minStr = (min < 10) ? min + "0" : min;
        var ampm = (hour < 12) ? "AM" : "PM";
        return (hour % 12 + ":" + minStr + " " + ampm);
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
