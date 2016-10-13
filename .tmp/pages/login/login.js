import { Component } from '@angular/core';
import { NavParams, ViewController, ToastController } from 'ionic-angular';
import { LocalData } from '../../providers/LocalData';
export var LoginPage = (function () {
    function LoginPage(navParams, viewCtrl, toastCtrl, localData) {
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.toastCtrl = toastCtrl;
        this.localData = localData;
        this.programOptions = ['BBA', 'BBA/Financial Math', 'BBA/Computer Science (UW)', 'BBA/Computer Science (WLU)', 'BBA/Math (UW)', 'Communications'];
        this.userData = { firstname: "", lastname: "", email: "", studyYear: 0, program: "" };
    }
    LoginPage.prototype.submit = function () {
        if (this.userData.firstname === '' || this.userData.lastname === '' || this.userData.email === '' || this.userData.studyYear == 0 || this.userData.program === '') {
            this.showToast('Please enter all information');
        }
        else if (!this.isValidEmail(this.userData.email)) {
            this.showToast('Invalid MyLaurier Email');
        }
        else
            this.localData.saveData('userdata', this.userData);
        this.viewCtrl.dismiss(this.userData);
    };
    LoginPage.prototype.isValidEmail = function (email) {
        var isValid = (email.length == 21 && email.substring(8) == '@mylaurier.ca' && this.isNumeric(email.substring(4, 8)));
        return isValid;
    };
    LoginPage.prototype.isNumeric = function (str) {
        return /^\d+$/.test(str); //Somehow this checks if a value is numeric. Unfortunately isNaN() doesn't like strings in TypeScript
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
    LoginPage.decorators = [
        { type: Component, args: [{
                    templateUrl: '../login/login.html'
                },] },
    ];
    /** @nocollapse */
    LoginPage.ctorParameters = [
        { type: NavParams, },
        { type: ViewController, },
        { type: ToastController, },
        { type: LocalData, },
    ];
    return LoginPage;
}());
