import {Component} from '@angular/core';
import {NavController, NavParams, ToastController } from 'ionic-angular';
//Providers
import { LocalData } from '../../providers/LocalData';
import { Club } from '../../models/club';
import { ClubPage } from '../clubpage/clubpage';
import { Interest } from '../../models/interest';

@Component({
  templateUrl: 'build/pages/clubselector/clubselector.html'
})
export class ClubSelector {
  clubs:any[];
  interests: Interest[];
  view:string;
  
  constructor(private navCtrl: NavController, private localData:LocalData, public toastCtrl:ToastController) {
      this.localData = localData;
      this.getClubs();
      this.getInterests();
      this.view = "clubs";
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
  
  viewClub(club:Club):void{
      this.navCtrl.push(ClubPage, {club:club});
  }
  getClubs(){
      this.localData.getClubs()
      .then(data => {
          this.clubs = data;
      })
  }
  getInterests(){
    this.localData.getInterests()
    .then(data => {
        this.interests = data;
        for (let interest of this.interests) interest.selected = false;
    });
  }
  savePrefs(){
      //this.localData.setInterests(this.interests);
      //this.localData.setClubs(this.clubs); Will be implemented
      //this.localData.writeToStorage(); Not doing this yet
      this.showToast('Preferences saved!');
  }
}

