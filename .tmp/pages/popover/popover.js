import { Component } from '@angular/core';
import { ViewController, NavParams } from 'ionic-angular';
export var PopoverPage = (function () {
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
    PopoverPage.decorators = [
        { type: Component, args: [{
                    templateUrl: 'popover.html'
                },] },
    ];
    /** @nocollapse */
    PopoverPage.ctorParameters = [
        { type: ViewController, },
        { type: NavParams, },
    ];
    return PopoverPage;
}());
