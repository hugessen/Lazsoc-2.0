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
    timeframe:string = "this week";
    feedType:string = "all";
    message:string = "All Events This Week";
  constructor(public navCtrl: NavController, public localData: LocalData, public localStorage:LocalStorage, public alertCtrl: AlertController, public popoverCtrl:PopoverController, public network:Network, public calendarCtrl:Calendar) {
     Observable.forkJoin([
        Observable.fromPromise(this.localData.getClubs(true)),
        Observable.fromPromise(this.localData.getCustomFeed())
      ])
      .subscribe(data => {
        this.events = data[1];
        this.clubs = data[0];
        console.log('events:',this.events);
        console.log('clubs:',this.clubs);
      })
  }

  showAlert(title:string,message:string) {
    let alert = this.alertCtrl.create({
      title: title,
      subTitle: message,
      buttons: ['OK']
    });
    alert.present();
  }

  presentPopover(myEvent) {
    let popover = this.popoverCtrl.create(PopoverPage, {feedType:this.feedType, timeframe:this.timeframe},{enableBackdropDismiss:false});
    popover.present({
      ev: myEvent
    });

    popover.onDidDismiss(data => {
      this.feedType = data.feedType;
      this.timeframe = data.timeframe;

      if(this.feedType == "all"){
        if(this.timeframe == "past") this.message = "All Past Events";
        else if (this.timeframe == "this week") this.message = "All Events This Week";
        else if (this.timeframe == "upcoming") this.message = "All Upcoming Events";
      }
      else if (this.feedType == "custom"){
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
      Calendar.createEventInteractively(event.title, event.location, event.sub_heading, new Date(event.start_date_time), new Date(event.end_date_time))
      .then(
          (msg) => {
            console.log(msg);
            
          },
          (err) => console.log(err)
      );
  }
  
  viewEvent(event:any):void{
      this.navCtrl.push(EventPage, {event:event, club:this.clubs[event.club_id.toString()]});
  }
  
  doRefresh(refresher){
      if (Network.connection.toString() != 'none'){
        this.localData.getCustomFeed()
        .then(data => {
            this.events = data;
            this.showAlert("Network:",Network.connection);
            console.log(Network.connection);
            refresher.complete();
        }).catch(err => {
          this.showAlert("Promise didn't return",err);
        })
     }
    else {
        this.showAlert('Oh snap!', "Looks like you're disconnected. Try again later!")
    }
  }
  
}