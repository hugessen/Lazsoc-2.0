import {Component} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import { LocalData } from '../../providers/LocalData';
import { Club } from '../../models/club';
import { ClubEvent } from '../../models/club-event';

@Component({
  templateUrl: 'build/pages/clubpage/clubpage.html'
})
export class ClubPage {
    club: Club;
    events: ClubEvent[];
    //Current club being viewed is passed through NavParams
  constructor(private navCtrl: NavController, private navParams: NavParams, private localData: LocalData) {
    this.club = this.navParams.get('club');
    this.localData.getCustomFeed()
    .then(data => this.events = data);
  }
  
}