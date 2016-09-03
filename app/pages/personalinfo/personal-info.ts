import {Component} from '@angular/core';
import {NavController, NavParams, ModalController} from 'ionic-angular';
import {LoginPage} from '../login/login';

@Component({
  templateUrl: 'build/pages/personalinfo/personal-info.html'
})

export class PersonalInfo {
    firstname:string = '';
    lastname:string = '';
    email:string = '';
  constructor(private navCtrl: NavController, private navParams: NavParams, private modalCtrl: ModalController) {
      
  }
  
  openLogin(){
      //The {firstname:..} is used to pass variables to the Modal via NavParams
    let modal = this.modalCtrl.create(LoginPage, {firstname:this.firstname, lastname:this.lastname, email:this.email});
    modal.present();
  }
}
