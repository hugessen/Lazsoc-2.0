import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { LocalData } from '../../providers/LocalData';
export var ClubPage = (function () {
    //Current club being viewed is passed through NavParams
    function ClubPage(navCtrl, navParams, localData) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.localData = localData;
        this.club = this.navParams.get('club');
        console.log(this.club);
        this.localData.getCustomFeed()
            .then(function (data) { return _this.events = data; });
    }
    ClubPage.prototype.toggle = function () {
        this.club.selected = !this.club.selected;
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
