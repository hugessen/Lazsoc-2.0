 import {Component} from '@angular/core';
import {NavController, AlertController, PopoverController} from 'ionic-angular';
import {Calendar, Network} from 'ionic-native';
import { ClubEvent } from '../../models/club-event';
import { EventPage } from '../eventpage/event-page';
import { PopoverPage } from '../popover/popover';
import { LocalData } from '../../providers/LocalData';
import { LocalStorage } from '../../providers/LocalStorage'; //Remember to remove after
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
    timeframe:string = "this week";
    feedType:string = "All";
    message:string = "All Events This Week";
  constructor(public navCtrl: NavController, public localData: LocalData, public localStorage:LocalStorage, public alertCtrl: AlertController, public popoverCtrl:PopoverController, public network:Network, public calendarCtrl:Calendar) {
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
        console.log('clubs:',this.clubs);
      })
      console.log(this.exportedEvents);
  }

  checkExportConflicts(exp, events){
    var conflictTitles:string[] = [];
    var now = new Date();
    for(var i = 0; i<exp.length; i++){
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

  openLink(url:string){
    window.open(url, "_system");
  }

  presentPopover(myEvent) {
    let popover = this.popoverCtrl.create(PopoverPage, {feedType:this.feedType, timeframe:this.timeframe},{cssClass:'popoverClass',enableBackdropDismiss:false});
    popover.present({
      ev: myEvent
    });

    popover.onDidDismiss(data => {
      this.feedType = data.feedType;
      this.timeframe = data.timeframe;

      if(this.feedType == "All"){
        if(this.timeframe == "past") this.message = "All Past Events";
        else if (this.timeframe == "this week") this.message = "All Events This Week";
        else if (this.timeframe == "upcoming") this.message = "All Upcoming Events";
      }
      else if (this.feedType == "Custom"){
        if(this.timeframe == "past") this.message = "Custom Feed of Past Events";
        else if (this.timeframe == "this week") this.message = "Custom Feed of Events this Week";
        else if (this.timeframe == "upcoming") this.message = "Custom Feed of Upcoming Events"
      }
    });
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

  toggleFeed(){
    if (this.feedType == "Custom")
      this.feedType = "All";
    else
      this.feedType = "Custom";
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