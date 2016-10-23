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
  }
  
  addToCalendar(){
      Calendar.createEventInteractively(this.event.title, this.event.location, this.event.sub_heading, new Date(this.event.start_date_time), new Date(this.event.end_date_time))
      .then(
          (msg) => console.log(msg),
          (err) => console.log(err)
      );
  }
  getTime(date:string):string{
    var hour = new Date(date).getHours();
    var min = new Date(date).getMinutes();
    var minStr = (min < 10) ? min+"0":min;
    var ampm = (hour < 12) ? "AM" : "PM";
    return (hour%12 + ":" + minStr + " " + ampm);
  }
}
