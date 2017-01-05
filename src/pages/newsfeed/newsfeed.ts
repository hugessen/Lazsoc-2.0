 import {Component} from '@angular/core';
import {NavController, AlertController} from 'ionic-angular';
import {Calendar, Network} from 'ionic-native';
import { ClubEvent } from '../../models/club-event';
import { EventPage } from '../eventpage/event-page';
import { LocalData } from '../../providers/LocalData';
import { LocalStorage } from '../../providers/LocalStorage';
import { MapToIterablePipe } from '../../pipes/MapToIterablePipe';
import { GetLongDate } from '../../pipes/GetLongDate';
import { Observable } from 'rxjs/Rx';

@Component({
  templateUrl: 'newsfeed.html'
})
export class Newsfeed {
    events: Object; //Array of ClubEvent objects, defined in models/club-event
    clubs: Object;
    exportedEvents:Array<Object>;
    timeframe:string = "thisweek";
    feedType:string = "All";
    message:string = "All Events this week";
  constructor(public navCtrl: NavController, public localData: LocalData, public localStorage:LocalStorage, public alertCtrl: AlertController, public network:Network, public calendarCtrl:Calendar) {
     console.log("Opening newsfeed");
     Observable.forkJoin([
        Observable.fromPromise(this.localData.getClubs(true)),
        Observable.fromPromise(this.localData.getCustomFeed()),
        Observable.fromPromise(this.localData.getExportedEvents())
      ])
      .subscribe(data => {
        this.events = data[1];
        this.clubs = data[0];
        if(data[2] != null){
          this.exportedEvents = data[2].data;
          console.log('exported events:',this.exportedEvents);
          // this.checkExportConflicts(this.exportedEvents,this.events);
        }
        else{
          this.exportedEvents = new Array<Object>();
        }
        console.log('events:',this.events);
        console.log("Events this week:",this.events[this.timeframe]);
        console.log('clubs:',this.clubs);
      })
      console.log(this.exportedEvents);
  }

  checkExportConflicts(exp, events){
    var conflictTitles:string[] = []; //Titles of all events that have been changed
    var now = new Date(); //Current time
    for(var i = 0; i<exp.length; i++){ //Look through all exported events
      console.log(exp[i].title);
      if(new Date(exp[i].time).getTime >= now.getTime) { //If the event is still upcoming
        console.log(exp[i].title,"being evaluated");
        if(events.hasOwnProperty(exp[i].key)){ //Are any events happening that day?
          var found = false;
          for(let event of events[exp[i].key].events){ //See if exported event is in the events that day
            if(event.id == exp[i].id && new Date(event.start_date_time).getTime() == new Date(exp[i].time).getTime()){ //Is this our event, and is it at the same time?
              found = true;
              break;
            }
          }
          if(!found){ //We couldn't find the event
            console.log("Not found");
            conflictTitles.push(exp[i].title);
          }
        }
        else //No events that day; thus our exported event isn't there either
        {
          console.log("hasOwnProperty");
          conflictTitles.push(exp[i].title);
        }
      }
      else{ //The event has passed
        console.log("removing",exp[i].title,"from array");
        exp.splice(i,1); //Remove it
      }
    }
    if(conflictTitles.length > 0)
      this.notifyConflicts(conflictTitles);
  }

  hasEvents():boolean{
    if(this.events != null){
      if(this.feedType === "All"){
        return !this.isEmptyObj(this.events[this.timeframe]); //If not custom mode, just return whether there are events in the timeframe
      }
      else{
        for(let key in this.events[this.timeframe]){ //Iterate through the hashtable of date keys in specified timeframe
          //Return true if there is a single visible event
          if(this.events[this.timeframe][key].visible) 
            return true;
        }
      }
    }
    //Both custom mode and no visible events, or events are null
    return false;
  }

  isEmptyObj(obj:Object):boolean{
    return JSON.stringify(obj) === JSON.stringify({});
  }

  notifyConflicts(conflicts){
    for(let conflict of conflicts)
      this.showAlert("Event Changed!","Your event "+conflict+" has been moved or cancelled. Remove it from your calendar and check back later")
  }

  showAlert(title:string,message:string) {
    let alert = this.alertCtrl.create({
      title: title,
      subTitle: message,
      buttons: ['OK']
    });
    alert.present();
  }

  //For facebook links
  openLink(url:string){
    window.open(url, "_system");
  }

  isValidURL():boolean{
    return true;
  }

  addToCalendar(event:ClubEvent){
    this.exportedEvents.push({id:event.id,key:this.localData.generateDateKey(event.start_date_time),title:event.title,time:event.start_date_time});
    this.localStorage.set('exported-events',{data:this.exportedEvents});
    console.log("Exporting to exportedEvents",this.exportedEvents);
      Calendar.createEventInteractively(event.title, event.location, event.sub_heading, new Date(event.start_date_time), new Date(event.end_date_time))
      .then(
          (msg) => {
            console.log(msg);
            this.localStorage.set('exported-events',{data:this.exportedEvents});
          },
          (err) => console.log(err)
      );
  }
  
  viewEvent(event:any):void{
      this.navCtrl.push(EventPage, {event:event, club:this.clubs[event.club_id.toString()]});
  }

  //Toggle between custom and all view
  toggleFeed(){
    if (this.feedType == "Custom")
      this.feedType = "All";
    else{
      this.feedType = "Custom";
      if (Network.connection.toString() != 'none'){
        this.localData.getCustomFeed()
        .then(data => this.events = data)
        .catch(err => console.log(err))
     }
    }
  }
  
  doRefresh(refresher){
      if (Network.connection.toString() != 'none'){
        this.localData.getCustomFeed()
        .then(data => {
            this.events = data;
            console.log(Network.connection);
            refresher.complete();
        }).catch(err => {
          console.log(err);
        })
     }
    else {
        this.showAlert('Oh snap!', "Looks like you're disconnected. Try again later!")
    }
  }
  
}