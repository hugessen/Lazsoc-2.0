import {Component, ViewChild} from '@angular/core';
import {Platform, ionicBootstrap, Nav, NavController} from 'ionic-angular';
import {StatusBar} from 'ionic-native';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

//Providers
import {WebAPI} from './providers/WebAPI';
import {LocalData} from './providers/LocalData';
import { CacheService } from './providers/CacheService';

//Page Views
import {TabsPage} from './pages/tabs/tabs';
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
  
  
  /*Nearly everything on this page is used to create a sidemenu
  Because I'm currently implementing a tabbed interface, much of this code is unused.
  I've kept it here in case we decide to use a sidemenu instead */
  
  constructor(public platform: Platform) {
    //Not used
    this.pages = [
        { title: "Newsfeed", component: Newsfeed},
        { title: "Club Selector", component: ClubSelector},
        { title: "Login", component: LoginPage},
        { title: "Discount", component: DiscountPage}
    ]
    
    //Important
    this.rootPage = TabsPage; //TabsPage handles navigation between tabs. Has no content itself
  }
  
  //Important
  initializeApp(){
      this.platform.ready().then(() => {
      StatusBar.styleDefault();
    });
  }
  
  //Not used
  openPage(page){
      this.nav.setRoot(page.component);
  }
}

//Important
ionicBootstrap(MyApp,[WebAPI, LocalData, CacheService]);  

