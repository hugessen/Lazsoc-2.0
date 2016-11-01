import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { LocalData } from '../../providers/LocalData';
import { EventPage } from '../eventpage/event-page';
export var ClubPage = (function () {
    //Current club being viewed is passed through NavParams
    function ClubPage(navCtrl, navParams, localData) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.localData = localData;
        this.currentTime = new Date().getTime();
        this.club = this.navParams.get('club');
        this.userData = this.navParams.get('userData');
        this.club.club_social_links = this.localData.formatSocialLinks(this.club.club_social_links);
        console.log(this.club.club_social_links);
        this.localData.getCustomFeed(this.club)
            .then(function (res) {
            _this.events = res;
        });
    }
    ClubPage.prototype.viewEvent = function (event) {
        this.navCtrl.push(EventPage, { event: event, club: this.club });
    };
    ClubPage.prototype.toggle = function () {
        this.userData.clubPrefs[this.club.id.toString()].selected = !this.userData.clubPrefs[this.club.id.toString()].selected;
    };
    ClubPage.prototype.openLink = function (url) {
        window.open(url, "_system");
    };
    ClubPage.decorators = [
        { type: Component, args: [{
                    templateUrl: '../clubpage/clubpage.html'
                },] },
    ];
    /** @nocollapse */
    ClubPage.ctorParameters = [
        { type: NavController, },
        { type: NavParams, },
        { type: LocalData, },
    ];
    return ClubPage;
}());
