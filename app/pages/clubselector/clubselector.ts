import {Component} from '@angular/core';
import {NavController, NavParams, ToastController } from 'ionic-angular';
//Providers
import { LocalData } from '../../providers/LocalData';
import { Club } from '../../models/club';
import { ClubPage } from '../clubpage/clubpage';
import { Interest } from '../../models/interest';
import { Observable } from 'rxjs/Rx';

@Component({
  templateUrl: 'build/pages/clubselector/clubselector.html'
})
export class ClubSelector {
  clubs:Club[];
  interests: Interest[];
  view:string;
  
  constructor(private navCtrl: NavController, private localData:LocalData, public toastCtrl:ToastController) {
      this.localData = localData;
      this.init();
      this.view = "clubs";
  }
  
  //Concurrently pulls Clubs and Interests and assigns them
  init(){
      Observable.forkJoin([
        Observable.fromPromise(this.localData.getClubs()),
        Observable.fromPromise(this.localData.getInterests())
      ])
      .subscribe(data => {
          this.clubs = data[0];
          this.interests = data[1];
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
  toggle(club:Club):void{
      club.selected = !club.selected;
  }
  
  //Pushes a club page on the stack
  viewClub(club:Club):void{
      this.navCtrl.push(ClubPage, {club:club});
  }
  
  //Cache your prefs
  savePrefs(){
      //Another way to concurrently resolve promises
      Promise.all([
          this.localData.saveData('clubs', this.clubs),
          this.localData.saveData('interests', this.interests)
      ]).then(value => console.log("Preferences saved"));
      
      this.showToast('Preferences saved!');
  }
}

