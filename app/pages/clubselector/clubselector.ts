import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import { WebAPI } from '../../providers/WebAPI';
import { Club } from '../../models/club';

@Component({
  templateUrl: 'build/pages/clubselector/clubselector.html'
})
export class ClubSelector {
  clubs: any;
  constructor(private navCtrl: NavController, private webAPI: WebAPI) {
      this.clubs = webAPI.getClubs();
  }
  
}
