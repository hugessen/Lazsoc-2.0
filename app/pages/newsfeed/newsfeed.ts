import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import { ClubEvent } from '../../models/club-event';
import { EventPage } from '../eventpage/event-page';
import { WebAPI } from '../../providers/WebAPI';

@Component({
  templateUrl: 'build/pages/newsfeed/newsfeed.html'
})
export class Newsfeed {
    events: ClubEvent[];
  constructor(private navCtrl: NavController, public webAPI: WebAPI) {
      this.webAPI = webAPI;
      this.getEvents();
  }
  viewEvent(event:ClubEvent):void{
      this.navCtrl.push(EventPage, {event:event});
  }
  getEvents(){
    this.webAPI.getEvents()
    .then(data => {
      this.events = data;
    });
  }
  
}
