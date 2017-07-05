 import {Component} from '@angular/core';
import {NavController, AlertController} from 'ionic-angular';
import { Calendar } from '@ionic-native/Calendar';
import { Network } from '@ionic-native/Network';
import { EventPage } from '../eventpage/event-page';
import { LocalData } from '../../providers/LocalData';
import { LocalStorage } from '../../providers/LocalStorage';
import { Observable } from 'rxjs/Rx';

@Component({
  templateUrl: 'newsfeed.html'
})
export class Newsfeed {
    events: Object; //Array of ClubEvent objects, defined in models/club-event
    clubs: Object;
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
        console.log('events:',this.events);
        // console.log("Events this week:",this.events[this.timeframe]);
        //console.log('clubs:',JSON.stringify(this.clubs));
      })
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
      this.showAlert("Event Changed!","Your event " + conflict+" has been moved or cancelled. Remove it from your calendar and check back later")
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

  addToCalendar(event){
      var startTime = new Date(event.start_date_time);
      var endTime = new Date(event.end_date_time);
      startTime.setHours(startTime.getUTCHours());
      endTime.setHours(endTime.getUTCHours());
      this.calendarCtrl.createEventInteractively(event.title, event.location, event.sub_heading, startTime, endTime)
      .then(
          (msg) => console.log(msg),
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
      if (this.network.type != 'none'){ //
        this.localData.getCustomFeed()
        .then(data => this.events = data)
        .catch(err => console.log(err))
     }
    }
  }

  doRefresh(refresher){
      if (this.network.type!= 'none'){
        this.localData.getCustomFeed()
        .then(data => {
            this.events = data;
            console.log(this.network.type);
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
