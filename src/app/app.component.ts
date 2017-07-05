import { Component } from '@angular/core';
import { Platform, ModalController } from 'ionic-angular';
import { StatusBar } from 'ionic-native';

import { LocalStorage } from '../providers/LocalStorage';
import { LocalData } from '../providers/LocalData';

import { Club } from '../models/club';
import { Event_Tag } from '../models/event_tag';

import { LoginPage } from '../pages/login/login';
import { TabsPage } from '../pages/tabs/tabs';
import { UserData } from '../models/userdata';
import { Observable } from 'rxjs/Rx';

/* This class performs the initial setup of the app. 
 * It calls the initial login
 */

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage = TabsPage;
  userData:UserData;
  clubs:any[];
  tags: Event_Tag[];
  prefs:any;

  constructor(platform: Platform, private modalCtrl:ModalController, private localStorage:LocalStorage, private localData:LocalData) {
    Observable.forkJoin([
        Observable.fromPromise(this.localData.getClubs()),
        Observable.fromPromise(this.localStorage.get('userdata')),
        Observable.fromPromise(this.localData.getTags())
      ])
      .subscribe(data => {
        if(data[1] == null){ //data[1] refers to user info. If null, we can assume they have never logged in
          this.clubs = data[0];
          this.tags = data[2];
          this.userData = {firstname:"",lastname:"",email:"",studyYear:0,program:""};
          this.openLogin();
        } 
        else console.log("Not opening login"); // Because the user has already input their info
      })
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.overlaysWebView(false);
      StatusBar.backgroundColorByHexString("#422C89");
    });
  }

  openLogin(){
    let modal = this.modalCtrl.create(LoginPage,{userData:this.userData,isInit:true,clubs:this.clubs,tags:this.tags});// everything in the {} are my params to be passed to the Modal
    modal.present(); // Loading the Modal
  }
}
