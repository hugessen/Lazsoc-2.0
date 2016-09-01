import {Component} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';

@Component({
  templateUrl: 'build/pages/login/login.html'
})

//Page is just a template for now. No need for any logic
export class LoginPage {
  constructor(private navCtrl: NavController, private navParams: NavParams) {
  }
}
