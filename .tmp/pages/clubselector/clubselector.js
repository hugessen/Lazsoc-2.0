import { Component } from '@angular/core';
import { NavController, ToastController } from 'ionic-angular';
import { LocalData } from '../../providers/LocalData';
import { LocalStorage } from '../../providers/LocalStorage';
import { ClubPage } from '../clubpage/clubpage';
import { Observable } from 'rxjs/Rx';
export var ClubSelector = (function () {
    function ClubSelector(navCtrl, localData, toastCtrl, localStorage) {
        this.navCtrl = navCtrl;
        this.localData = localData;
        this.toastCtrl = toastCtrl;
        this.localStorage = localStorage;
        this.localData = localData;
        this.init();
        this.view = "clubs";
    }
    //Concurrently pulls Clubs and Interests and assigns them
    ClubSelector.prototype.init = function () {
        var _this = this;
        Observable.forkJoin([
            Observable.fromPromise(this.localData.getClubs()),
            Observable.fromPromise(this.localData.getInterests()),
            Observable.fromPromise(this.localData.getPrefs())
        ])
            .subscribe(function (data) {
            _this.clubs = data[0];
            _this.interests = _this.localData.getInterestsLocally();
            if (data[2] != null)
                _this.prefs = data[2];
            else
                _this.prefs = { clubPrefs: {}, interestPrefs: {} };
        });
    };
    //Toast is just an inobtrusive message box at the bottom of the screen
    ClubSelector.prototype.showToast = function (message) {
        var toast = this.toastCtrl.create({
            message: message,
            duration: 2000,
            position: 'bottom'
        });
        toast.present();
    };
    //Toggle the selected property of a club
    ClubSelector.prototype.toggle = function (clubID) {
        this.prefs.clubPrefs[clubID.toString()].selected = !this.prefs.clubPrefs[clubID.toString()].selected;
    };
    //Pushes a club page on the stack
    ClubSelector.prototype.viewClub = function (club) {
        this.navCtrl.push(ClubPage, { club: club, prefs: this.prefs });
    };
    //Cache your prefs
    ClubSelector.prototype.savePrefs = function () {
        //Another way to concurrently resolve promises
        Promise.all([
            this.localStorage.set('prefs', this.prefs)
        ]).then(function (value) { return console.log("Preferences saved"); });
        this.showToast('Preferences saved!');
    };
    ClubSelector.decorators = [
        { type: Component, args: [{
                    templateUrl: 'clubselector.html'
                },] },
    ];
    /** @nocollapse */
    ClubSelector.ctorParameters = [
        { type: NavController, },
        { type: LocalData, },
        { type: ToastController, },
        { type: LocalStorage, },
    ];
    return ClubSelector;
}());
