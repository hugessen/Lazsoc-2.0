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
import { NavController, NavParams, ViewController } from 'ionic-angular';
import { LocalData } from '../../providers/LocalData';
import { Calendar } from 'ionic-native';
import { EventPage } from '../eventpage/event-page';
var ClubPage = (function () {
    //Current club being viewed is passed through NavParams
    function ClubPage(navCtrl, navParams, localData, viewCtrl) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.localData = localData;
        this.viewCtrl = viewCtrl;
        this.currentTime = new Date().getTime();
        this.club = this.navParams.get('club'); //The club whose page it is
        this.prefs = this.navParams.get('prefs'); //For the toggle() method
        this.isModal = this.navParams.get('isModal');
        console.log(JSON.stringify(this.club));
        this.localData.getCustomFeed(this.club) //Club is an optional param that restricts output to a particular club's events
            .then(function (res) {
            _this.events = res["thisweek"];
            console.log(_this.events);
        });
    }
    //Push an event on the stack to be viewed
    ClubPage.prototype.viewEvent = function (event) {
        this.navCtrl.push(EventPage, { event: event, club: this.club });
    };
    //Toggle the club as a preference
    ClubPage.prototype.toggle = function () {
        this.prefs.clubPrefs[this.club.id.toString()].selected = !this.prefs.clubPrefs[this.club.id.toString()].selected;
    };
    ClubPage.prototype.hasSocial = function (club) {
        return this.club.club_social_links.hasOwnProperty(club);
    };
    //Used to check if this club has events coming up. No point in looping through events if there aren't any
    ClubPage.prototype.isEmptyObj = function (obj) {
        return JSON.stringify(obj) === JSON.stringify({});
    };
    //For opening social media links
    ClubPage.prototype.openLink = function (url) {
        window.open(url, "_system");
    };
    //For adding events from the mini-newsfeed
    ClubPage.prototype.addToCalendar = function (event) {
        var startTime = new Date(event.start_date_time);
        var endTime = new Date(event.end_date_time);
        startTime.setHours(startTime.getUTCHours());
        endTime.setHours(endTime.getUTCHours());
        Calendar.createEventInteractively(event.title, event.location, event.sub_heading, startTime, endTime)
            .then(function (msg) { return console.log(msg); }, function (err) { return console.log(err); });
    };
    ClubPage.prototype.modalDismiss = function () {
        this.viewCtrl.dismiss();
    };
    return ClubPage;
}());
ClubPage = __decorate([
    Component({
        templateUrl: '../clubpage/clubpage.html'
    }),
    __metadata("design:paramtypes", [NavController, NavParams, LocalData, ViewController])
], ClubPage);
export { ClubPage };
//# sourceMappingURL=clubpage.js.map