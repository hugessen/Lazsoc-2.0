import {Component} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';

@Component({
  templateUrl: 'build/pages/login/login.html'
})

//Page is just a template for now. No need for any logic
export class LoginPage {
  constructor(private navCtrl: NavController, private navParams: NavParams) {
  }
  
  
  
  isValidEmail(email:string):boolean{
      var isValid:boolean = (email.length == 21 && email.substring(8) == '@mylaurier.ca' && this.isNumeric(email.substring(4,8)));
      return isValid;
  }
  
  isNumeric(str:string):boolean{
      return /^\d+$/.test(str); //Somehow this checks if a value is numeric. Unfortunately isNaN() doesn't like strings in TypeScript
  }
}
