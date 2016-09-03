import {Component} from '@angular/core';
import {NavParams, ViewController, ToastController} from 'ionic-angular';
import {PersonalInfo} from '../personalinfo/personal-info';

@Component({
  templateUrl: 'build/pages/login/login.html'
})

export class LoginPage {
    firstname:string;
    lastname:string;
    email:string;
  constructor(private navParams:NavParams, private viewCtrl: ViewController, private toastCtrl:ToastController) {
      this.firstname = navParams.get('firstname');
      this.lastname = navParams.get('lastname');
      this.email = navParams.get('email');
  }
  
  
  submit(){
    if (this.firstname ==='' || this.lastname ==='' || this.email ==='') {
        this.showToast('Please enter all information');
    }
    else if (!this.isValidEmail(this.email)) {
        this.showToast('Invalid MyLaurier Email');
    }
    else this.dismiss();
  }
  
  isValidEmail(email:string):boolean{
      var isValid:boolean = (email.length == 21 && email.substring(8) == '@mylaurier.ca' && this.isNumeric(email.substring(4,8)));
      return isValid;
  }
  
  isNumeric(str:string):boolean{
      return /^\d+$/.test(str); //Somehow this checks if a value is numeric. Unfortunately isNaN() doesn't like strings in TypeScript
  }
  
  
  private dismiss(){
      this.viewCtrl.dismiss();
  }
  
    //Toast is just an inobtrusive message box at the bottom of the screen. I'd rather this than a popup when the user hits save
  showToast(message:string){
      let toast = this.toastCtrl.create({
      message: message,
      duration: 2000,
      position:'bottom'
    });
    toast.present();
  }
}
