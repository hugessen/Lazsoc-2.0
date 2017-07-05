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
import { NavController, ToastController } from 'ionic-angular';
//Providers
import { LocalData } from '../../providers/LocalData';
import { LocalStorage } from '../../providers/LocalStorage';
import { ClubPage } from '../clubpage/clubpage';
import { Observable } from 'rxjs/Rx';
var ClubSelector = (function () {
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
            Observable.fromPromise(this.localData.getPrefs()),
            Observable.fromPromise(this.localData.getTags())
        ])
            .subscribe(function (data) {
            _this.clubs = data[0];
            _this.formatClubSocialLinks(); //Set up the social links
            _this.interests = _this.formatTags(data[2]);
            //console.log(data[1]);
            if (data[1] != {})
                _this.prefs = data[1];
            else
                _this.initializePrefs(_this.clubs, _this.interests);
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
        if (this.prefs.clubPrefs.hasOwnProperty(clubID.toString()))
            this.prefs.clubPrefs[clubID.toString()].selected = !this.prefs.clubPrefs[clubID.toString()].selected;
        else
            this.prefs.clubPrefs[clubID.toString()].selected = true;
    };
    ClubSelector.prototype.formatClubSocialLinks = function () {
        for (var _i = 0, _a = this.clubs; _i < _a.length; _i++) {
            var club = _a[_i];
            club.club_social_links = this.localData.formatSocialLinks(club.club_social_links);
        }
    };
    ClubSelector.prototype.formatTags = function (interests) {
        var result = [];
        var id = 0;
        for (var _i = 0, interests_1 = interests; _i < interests_1.length; _i++) {
            var interest = interests_1[_i];
            result.push({ name: interest, id: id++ });
        }
        return result;
    };
    ClubSelector.prototype.initializePrefs = function (clubs, tags) {
        console.log("initializing prefs");
        this.prefs = { clubPrefs: {}, interestPrefs: {} };
        for (var _i = 0, clubs_1 = clubs; _i < clubs_1.length; _i++) {
            var club = clubs_1[_i];
            this.prefs.clubPrefs[club.id.toString()] = { club_id: club.id, selected: false };
        }
        for (var _a = 0, tags_1 = tags; _a < tags_1.length; _a++) {
            var tag = tags_1[_a];
            this.prefs.interestPrefs[tag.name] = { interest_id: tag.id, selected: false };
        }
    };
    //Pushes a club page on the stack
    ClubSelector.prototype.viewClub = function (club) {
        this.navCtrl.push(ClubPage, { club: club, prefs: this.prefs, isModal: false });
    };
    //Cache your prefs
    ClubSelector.prototype.savePrefs = function () {
        console.log("Prefs", this.prefs);
        this.localStorage.set('prefs', this.prefs)
            .then(function (value) { return console.log("Preferences saved"); });
        //console.log("Saturday event: " + this.localData.doSaturdayEvent);
        this.showToast('Preferences saved!');
    };
    return ClubSelector;
}());
ClubSelector = __decorate([
    Component({
        templateUrl: 'clubselector.html',
        selector: 'club-selector'
    }),
    __metadata("design:paramtypes", [NavController, LocalData, ToastController, LocalStorage])
], ClubSelector);
export { ClubSelector };
//# sourceMappingURL=clubselector.js.map