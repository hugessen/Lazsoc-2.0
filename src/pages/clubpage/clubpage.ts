import {Component} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import { LocalData } from '../../providers/LocalData';
import { Club } from '../../models/club';
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
    currentTime:number;
    //Current club being viewed is passed through NavParams
  constructor(private navCtrl: NavController, private navParams: NavParams, private localData: LocalData) {
    this.currentTime = new Date().getTime();
    this.club = this.navParams.get('club');
    console.log(this.club);
    this.localData.getCustomFeed(this.club)
    .then(data => {
      this.events = data;
      console.log(this.events);
    });
  }
  viewEvent(event:ClubEvent):void{
    this.navCtrl.push(EventPage, {event:event, club:this.club});
  }
  toggle(){
    this.club.selected = !this.club.selected;
  }
}