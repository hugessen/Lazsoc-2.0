import {Component} from '@angular/core';
import {NavParams, ViewController, ToastController, ModalController} from 'ionic-angular';
import { LocalStorage } from '../../providers/LocalStorage';
import { UserData } from '../../models/userdata';
import { Prefs } from '../../models/prefs';
import { ClubPage } from '../clubpage/clubpage';

import { Club } from '../../models/club'
import { Event_Tag } from '../../models/event_tag'

@Component({
  templateUrl: '../login/login.html'
})

export class LoginPage {
    userData:UserData;
    isInit:boolean;
    state:string = "personalinfo";
    clubs:Club[];
    tags:Event_Tag[];
    prefs:Prefs;
    programOptions: string[] = ['BBA','BBA/Financial Math', 'BBA/Computer Science (UW)', 'BBA/Computer Science (WLU)', 'BBA/Math (UW)', 'Economics', 'Communications'];
    
  constructor(public navParams:NavParams, public viewCtrl: ViewController, public toastCtrl:ToastController, public localStorage:LocalStorage, public modalCtrl:ModalController) {

    this.userData = navParams.get('userData');
    this.isInit = navParams.get('isInit');
    this.clubs = navParams.get('clubs');
    this.tags = this.formatTags(navParams.get('tags'));
    console.log(this.clubs);
    if(this.isInit){
      this.prefs = {clubPrefs:{},interestPrefs:{}};
      for(let club of this.clubs){
        this.prefs.clubPrefs[club.id.toString()] = {club_id:club.id, selected:false};
      }
      for(let tag of this.tags){
        this.prefs.interestPrefs[tag.name] = {interest_id:tag.id, selected:false};
      }
    }

    console.log(this.userData);
    console.log(this.tags);
  }

  submit(){
    if (this.isValidLogin()) { //Check if any fields are empty or invalid
        this.showToast('Please enter all information');
    }
    else{ //Input validated. Now we pass the data back down to userData via NavParams
        console.log("Userdata after input:",this.userData);
        this.localStorage.set('userdata',this.userData);
        this.viewCtrl.dismiss(this.userData);
    }
  }

  toggle(clubID:number):void{
      this.prefs.clubPrefs[clubID.toString()].selected = !this.prefs.clubPrefs[clubID.toString()].selected;
  }
  
  isValidLogin():boolean{
    return (this.userData.firstname ==='' || this.userData.lastname ==='' || !this.isValidEmail(this.userData.email) || this.userData.studyYear == 0 || this.userData.program === '');
  }

  isValidEmail(email:string):boolean{
      var isValid:boolean = (email.length == 21 && email.substring(8) == '@mylaurier.ca' && this.isNumeric(email.substring(4,8)));
      return isValid;
  }
  
  isNumeric(str:string):boolean{
      return /^\d+$/.test(str); //Somehow this checks if a value is numeric. Unfortunately isNaN() doesn't like strings in TypeScript
  }
  
  initializePrefs(){

      console.log("prefs", this.prefs)
  }

  next(){
    if(this.state == "personalinfo"){
        //if (this.isValidLogin()) { //Check if any fields are empty
        //  this.showToast('Please enter all information');
        //}
        //else
          this.state = "clubs";
    }
    else if (this.state == "clubs")
      this.state = "interests";
    else if (this.state == "interests")
      this.submitInit();
  }

  submitInit(){
    this.localStorage.set('userdata',this.userData);
    this.localStorage.set('prefs',this.prefs);
    this.viewCtrl.dismiss();
  }

  viewClub(clubParam){
    let clubpage = this.modalCtrl.create(ClubPage,{club:clubParam, prefs:this.prefs, isModal:true});// everything in the {} are my params to be passed to the Modal
    clubpage.present(); // Loading the Modal
  }

  formatTags(interests):any[]{
    var result = [];
    var id = 0;
    for (let interest of interests){
      result.push({name:interest, id:id++});
    }
    return result;
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
