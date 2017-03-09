import {Component} from '@angular/core';
import {NavController, ToastController } from 'ionic-angular';
//Providers
import { LocalData } from '../../providers/LocalData';
import { LocalStorage } from '../../providers/LocalStorage';
import { Club } from '../../models/club';
import { ClubPage } from '../clubpage/clubpage';
import { Prefs } from '../../models/prefs';
import { Observable } from 'rxjs/Rx';

@Component({
  templateUrl: 'clubselector.html',
  selector: 'club-selector'
})
export class ClubSelector {
  clubs:Club[];
  interests: any[];
  prefs:Prefs;
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
        Observable.fromPromise(this.localData.getPrefs())
      ])
      .subscribe(data => {
          this.clubs = data[0];
          this.formatClubSocialLinks(); //Set up the social links
          this.interests = this.localData.getInterestsLocally();
          if(data[1] != null)
            this.prefs = data[1];
          else
            this.prefs = {clubPrefs:{},interestPrefs:{}};
          
          console.log(this.prefs);
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
      if(this.prefs.clubPrefs.hasOwnProperty(clubID.toString()))
        this.prefs.clubPrefs[clubID.toString()].selected = !this.prefs.clubPrefs[clubID.toString()].selected;
      else
        this.prefs.clubPrefs[clubID.toString()].selected = true;
  }
  
  formatClubSocialLinks(){
    for (let club of this.clubs){
      club.club_social_links = this.localData.formatSocialLinks(club.club_social_links);
    }
  }

  //Pushes a club page on the stack
  viewClub(club:Club):void{
      this.navCtrl.push(ClubPage, {club:club, prefs:this.prefs});
  }
  
  //Cache your prefs
  savePrefs(){
      this.localStorage.set('prefs',this.prefs)
      .then(value => console.log("Preferences saved"));
      console.log("Saturday event: " + this.localData.doSaturdayEvent);
      this.showToast('Preferences saved!');
  }
}

