import {Component} from '@angular/core';
import {NavController, ToastController } from 'ionic-angular';
//Providers
import { LocalData } from '../../providers/LocalData';
import { LocalStorage } from '../../providers/LocalStorage';
import { Club } from '../../models/club';
import { ClubPage } from '../clubpage/clubpage';
import { UserData } from '../../models/userdata';
import { Interest } from '../../models/interest';
import { Observable } from 'rxjs/Rx';

@Component({
  templateUrl: 'clubselector.html'
})
export class ClubSelector {
  clubs:Club[];
  interests: Interest[];
  userData:UserData;
  view:string;
  
  constructor(public navCtrl: NavController, public localData:LocalData, public toastCtrl:ToastController, private localStorage:LocalStorage) {
      this.localData = localData;
      this.init();
      this.view = "clubs";
  }
  
  //Concurrently pulls Clubs and Interests and assigns them
  init(){
      Observable.forkJoin([
        Observable.fromPromise(this.localData.getClubs()),
        Observable.fromPromise(this.localData.getInterests()),
        Observable.fromPromise(this.localData.getUserInfo())
      ])
      .subscribe(data => {
          this.clubs = data[0];
          this.interests = this.localData.getInterestsLocally();
          if(data[2] != null)
            this.userData = data[2];
      })
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
  
  //Toggle the selected property of a club
  toggle(clubID:number):void{
      this.userData.clubPrefs[clubID.toString()].selected = !this.userData.clubPrefs[clubID.toString()].selected;
  }
  
  //Pushes a club page on the stack
  viewClub(club:Club):void{
      this.navCtrl.push(ClubPage, {club:club, userData:this.userData});
  }
  
  //Cache your prefs
  savePrefs(){
      //Another way to concurrently resolve promises
      Promise.all([
          this.localStorage.set('userdata',this.userData)
      ]).then(value => console.log("Preferences saved"));
      
      this.showToast('Preferences saved!');
  }
}

