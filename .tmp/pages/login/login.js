import { Component } from '@angular/core';
import { NavParams, ViewController, ToastController } from 'ionic-angular';
import { LocalStorage } from '../../providers/LocalStorage';
export var LoginPage = (function () {
    function LoginPage(navParams, viewCtrl, toastCtrl, localStorage) {
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.toastCtrl = toastCtrl;
        this.localStorage = localStorage;
        this.programOptions = ['BBA', 'BBA/Financial Math', 'BBA/Computer Science (UW)', 'BBA/Computer Science (WLU)', 'BBA/Math (UW)', 'Communications'];
        this.userData = navParams.get('userData');
        console.log(this.userData);
    }
    LoginPage.prototype.submit = function () {
        // if (this.userData.personalInfo.firstname ==='' || this.userData.personalInfo.lastname ==='' || this.userData.personalInfo.email ==='' || this.userData.personalInfo.studyYear == 0 || this.userData.personalInfo.program === '') { //Check if any fields are empty
        //     this.showToast('Please enter all information');
        // }
        // else{ //Input validated. Now we pass the data back down to userData via NavParams
        console.log(this.userData);
        this.localStorage.set('userdata', this.userData);
        this.viewCtrl.dismiss(this.userData);
        // }
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
        { type: LocalStorage, },
    ];
    return LoginPage;
}());
