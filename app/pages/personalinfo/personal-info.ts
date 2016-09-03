import {Component} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import {LoginPage} from '../login/login';

@Component({
  templateUrl: 'build/pages/personalinfo/personal-info.html'
})

export class PersonalInfo {
    firstname:string;
    lastname:string;
    email:string;
  constructor(private navCtrl: NavController, private navParams: NavParams) {
      
  }
  
}
