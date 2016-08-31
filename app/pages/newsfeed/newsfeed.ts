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
    apiData: any;
  constructor(private navCtrl: NavController, public webAPI: WebAPI) {
      this.events = this.webAPI.getEvents();
      this.webAPI = webAPI;
      this.getAPIData();
  }
  viewEvent(event:ClubEvent):void{
      this.navCtrl.push(EventPage, {event:event});
  }
  getAPIData(){
    this.webAPI.getAPIData()
    .then(data => {
      console.log(data);
      this.apiData = data;
    });
  }
  
}
