import { Component } from '@angular/core';
import { Newsfeed } from '../newsfeed/newsfeed';
import { ClubSelector } from '../clubselector/clubselector';
import { PersonalInfo } from '../personalinfo/personal-info';
import { DiscountPage } from '../discount/discount';
export var TabsPage = (function () {
    function TabsPage() {
        // this tells the tabs component which Pages should be each tab's root Page
        this.newsfeed = Newsfeed;
        this.clubs = ClubSelector;
        this.login = PersonalInfo;
        this.discount = DiscountPage;
    }
    TabsPage.decorators = [
        { type: Component, args: [{
                    templateUrl: '../tabs/tabs.html'
                },] },
    ];
    /** @nocollapse */
    TabsPage.ctorParameters = [];
    return TabsPage;
}());
