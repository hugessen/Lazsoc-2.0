import {Component} from '@angular/core';
import {Newsfeed} from '../newsfeed/newsfeed';
import {ClubSelector} from '../clubselector/clubSelector';
//import {LoginPage} from '../login/login';
import {PersonalInfo} from '../personalinfo/personal-info';
import {DiscountPage} from '../discount/discount';

@Component({
  templateUrl: 'build/pages/tabs/tabs.html'
})
export class TabsPage {

  private newsfeed: any;
  private clubs: any;
  private login: any;
  private discount: any;

  constructor() {
    // this tells the tabs component which Pages
    // should be each tab's root Page
    this.newsfeed = Newsfeed;
    this.clubs = ClubSelector;
    this.login = PersonalInfo;
    this.discount = DiscountPage;
  }
}
