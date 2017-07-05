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
import { NavController, NavParams } from 'ionic-angular';
import { Calendar } from 'ionic-native';
var EventPage = (function () {
    function EventPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.event = this.navParams.get('event'); //Event object being passed via NavParams
        this.club = this.navParams.get('club');
        this.multiDay = ((new Date(this.event.end_date_time).getDate() - new Date(this.event.start_date_time).getDate()) > 0) ? true : false;
        this.startTime = this.getTime(this.event.start_date_time);
        this.endTime = this.getTime(this.event.end_date_time);
    }
    EventPage.prototype.addToCalendar = function () {
        var startTime = new Date(this.event.start_date_time);
        var endTime = new Date(this.event.end_date_time);
        startTime.setHours(startTime.getUTCHours());
        endTime.setHours(endTime.getUTCHours());
        Calendar.createEventInteractively(this.event.title, this.event.location, this.event.sub_heading, startTime, endTime)
            .then(function (msg) { return console.log(msg); }, function (err) { return console.log(err); });
    };
    EventPage.prototype.getTime = function (date) {
        var hour = new Date(date).getUTCHours();
        var min = new Date(date).getUTCMinutes();
        var minStr = (min < 10) ? min + "0" : min;
        var ampm = (hour < 12) ? "AM" : "PM";
        if (hour > 12) {
            hour = hour % 12;
        }
        return (hour + ":" + minStr + " " + ampm);
    };
    EventPage.prototype.openLink = function (url) {
        window.open(url, "_system");
    };
    return EventPage;
}());
EventPage = __decorate([
    Component({
        templateUrl: '../eventpage/event-page.html'
    }),
    __metadata("design:paramtypes", [NavController, NavParams])
], EventPage);
export { EventPage };
//# sourceMappingURL=event-page.js.map