 import {Component} from '@angular/core';
import {NavController, AlertController, PopoverController,ViewController} from 'ionic-angular';
import {Calendar, Network} from 'ionic-native';
import { ClubEvent } from '../../models/club-event';
import { EventPage } from '../eventpage/event-page';
import { Club } from '../../models/club';
import { PopoverPage } from '../popover/popover';
import { LocalData } from '../../providers/LocalData';

let disconnectSubscription = Network.onDisconnect().subscribe(() => {
  this.showAlert('Disconnected!','network was disconnected :-(');
});

let connectSubscription = Network.onConnect().subscribe(() => {
  this.showAlert('network connected!','');
});

@Component({
  templateUrl: 'newsfeed.html',
})
export class Newsfeed {
    events: ClubEvent[]; //Array of ClubEvent objects, defined in models/club-event
    clubs: Club[];
    timeframe:string = "this week";
    feedType:string = "all";
    message:string = "All Events This Week";
  constructor(public navCtrl: NavController, public localData: LocalData, public alertCtrl: AlertController, public popoverCtrl:PopoverController) {
    this.localData.getCustomFeed()
    .then(data => {this.events = data;
          console.log(this.events);
      });
      this.localData.getClubs()
      .then(data => {this.clubs = data;
        console.log(this.clubs);   
      });
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
  
  addToCalendar(event:ClubEvent){
      Calendar.createEventInteractively(event.title, event.location, event.subheader, new Date(event.startDate), new Date(event.endDate))
      .then(
          (msg) => console.log(msg),
          (err) => console.log(err)
      );
  }
  
  viewEvent(event:ClubEvent):void{
      this.navCtrl.push(EventPage, {event:event, club:this.clubs[event.clubRef]});
  }
  
  doRefresh(refresher){
      if (Network.connection.toString() != 'none'){
        this.localData.getCustomFeed()
        .then(data => {
            this.events = data;
            refresher.complete();
        });
     }
    else {
        this.showAlert('Oh snap!', "Looks like you're disconnected. Try again later!")
    }
  }
  
}
