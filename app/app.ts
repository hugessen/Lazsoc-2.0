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
    //Array of JSON page objects. Sidemenu iterates through these and navigates to their component when clicked
    //Any new page to be added to the sidemenu, just import its component at the top and add it to this list. Everything else is handled
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


ionicBootstrap(MyApp,[WebAPI]); //We bootstrap WebAPI so that there is a singular instance of it available to all Components. 
// The alternative is to define a localized instance for each Component. Either is fine, it's just dependent on how you want to use it.
