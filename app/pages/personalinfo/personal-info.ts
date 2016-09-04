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
    studyYear:number = 0;
    program:string = '';
    hasInfo: boolean = false;
  constructor(private navCtrl: NavController, private navParams: NavParams, private modalCtrl: ModalController) {
      this.navCtrl = navCtrl;
  }
  
  openLogin(){
    let modal = this.modalCtrl.create(LoginPage, {firstname:this.firstname, lastname:this.lastname, email:this.email, studyYear:this.studyYear, program:this.program});// everything in the {} are my params to be passed to the Modal
    modal.onDidDismiss(data => { //Retrieving the params passed down from the Modal's dismiss() method
        this.firstname = data.firstname;
        this.lastname = data.lastname;
        this.email = data.email;
        this.studyYear = data.studyYear;
        this.program = data.program;
        this.hasInfo = true; //So I know whether we have the user's info
    })
    modal.present(); // Loading the Modal
  }
  
}
