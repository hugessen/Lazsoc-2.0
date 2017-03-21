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
    startTime:string;
    endTime:string;
    multiDay:boolean;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.event = this.navParams.get('event'); //Event object being passed via NavParams
    this.club = this.navParams.get('club');

    this.multiDay = ((new Date(this.event.end_date_time).getDate() - new Date(this.event.start_date_time).getDate())>0) ? true:false;

    this.startTime = this.getTime(this.event.start_date_time);
    this.endTime = this.getTime(this.event.end_date_time);
  }
  
  addToCalendar(){
      var startTime = new Date(this.event.start_date_time);
      var endTime = new Date(this.event.end_date_time);
      startTime.setHours(startTime.getUTCHours());
      endTime.setHours(endTime.getUTCHours());
      Calendar.createEventInteractively(this.event.title, this.event.location, this.event.sub_heading, startTime, endTime)
      .then(
          (msg) => console.log(msg),
          (err) => console.log(err)
      );
  }
  getTime(date:string):string{
    var hour = new Date(date).getUTCHours();
    var min = new Date(date).getUTCMinutes();
    var minStr = (min < 10) ? min+"0":min;
    var ampm = (hour < 12) ? "AM" : "PM";
    if(hour > 12) {
      hour = hour%12;
    }
    return (hour + ":" + minStr + " " + ampm);
  }
  openLink(url:string){
    window.open(url, "_system");
  }
}
