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
import { NavController } from 'ionic-angular';
import { LocalData } from '../../providers/LocalData';
import { LocalStorage } from '../../providers/LocalStorage';
var DiscountPage = (function () {
    function DiscountPage(navCtrl, localData, localStorage) {
        this.navCtrl = navCtrl;
        this.localData = localData;
        this.localStorage = localStorage;
        this.getSponsors();
    }
    DiscountPage.prototype.getSponsors = function () {
        var _this = this;
        this.localData.getDiscountSponsors()
            .then(function (data) {
            _this.allSponsors = data.cacheVal;
            _this.sponsorsRows = _this.sponsorsToRows(_this.allSponsors, 2);
        });
    };
    //Credit to Zeeshan for creating this method. Outputs a 2D array of DiscountSponsors[size], so we can output them in columns
    DiscountPage.prototype.sponsorsToRows = function (sponsors, size) {
        var result;
        result = [];
        for (var x = 0; x < sponsors.length; x += size) {
            result.push(sponsors.slice(x, x + size));
        }
        // Every row MUST be full, if it is not then add in spacing to make sure they're all the same size
        for (var x = 0; x < result.length; x++) {
            while (result[x].length % size != 0) {
                result[x].push({
                    name: "",
                    logo: "",
                    discount: ""
                });
            }
        }
        return result;
    };
    return DiscountPage;
}());
DiscountPage = __decorate([
    Component({
        templateUrl: '../discount/discount.html'
    }),
    __metadata("design:paramtypes", [NavController, LocalData, LocalStorage])
], DiscountPage);
export { DiscountPage };
//# sourceMappingURL=discount.js.map