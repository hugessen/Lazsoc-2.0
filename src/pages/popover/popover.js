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
import { ViewController, NavParams } from 'ionic-angular';
var PopoverPage = (function () {
    function PopoverPage(viewCtrl, navParams) {
        this.viewCtrl = viewCtrl;
        this.navParams = navParams;
        this.feedType = navParams.get('feedType');
        this.timeframe = navParams.get('timeframe');
    }
    PopoverPage.prototype.close = function () {
        console.log("feed type: " + this.feedType + " timeframe: " + this.timeframe);
        this.viewCtrl.dismiss({ feedType: this.feedType, timeframe: this.timeframe });
    };
    return PopoverPage;
}());
PopoverPage = __decorate([
    Component({
        templateUrl: 'popover.html'
    }),
    __metadata("design:paramtypes", [ViewController, NavParams])
], PopoverPage);
export { PopoverPage };
//# sourceMappingURL=popover.js.map