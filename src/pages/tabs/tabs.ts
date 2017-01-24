import {Component} from '@angular/core';
import {Newsfeed} from '../newsfeed/newsfeed';
import {ClubSelector} from '../clubselector/clubselector';
import {Hiring} from '../hiring/hiring';
import {DiscountPage} from '../discount/discount';

@Component({
  templateUrl: '../tabs/tabs.html'
})
export class TabsPage {

  public newsfeed: any;
  public clubs: any;
  public hiring: any;
  public discount: any;

  constructor() {
    // this tells the tabs component which Pages should be each tab's root Page
    this.newsfeed = Newsfeed;
    this.clubs = ClubSelector;
    this.hiring = Hiring;
    this.discount = DiscountPage;
  }
}
