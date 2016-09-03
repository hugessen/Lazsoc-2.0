import {Component} from '@angular/core';
import {NavParams, ViewController, ToastController} from 'ionic-angular';

@Component({
  templateUrl: 'build/pages/login/login.html'
})

export class LoginPage {
    firstname:string;
    lastname:string;
    email:string;
    studyYear: number;
    program: string;
    programOptions: string[] = ['BBA','BBA/Financial Math', 'BBA/Computer Science (UW)', 'BBA/Computer Science (WLU)', 'BBA/Math (UW)', 'Communications'];
    
  constructor(private navParams:NavParams, private viewCtrl: ViewController, private toastCtrl:ToastController) {
      //Data being passed upwards from PersonalInfo via NavParams
      this.firstname = navParams.get('firstname');
      this.lastname = navParams.get('lastname');
      this.email = navParams.get('email');
  }
  
  
  submit(){
    if (this.firstname ==='' || this.lastname ==='' || this.email ==='' || this.studyYear == 0 || this.program === '') { //Check if any fields are empty. Do ints have an equivalent to ''?
        this.showToast('Please enter all information');
    }
    else if (!this.isValidEmail(this.email)) {
        this.showToast('Invalid MyLaurier Email');
    }
    else //Input validated. Now we pass the data back down to PersonalInfo via NavParams
        this.viewCtrl.dismiss(     
            {
                firstname: this.firstname,
                lastname: this.lastname,
                email: this.email,
                studyYear: this.studyYear,
                program: this.program
            }
        );
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
