import {Component, ViewChild} from '@angular/core';
import {Platform, ionicBootstrap, Nav, NavController} from 'ionic-angular';
import {StatusBar} from 'ionic-native';
import {TabsPage} from './pages/tabs/tabs';
import {WebAPI} from './providers/WebAPI';
import {EventPage} from './pages/eventpage/event-page';

import {LoginPage} from './pages/login/login';
import {Newsfeed} from './pages/newsfeed/newsfeed';
import {ClubSelector} from './pages/clubselector/clubselector';
import {DiscountPage} from './pages/discount/discount';


@Component({
  templateUrl: 'build/app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;
  rootPage: any;
  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform) {
    this.pages = [
        { title: "Newsfeed", component: Newsfeed},
        { title: "Club Selector", component: ClubSelector},
        { title: "Login", component: LoginPage},
        { title: "Discount", component: DiscountPage}
    ]
    this.rootPage = DiscountPage;
  }
  initializeApp(){
      this.platform.ready().then(() => {
      StatusBar.styleDefault();
    });
  }
  openPage(page){
      this.nav.setRoot(page.component);
  }
}


ionicBootstrap(MyApp,[WebAPI]);
