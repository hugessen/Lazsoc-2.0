import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import { ClubEvent } from '../../models/club-event';
import { EventPage } from '../eventpage/event-page';
import { LocalData } from '../../providers/LocalData';

@Component({
  templateUrl: 'build/pages/newsfeed/newsfeed.html',
})
export class Newsfeed {
    events: ClubEvent[]; //Array of ClubEvent objects, defined in models/club-event
    view:string; //Used to toggle between All and Custom Newsfeed
  constructor(private navCtrl: NavController, public localData: LocalData) {
      this.localData = localData; //Declare an anonymous, localized instance of WebAPI for use within this Component
      this.getEventsLocally();
      console.log(this.events);
      this.view = "all"; //Set to the All Events view initially
  }
  
  
  viewEvent(event:ClubEvent):void{
      // {event:event} passes data to the EventPage Component via NavParams
      // This is retrieved on the other end with: this.navParams.get('event');
      this.navCtrl.push(EventPage, {event:event});
  }
  
  //How all Components will handle API calls from WebAPI. 
  //Right now WebAPI only returns JSON arrays, not Promises, but this is what all retrieval methods will eventually look like
  getEvents(){
    this.localData.getEvents()
    .then(data => {
      this.events = data;
    });
  }
  //I wanted a different array of events, so I defined them locally for the time being
  getEventsLocally(){
      this.events = this.localData.getEventsLocally();
  }
}
