import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {Calendar, Network} from 'ionic-native';
import { ClubEvent } from '../../models/club-event';
import { Club } from '../../models/club';
import { Interest } from '../../models/interest';
import { EventPage } from '../eventpage/event-page';
import { LocalData } from '../../providers/LocalData';
import { Observable } from 'rxjs/Rx';

@Component({
  templateUrl: 'build/pages/newsfeed/newsfeed.html',
})
export class Newsfeed {
    events: ClubEvent[]; //Array of ClubEvent objects, defined in models/club-event
    view:string; //Used to toggle between All and Custom Newsfeed
    
  constructor(private navCtrl: NavController, public localData: LocalData) {
      this.localData = localData;
      this.init();
      this.view = "all"; //Set to the All Events view initially
  }
  
  init(){
    Observable.forkJoin([ //Used to concurrently resolve multiple promises
        Observable.fromPromise(this.localData.getEvents()),
        Observable.fromPromise(this.localData.getClubs()),
        Observable.fromPromise(this.localData.getInterests())
    ]).subscribe(data => {   
        //Applies the visible property to events based on Clubs and Interests
        this.events = this.getCustomFeed(this.localData.getEventsLocally(),data[1],data[2]);
        console.log(this.events);
    })
  }
  
  addToCalendar(event:ClubEvent){
      Calendar.createEventInteractively(event.title, event.location, event.tagline, new Date(event.startTime), new Date(event.endTime))
      .then(
          (msg) => console.log(msg),
          (err) => console.log(err)
      );
  }
  
  viewEvent(event:ClubEvent):void{
      this.navCtrl.push(EventPage, {event:event});
  }
  
  doRefresh(refresher){
    console.log('Begin async operation', refresher);

    setTimeout(() => {
      console.log(Network.connection);
      refresher.complete();
    }, 2000);
  }
  
  //Only does clubs for now
  //Would like to implement hashing for faster retrieval of interests
  getCustomFeed(events:any[], clubs:Club[], interests:Interest[]):ClubEvent[]{
      var result:Array<ClubEvent> = [];
      for (let event of events){
        event.visible = false; //initially
        if (clubs[event.club].selected)
            event.visible = true; //Set to true if club selected
        result.push(event); //Add to the list
      }
      return result;
  }
  
}
