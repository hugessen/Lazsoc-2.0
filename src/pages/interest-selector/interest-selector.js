var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, Input } from '@angular/core';
import { NavController, NavParams, ModalController } from 'ionic-angular';
import { LocalData } from '../../providers/LocalData';
import { LocalStorage } from '../../providers/LocalStorage';
var InterestSelector = (function () {
    function InterestSelector(navCtrl, navParams, modalCtrl, localData, localStorage) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.modalCtrl = modalCtrl;
        this.localData = localData;
        this.localStorage = localStorage;
        this.navCtrl = navCtrl;
        this.localData.getTags()
            .then(function (data) {
            _this.interests = _this.formatTags(data);
        });
        console.log("interest-selector:", this.interests);
    }
    InterestSelector.prototype.formatTags = function (interests) {
        var result = [];
        var id = 0;
        for (var _i = 0, interests_1 = interests; _i < interests_1.length; _i++) {
            var interest = interests_1[_i];
            result.push({ name: interest, id: id++ });
        }
        return result;
    };
    return InterestSelector;
}());
__decorate([
    Input(),
    __metadata("design:type", Array)
], InterestSelector.prototype, "interests", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], InterestSelector.prototype, "prefs", void 0);
InterestSelector = __decorate([
    Component({
        selector: 'interest-selector',
        templateUrl: 'interest-selector.html'
    }),
    __metadata("design:paramtypes", [NavController, NavParams, ModalController, LocalData, LocalStorage])
], InterestSelector);
export { InterestSelector };
//# sourceMappingURL=interest-selector.js.map