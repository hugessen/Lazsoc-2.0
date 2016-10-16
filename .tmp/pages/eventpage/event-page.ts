import {Component} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import {Calendar} from 'ionic-native';
import { ClubEvent } from '../../models/club-event';
import { Club } from '../../models/club';

@Component({
  templateUrl: '../eventpage/event-page.html'
})
export class EventPage {
    event: ClubEvent;
    club: Club;
    message: string;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.event = this.navParams.get('event'); //Event object being passed via NavParams
    this.club = this.navParams.get('club');
    this.message = "this works";
  }
  
    addToCalendar(){
      Calendar.createEventInteractively(this.event.title, this.event.location, this.event.subheader, new Date(this.event.startDate), new Date(this.event.endDate))
      .then(
          (msg) => console.log(msg),
          (err) => console.log(err)
      );
  }
}
