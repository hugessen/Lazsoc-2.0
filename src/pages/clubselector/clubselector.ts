import {Component} from '@angular/core';
import {NavController, ToastController } from 'ionic-angular';
//Providers
import { LocalData } from '../../providers/LocalData';
import { LocalStorage } from '../../providers/LocalStorage';
import { ClubPage } from '../clubpage/clubpage';
import { Prefs } from '../../models/prefs';
import { Observable } from 'rxjs/Rx';

import { Club } from '../../models/club';
import { Event_Tag } from '../../models/event_tag';

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
        Observable.fromPromise(this.localData.getPrefs()),
        Observable.fromPromise(this.localData.getTags())
      ])
      .subscribe(data => {
          this.clubs = data[0];
          this.formatClubSocialLinks(); //Set up the social links
          this.interests = this.formatTags(data[2]);
          //console.log(data[1]);
          if(data[1] != {})
            this.prefs = data[1];
          else
            this.initializePrefs(this.clubs,this.interests);
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

  formatTags(interests):any[]{
    var result = [];
    var id = 0;
    for (let interest of interests){
      result.push({name:interest, id: id++});
    }
    return result;
  }

  initializePrefs(clubs, tags){
    console.log("initializing prefs");
    this.prefs = {clubPrefs:{},interestPrefs:{}};
      for(let club of clubs){
        this.prefs.clubPrefs[club.id.toString()] = {club_id:club.id, selected:false};
      }
      for(let tag of tags){
        this.prefs.interestPrefs[tag.name] = {interest_id:tag.id, selected:false};
      }
  }

  //Pushes a club page on the stack
  viewClub(club:Club):void{
      this.navCtrl.push(ClubPage, {club:club, prefs:this.prefs,isModal:false});
  }
  
  //Cache your prefs
  savePrefs(){
      console.log("Prefs",this.prefs);
      this.localStorage.set('prefs',this.prefs)
      .then(value => console.log("Preferences saved"));
      //console.log("Saturday event: " + this.localData.doSaturdayEvent);
      this.showToast('Preferences saved!');
  }
}

