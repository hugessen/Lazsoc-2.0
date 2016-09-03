import {Component} from '@angular/core';
import {NavController, NavParams, ToastController } from 'ionic-angular';
import { WebAPI } from '../../providers/WebAPI';
import { Club } from '../../models/club';
import { ClubPage } from '../clubpage/clubpage';

@Component({
  templateUrl: 'build/pages/clubselector/clubselector.html'
})
export class ClubSelector {
  clubs: Club[];
  interests: any[];
  view:string;
  
  constructor(private navCtrl: NavController, private webAPI: WebAPI, public toastCtrl:ToastController) {
      this.webAPI = webAPI;
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
  getInterests(){
      return this.webAPI.getInterests();
  }
}
