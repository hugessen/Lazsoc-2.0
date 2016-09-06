import {Component} from '@angular/core';
import {NavController, NavParams, ToastController } from 'ionic-angular';
//Providers
import { WebAPI } from '../../providers/WebAPI';
import { LocalData } from '../../providers/LocalData';
import { Club } from '../../models/club';
import { ClubPage } from '../clubpage/clubpage';
import { Interest } from '../../models/interest';

@Component({
  templateUrl: 'build/pages/clubselector/clubselector.html'
})
export class ClubSelector {
  clubs: Club[];
  interests: Interest[];
  view:string;
  
  constructor(private navCtrl: NavController, private webAPI: WebAPI, private localData:LocalData, public toastCtrl:ToastController) {
      this.webAPI = webAPI;
      this.localData = localData;
      this.clubs = this.getClubs();
      this.interests = this.getInterests();
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
  getClubs():Club[]{
      return this.webAPI.getClubs();
  }
  getInterests():Interest[]{
      return this.localData.getInterests();
  }
  savePrefs(){
      this.localData.setInterests(this.interests);
      //this.localData.setClubs(this.clubs); Will be implemented
      //this.localData.writeToStorage(); Not doing this yet
      this.showToast('Preferences saved!');
  }
}
