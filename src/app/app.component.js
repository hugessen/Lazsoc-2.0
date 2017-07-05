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
import { Platform, ModalController } from 'ionic-angular';
import { StatusBar } from 'ionic-native';
import { LocalStorage } from '../providers/LocalStorage';
import { LocalData } from '../providers/LocalData';
import { LoginPage } from '../pages/login/login';
import { TabsPage } from '../pages/tabs/tabs';
import { Observable } from 'rxjs/Rx';
/* This class performs the initial setup of the app.
 * It calls the initial login
 */
var MyApp = (function () {
    function MyApp(platform, modalCtrl, localStorage, localData) {
        var _this = this;
        this.modalCtrl = modalCtrl;
        this.localStorage = localStorage;
        this.localData = localData;
        this.rootPage = TabsPage;
        Observable.forkJoin([
            Observable.fromPromise(this.localData.getClubs()),
            Observable.fromPromise(this.localStorage.get('userdata')),
            Observable.fromPromise(this.localData.getTags())
        ])
            .subscribe(function (data) {
            if (data[1] == null) {
                _this.clubs = data[0];
                _this.tags = data[2];
                _this.userData = { firstname: "", lastname: "", email: "", studyYear: 0, program: "" };
                _this.openLogin();
            }
            else
                console.log("Not opening login"); // Because the user has already input their info
        });
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            StatusBar.overlaysWebView(false);
            StatusBar.backgroundColorByHexString("#422C89");
        });
    }
    MyApp.prototype.openLogin = function () {
        var modal = this.modalCtrl.create(LoginPage, { userData: this.userData, isInit: true, clubs: this.clubs, tags: this.tags }); // everything in the {} are my params to be passed to the Modal
        modal.present(); // Loading the Modal
    };
    return MyApp;
}());
MyApp = __decorate([
    Component({
        templateUrl: 'app.html'
    }),
    __metadata("design:paramtypes", [Platform, ModalController, LocalStorage, LocalData])
], MyApp);
export { MyApp };
//# sourceMappingURL=app.component.js.map