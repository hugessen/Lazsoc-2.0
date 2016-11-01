import { Component } from '@angular/core';
import { NavController, NavParams, ModalController } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { LocalData } from '../../providers/LocalData';
import { LocalStorage } from '../../providers/LocalStorage';
export var PersonalInfo = (function () {
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
            _this.userData = JSON.parse(data);
            _this.hasInfo = true;
        });
    }
    PersonalInfo.prototype.openLogin = function () {
        var _this = this;
        var modal = this.modalCtrl.create(LoginPage, { userData: this.userData }); // everything in the {} are my params to be passed to the Modal
        modal.onDidDismiss(function (data) {
            _this.userData.personalInfo = {
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
    PersonalInfo.decorators = [
        { type: Component, args: [{
                    selector: 'personal-info',
                    templateUrl: 'personal-info.html'
                },] },
    ];
    /** @nocollapse */
    PersonalInfo.ctorParameters = [
        { type: NavController, },
        { type: NavParams, },
        { type: ModalController, },
        { type: LocalData, },
        { type: LocalStorage, },
    ];
    return PersonalInfo;
}());
