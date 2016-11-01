import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LocalData } from '../../providers/LocalData';
import { LocalStorage } from '../../providers/LocalStorage';
export var DiscountPage = (function () {
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
    DiscountPage.decorators = [
        { type: Component, args: [{
                    templateUrl: '../discount/discount.html'
                },] },
    ];
    /** @nocollapse */
    DiscountPage.ctorParameters = [
        { type: NavController, },
        { type: LocalData, },
        { type: LocalStorage, },
    ];
    return DiscountPage;
}());
