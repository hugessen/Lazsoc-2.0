import {Component} from '@angular/core';
import {NavController, NavParams, ModalController} from 'ionic-angular';
import {LoginPage} from '../login/login';
import {UserData} from '../../models/UserData';
import {LocalData} from '../../providers/LocalData';

@Component({
  selector:'personal-info',
  templateUrl: 'personal-info.html'
})

export class PersonalInfo {
    userData: UserData;
    hasInfo: boolean = false;
  constructor(private navCtrl: NavController, private navParams: NavParams, private modalCtrl: ModalController, private localData: LocalData) {
      this.userData.personalInfo = {firstname:"",lastname:"",email:"",studyYear:0, program:""};
      this.navCtrl = navCtrl;
      this.init();
  }
  
  init(){
      this.localData.getUserInfo()
      .then(data => {
          this.userData = data;
          this.hasInfo = true;
      }).catch(err => {
          console.log(err);
          this.openLogin();
        }) //Somehow we don't have their data, so we open the login
  }
  
  openLogin(){
    let modal = this.modalCtrl.create(LoginPage);// everything in the {} are my params to be passed to the Modal
    modal.onDidDismiss(data => { //Retrieving the params passed down from the Modal's dismiss() method
        this.userData.personalInfo = {
            firstname:data.firstname,
            lastname:data.lastname,
            email:data.email,
            studyYear:data.studyYear,
            program:data.program
        };
        this.hasInfo = true; //So I know whether we have the user's info
    })
    modal.present(); // Loading the Modal
  }
  
}
