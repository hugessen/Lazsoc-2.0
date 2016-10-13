import { Component } from '@angular/core';
import { NavController, NavParams, ModalController } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { LocalData } from '../../providers/LocalData';
export var PersonalInfo = (function () {
    function PersonalInfo(navCtrl, navParams, modalCtrl, localData) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.modalCtrl = modalCtrl;
        this.localData = localData;
        this.hasInfo = false;
        this.userData = { firstname: "", lastname: "", email: "", studyYear: 0, program: "" };
        this.navCtrl = navCtrl;
        this.init();
    }
    PersonalInfo.prototype.init = function () {
        var _this = this;
        this.localData.getUserInfo()
            .then(function (data) {
            _this.userData = data;
            _this.hasInfo = true;
        }).catch(function (err) {
            console.log(err);
            _this.openLogin();
        }); //Somehow we don't have their data, so we open the login
    };
    PersonalInfo.prototype.openLogin = function () {
        var _this = this;
        var modal = this.modalCtrl.create(LoginPage); // everything in the {} are my params to be passed to the Modal
        modal.onDidDismiss(function (data) {
            _this.userData = {
                firstname: data.firstname,
                lastname: data.lastname,
                email: data.email,
                studyYear: data.studyYear,
                program: data.program
            };
            _this.hasInfo = true; //So I know whether we have the user's info
        });
        modal.present(); // Loading the Modal
    };
    PersonalInfo.decorators = [
        { type: Component, args: [{
                    templateUrl: '../personalinfo/personal-info.html'
                },] },
    ];
    /** @nocollapse */
    PersonalInfo.ctorParameters = [
        { type: NavController, },
        { type: NavParams, },
        { type: ModalController, },
        { type: LocalData, },
    ];
    return PersonalInfo;
}());
