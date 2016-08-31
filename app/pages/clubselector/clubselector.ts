import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import { WebAPI } from '../../providers/WebAPI';

@Component({
  templateUrl: 'build/pages/clubselector/clubselector.html'
})
export class ClubSelector {
  constructor(private navCtrl: NavController, private webAPI: WebAPI) {
      
  }
  
}
