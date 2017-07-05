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
import { NavParams, ViewController, ToastController, ModalController } from 'ionic-angular';
import { LocalStorage } from '../../providers/LocalStorage';
import { ClubPage } from '../clubpage/clubpage';
var LoginPage = (function () {
    function LoginPage(navParams, viewCtrl, toastCtrl, localStorage, modalCtrl) {
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.toastCtrl = toastCtrl;
        this.localStorage = localStorage;
        this.modalCtrl = modalCtrl;
        this.state = "personalinfo";
        this.programOptions = ['BBA', 'BBA/Financial Math', 'BBA/Computer Science (UW)', 'BBA/Computer Science (WLU)', 'BBA/Math (UW)', 'Economics', 'Communications'];
        this.userData = navParams.get('userData');
        this.isInit = navParams.get('isInit');
        this.clubs = navParams.get('clubs');
        this.tags = this.formatTags(navParams.get('tags'));
        console.log(this.clubs);
        if (this.isInit) {
            this.initializePrefs();
        }
        console.log(this.userData);
        console.log(this.tags);
    }
    LoginPage.prototype.submit = function () {
        if (this.isValidLogin()) {
            this.showToast('Please enter all information');
        }
        else {
            console.log("Userdata after input:", this.userData);
            this.localStorage.set('userdata', this.userData);
            this.viewCtrl.dismiss(this.userData);
        }
    };
    LoginPage.prototype.toggle = function (clubID) {
        this.prefs.clubPrefs[clubID.toString()].selected = !this.prefs.clubPrefs[clubID.toString()].selected;
    };
    LoginPage.prototype.isValidLogin = function () {
        return (this.userData.firstname === '' || this.userData.lastname === '' || !this.isValidEmail(this.userData.email) || this.userData.studyYear == 0 || this.userData.program === '');
    };
    LoginPage.prototype.isValidEmail = function (email) {
        var isValid = (email.length == 21 && email.substring(8) == '@mylaurier.ca' && this.isNumeric(email.substring(4, 8)));
        return isValid;
    };
    LoginPage.prototype.isNumeric = function (str) {
        return /^\d+$/.test(str); //Somehow this checks if a value is numeric. Unfortunately isNaN() doesn't like strings in TypeScript
    };
    LoginPage.prototype.initializePrefs = function () {
        this.prefs = { clubPrefs: {}, interestPrefs: {} };
        for (var _i = 0, _a = this.clubs; _i < _a.length; _i++) {
            var club = _a[_i];
            this.prefs.clubPrefs[club.id.toString()] = { club_id: club.id, selected: false };
        }
        for (var _b = 0, _c = this.tags; _b < _c.length; _b++) {
            var tag = _c[_b];
            this.prefs.interestPrefs[tag.name] = { interest_id: tag.id, selected: false };
        }
        console.log("prefs", this.prefs);
    };
    LoginPage.prototype.next = function () {
        if (this.state == "personalinfo") {
            if (this.isValidLogin()) {
                this.showToast('Please enter all information');
            }
            else
                this.state = "clubs";
        }
        else if (this.state == "clubs")
            this.state = "interests";
        else if (this.state == "interests")
            this.submitInit();
    };
    LoginPage.prototype.submitInit = function () {
        this.localStorage.set('userdata', this.userData);
        this.localStorage.set('prefs', this.prefs);
        this.viewCtrl.dismiss();
    };
    LoginPage.prototype.viewClub = function (clubParam) {
        var clubpage = this.modalCtrl.create(ClubPage, { club: clubParam, prefs: this.prefs, isModal: true }); // everything in the {} are my params to be passed to the Modal
        clubpage.present(); // Loading the Modal
    };
    LoginPage.prototype.formatTags = function (interests) {
        var result = [];
        var id = 0;
        for (var _i = 0, interests_1 = interests; _i < interests_1.length; _i++) {
            var interest = interests_1[_i];
            result.push({ name: interest, id: id++ });
        }
        return result;
    };
    //Toast is just an inobtrusive message box at the bottom of the screen
    LoginPage.prototype.showToast = function (message) {
        var toast = this.toastCtrl.create({
            message: message,
            duration: 2000,
            position: 'bottom'
        });
        toast.present();
    };
    return LoginPage;
}());
LoginPage = __decorate([
    Component({
        templateUrl: '../login/login.html'
    }),
    __metadata("design:paramtypes", [NavParams, ViewController, ToastController, LocalStorage, ModalController])
], LoginPage);
export { LoginPage };
//# sourceMappingURL=login.js.map