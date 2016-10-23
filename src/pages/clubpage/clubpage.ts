import {Component} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import { LocalData } from '../../providers/LocalData';
import { Club } from '../../models/club';
import { UserData } from '../../models/UserData';
import { ClubEvent } from '../../models/club-event';
import { EventPage } from '../eventpage/event-page';
import { Observable } from 'rxjs/Rx';
import { MapToIterable } from '../../pipes/MapToIterable';
import { GetLongDate } from '../../pipes/GetLongDate';

@Component({
  templateUrl: '../clubpage/clubpage.html'
})
export class ClubPage {
    club: Club;
    events: Object[];
    userData: UserData;
    currentTime:number;
    //Current club being viewed is passed through NavParams
  constructor(private navCtrl: NavController, private navParams: NavParams, private localData: LocalData) {
    this.currentTime = new Date().getTime();
    this.club = this.navParams.get('club');
    this.userData = this.navParams.get('userData');
    this.localData.getCustomFeed(this.club)
    .then(res => this.events = res)
  }
  viewEvent(event:ClubEvent):void{
    this.navCtrl.push(EventPage, {event:event, club:this.club});
  }
  toggle(){
    this.userData.clubPrefs[this.club.id.toString()].selected = !this.userData.clubPrefs[this.club.id.toString()].selected;
  }
}