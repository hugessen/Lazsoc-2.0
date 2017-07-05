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
import { NavController, NavParams, ModalController } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { LocalData } from '../../providers/LocalData';
import { LocalStorage } from '../../providers/LocalStorage';
var PersonalInfo = (function () {
    function PersonalInfo(navCtrl, navParams, modalCtrl, localData, localStorage) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.modalCtrl = modalCtrl;
        this.localData = localData;
        this.localStorage = localStorage;
        this.hasInfo = false;
        this.navCtrl = navCtrl;
        this.localStorage.get('userdata')
            .then(function (data) {
            if (data != null) {
                _this.userData = JSON.parse(data);
            }
            else {
                _this.userData = { firstname: "", lastname: "", email: "", studyYear: 0, program: "" };
                _this.openLogin();
            }
            _this.hasInfo = true;
        });
    }
    PersonalInfo.prototype.openLogin = function () {
        var _this = this;
        var modal = this.modalCtrl.create(LoginPage, { userData: this.userData, isInit: false, clubs: null, interests: null, prefs: null }); // everything in the {} are my params to be passed to the Modal
        modal.onDidDismiss(function (data) {
            _this.userData = {
                firstname: data.firstname,
                lastname: data.lastname,
                email: data.email,
                studyYear: data.studyYear,
                program: data.program
            };
            console.log(_this.userData);
            _this.localStorage.set('userdata', _this.userData);
            _this.hasInfo = true; //So I know whether we have the user's info
        });
        modal.present(); // Loading the Modal
    };
    return PersonalInfo;
}());
PersonalInfo = __decorate([
    Component({
        selector: 'personal-info',
        templateUrl: 'personal-info.html'
    }),
    __metadata("design:paramtypes", [NavController, NavParams, ModalController, LocalData, LocalStorage])
], PersonalInfo);
export { PersonalInfo };
//# sourceMappingURL=personal-info.js.map