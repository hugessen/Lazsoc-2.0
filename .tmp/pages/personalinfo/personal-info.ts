import {Component} from '@angular/core';
import {NavController, NavParams, ModalController} from 'ionic-angular';
import {LoginPage} from '../login/login';
import {UserData} from '../../models/UserData';
import {LocalData} from '../../providers/LocalData';
import {LocalStorage} from '../../providers/LocalStorage';

@Component({
  selector:'personal-info',
  templateUrl: 'personal-info.html'
})

export class PersonalInfo {
    userData: UserData;
    hasInfo: boolean = false;
  constructor(private navCtrl: NavController, private navParams: NavParams, private modalCtrl: ModalController, private localData: LocalData, private localStorage: LocalStorage) {
      this.navCtrl = navCtrl;
      this.localStorage.get('userdata')
      .then(data => {
          this.userData = JSON.parse(data);
          this.hasInfo = true;
      })
  }
  
  openLogin(){
    let modal = this.modalCtrl.create(LoginPage,{userData:this.userData});// everything in the {} are my params to be passed to the Modal
    modal.onDidDismiss(data => { //Retrieving the params passed down from the Modal's dismiss() method
        this.userData.personalInfo = {
            firstname:data.firstname,
            lastname:data.lastname,
            email:data.email,
            studyYear:data.studyYear,
            program:data.program
        };
        this.localStorage.set('userdata',this.userData);
        this.hasInfo = true; //So I know whether we have the user's info
    })
    modal.present(); // Loading the Modal
  }
  
}
