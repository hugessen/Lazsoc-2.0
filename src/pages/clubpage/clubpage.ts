import {Component} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import { LocalData } from '../../providers/LocalData';
import {Calendar} from 'ionic-native';
import { Club } from '../../models/club';
import { Prefs } from '../../models/prefs';
import { ClubEvent } from '../../models/club-event';
import { EventPage } from '../eventpage/event-page';
import { MapToIterable } from '../../pipes/MapToIterable';
import { GetLongDate } from '../../pipes/GetLongDate';

@Component({
  templateUrl: '../clubpage/clubpage.html'
})
export class ClubPage {
    club: Club;
    events: Object[];
    prefs: Prefs;
    currentTime:number;
    //Current club being viewed is passed through NavParams
  constructor(private navCtrl: NavController, private navParams: NavParams, private localData: LocalData) {
    this.currentTime = new Date().getTime();
    this.club = this.navParams.get('club');
    this.prefs = this.navParams.get('prefs');
    this.club.club_social_links = this.localData.formatSocialLinks(this.club.club_social_links);
    this.localData.getCustomFeed(this.club)
    .then(res => {
      this.events = res;
      console.log(this.events);
    })
  }
  viewEvent(event:ClubEvent):void{
    this.navCtrl.push(EventPage, {event:event, club:this.club});
  }
  toggle(){
    this.prefs.clubPrefs[this.club.id.toString()].selected = !this.prefs.clubPrefs[this.club.id.toString()].selected;
  }

  openLink(url:string){
    window.open(url, "_system");
  }
  addToCalendar(event:ClubEvent){
    Calendar.createEventInteractively(event.title, event.location, event.sub_heading, new Date(event.start_date_time), new Date(event.end_date_time))
    .then(
        (msg) => {
          console.log(msg);
        },
        (err) => console.log(err)
    );
  }
}