import {Component} from '@angular/core';
import {NavParams, ViewController, ToastController} from 'ionic-angular';
import { LocalStorage } from '../../providers/LocalStorage';
import { UserData } from '../../models/userdata';
import { Prefs } from '../../models/prefs';

@Component({
  templateUrl: '../login/login.html'
})

export class LoginPage {
    userData:UserData;
    isInit:boolean;
    state:string = "personalinfo";
    clubs:any[];
    interests:any[];
    prefs:Prefs;
    programOptions: string[] = ['BBA','BBA/Financial Math', 'BBA/Computer Science (UW)', 'BBA/Computer Science (WLU)', 'BBA/Math (UW)', 'Communications'];
    
  constructor(public navParams:NavParams, public viewCtrl: ViewController, public toastCtrl:ToastController, public localStorage:LocalStorage) {
    this.userData = navParams.get('userData');
    this.isInit = navParams.get('isInit');
    this.clubs = navParams.get('clubs');
    this.interests = navParams.get('interests');
    this.prefs = {clubPrefs:{},interestPrefs:{}};
    if(this.isInit){
      for(let club of this.clubs){
        this.prefs.clubPrefs[club.id.toString()] = {club_id:club.id, selected:false};
      }
      for(let interest of this.interests){
        this.prefs.interestPrefs[interest.name] = {interest_id:interest.id, selected:false};
      }
    }
    console.log(this.userData);
  }

  submit(){
    if (this.userData.firstname ==='' || this.userData.lastname ==='' || this.userData.email ==='' || this.userData.studyYear == 0 || this.userData.program === '') { //Check if any fields are empty
        this.showToast('Please enter all information');
    }
    else{ //Input validated. Now we pass the data back down to userData via NavParams
        console.log("Userdata after input:",this.userData);
        this.localStorage.set('userdata',this.userData);
        this.viewCtrl.dismiss(this.userData);
    }
  }

  submitInit(){
    this.localStorage.set('userdata',this.userData);
    this.localStorage.set('prefs',this.prefs);
    this.viewCtrl.dismiss();
  }

  toggle(clubID:number):void{
      this.prefs.clubPrefs[clubID.toString()].selected = !this.prefs.clubPrefs[clubID.toString()].selected;
  }
  
  isValidEmail(email:string):boolean{
      var isValid:boolean = (email.length == 21 && email.substring(8) == '@mylaurier.ca' && this.isNumeric(email.substring(4,8)));
      return isValid;
  }
  
  isNumeric(str:string):boolean{
      return /^\d+$/.test(str); //Somehow this checks if a value is numeric. Unfortunately isNaN() doesn't like strings in TypeScript
  }
  
  next(){
    if(this.state == "personalinfo"){
        if (this.userData.firstname ==='' || this.userData.lastname ==='' || this.userData.email ==='' || this.userData.studyYear == 0 || this.userData.program === '') { //Check if any fields are empty
          this.showToast('Please enter all information');
        }
        else
          this.state = "clubs";
    }
    else if (this.state == "clubs")
      this.state = "interests"
    else if (this.state == "interests")
      this.submitInit()
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
