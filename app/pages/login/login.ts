import {Component} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';

@Component({
  templateUrl: 'build/pages/login/login.html'
})
export class LoginPage {
  constructor(private navCtrl: NavController, private navParams: NavParams) {
  }
}
