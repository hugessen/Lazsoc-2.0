import {Component} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import { Club } from '../../models/club';

@Component({
  templateUrl: 'build/pages/clubpage/clubpage.html'
})
export class ClubPage {
    club: Club;
  constructor(private navCtrl: NavController, private navParams: NavParams) {
    this.club = this.navParams.get('club');
  }
}