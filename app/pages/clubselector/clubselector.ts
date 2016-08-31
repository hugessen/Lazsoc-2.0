import {Component} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import { WebAPI } from '../../providers/WebAPI';
import { Club } from '../../models/club';
import { ClubPage } from '../clubpage/clubpage';

@Component({
  templateUrl: 'build/pages/clubselector/clubselector.html'
})
export class ClubSelector {
  clubs: Club[];
  constructor(private navCtrl: NavController, private webAPI: WebAPI) {
      this.webAPI = webAPI;
      this.getClubs();
  }
  
  viewClub(club:Club):void{
      this.navCtrl.push(ClubPage, {club:club});
  }
  getClubs(){
      this.clubs = this.webAPI.getClubs();
  }
}
