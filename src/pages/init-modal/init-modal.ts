import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

/*
  Generated class for the InitModal page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-init-modal',
  templateUrl: 'init-modal.html'
})
export class InitModal {

  constructor(public navCtrl: NavController) {}

  ionViewDidLoad() {
    console.log('Hello InitModal Page');
  }

}
