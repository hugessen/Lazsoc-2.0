import {Component} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import {Calendar} from 'ionic-native';
import { ClubEvent } from '../../models/club-event';

@Component({
  templateUrl: '../eventpage/event-page.html'
})
export class EventPage {
    event: ClubEvent;
    message: string;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.event = this.navParams.get('event'); //Event object being passed via NavParams
    this.message = "this works";
  }
  
    addToCalendar(){
      Calendar.createEventInteractively(this.event.title, this.event.location, this.event.tagline, new Date(this.event.startTime), new Date(this.event.endTime))
      .then(
          (msg) => console.log(msg),
          (err) => console.log(err)
      );
  }
}
