import {Component} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import { ClubEvent } from '../../models/club-event';

@Component({
  templateUrl: 'build/pages/eventpage/event-page.html'
})
export class EventPage {
    event: ClubEvent;
    apiData: any;
  constructor(private navCtrl: NavController, private navParams: NavParams) {
    this.event = this.navParams.get('event');
  }
}
