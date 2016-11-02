import {Component} from '@angular/core';
import {NavParams, ViewController, ToastController} from 'ionic-angular';
import { LocalStorage } from '../../providers/LocalStorage';
import { UserData } from '../../models/userdata';

@Component({
  templateUrl: '../login/login.html'
})

export class LoginPage {
    userData:UserData;
    programOptions: string[] = ['BBA','BBA/Financial Math', 'BBA/Computer Science (UW)', 'BBA/Computer Science (WLU)', 'BBA/Math (UW)', 'Communications'];
    
  constructor(public navParams:NavParams, public viewCtrl: ViewController, public toastCtrl:ToastController, public localStorage:LocalStorage) {
    this.userData = navParams.get('userData');
    console.log(this.userData);
  }
  
  
  submit(){
    // if (this.userData.personalInfo.firstname ==='' || this.userData.personalInfo.lastname ==='' || this.userData.personalInfo.email ==='' || this.userData.personalInfo.studyYear == 0 || this.userData.personalInfo.program === '') { //Check if any fields are empty
    //     this.showToast('Please enter all information');
    // }
    // else{ //Input validated. Now we pass the data back down to userData via NavParams
        console.log(this.userData);
        this.localStorage.set('userdata',this.userData);
        this.viewCtrl.dismiss(this.userData);
    // }
  }
  
  isValidEmail(email:string):boolean{
      var isValid:boolean = (email.length == 21 && email.substring(8) == '@mylaurier.ca' && this.isNumeric(email.substring(4,8)));
      return isValid;
  }
  
  isNumeric(str:string):boolean{
      return /^\d+$/.test(str); //Somehow this checks if a value is numeric. Unfortunately isNaN() doesn't like strings in TypeScript
  }
  
  //Toast is just an inobtrusive message box at the bottom of the screen
  showToast(message:string){
      let toast = this.toastCtrl.create({
      message: message,
      duration: 2000,
      position:'bottom'
    });
    toast.present();
  }
}
