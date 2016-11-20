import { Component } from '@angular/core';
import { Platform, ModalController } from 'ionic-angular';
import { StatusBar } from 'ionic-native';

import { LocalStorage } from '../providers/LocalStorage';
import { LocalData } from '../providers/LocalData';

import { Club } from '../models/club';
import { Interest } from '../models/interest';
import { Pref } from '../models/pref';

import { LoginPage } from '../pages/login/login';
import { TabsPage } from '../pages/tabs/tabs';
import { UserData } from '../models/UserData';
import { Observable } from 'rxjs/Rx';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage = TabsPage;
  userData:UserData;
  clubs:Club[];
  interests: Interest[];
  prefs:any;

  constructor(platform: Platform, private modalCtrl:ModalController, private localStorage:LocalStorage, private localData:LocalData) {
    Observable.forkJoin([
        Observable.fromPromise(this.localData.getClubs()),
        Observable.fromPromise(this.localStorage.get('userdata'))
      ])
      .subscribe(data => {
        if(data[1] == null){
          console.log("opening login");
          this.clubs = data[0];
          this.interests = this.localData.getInterestsLocally();
          console.log("Clubs ",this.clubs);
          this.userData = {firstname:"",lastname:"",email:"",studyYear:0,program:""};
          this.openLogin();
        } else console.log("Not opening login");
      })
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.overlaysWebView(false);
      StatusBar.backgroundColorByHexString("#422C89");
    });
  }

  openLogin(){
    let modal = this.modalCtrl.create(LoginPage,{userData:this.userData,isInit:true,clubs:this.clubs,interests:this.interests});// everything in the {} are my params to be passed to the Modal
    modal.present(); // Loading the Modal
  }
}
