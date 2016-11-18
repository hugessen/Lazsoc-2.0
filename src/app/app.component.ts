import { Component } from '@angular/core';
import { Platform, ModalController } from 'ionic-angular';
import { StatusBar } from 'ionic-native';

import { LocalStorage } from '../providers/LocalStorage';

import { LoginPage } from '../pages/login/login';
import { TabsPage } from '../pages/tabs/tabs';
import { UserData } from '../models/UserData';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage = TabsPage;
  userData:UserData;

  constructor(platform: Platform, private modalCtrl:ModalController, private localStorage:LocalStorage) {
    this.localStorage.get('userdata').then(res => {
      if(res == null){
        console.log("Opening modal");
        this.userData = {firstname:"",lastname:"",email:"",studyYear:0,program:""};
        this.openLogin();
      }
    })
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.overlaysWebView(false);
      StatusBar.backgroundColorByHexString("#422C89");
    });
  }

  openLogin(){
    let modal = this.modalCtrl.create(LoginPage,{userData:this.userData});// everything in the {} are my params to be passed to the Modal
    modal.onDidDismiss(data => { //Retrieving the params passed down from the Modal's dismiss() method
        this.userData = {
            firstname:data.firstname,
            lastname:data.lastname,
            email:data.email,
            studyYear:data.studyYear,
            program:data.program
        };
        console.log(this.userData);
        this.localStorage.set('userdata',this.userData);
    })
    modal.present(); // Loading the Modal
  }
}
