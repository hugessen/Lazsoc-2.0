 import {Component} from '@angular/core';
import {NavController, AlertController} from 'ionic-angular';
import {Calendar, Network} from 'ionic-native';
import { ClubEvent } from '../../models/club-event';
import { Club } from '../../models/club';
import { Interest } from '../../models/interest';
import { EventPage } from '../eventpage/event-page';
import { LocalData } from '../../providers/LocalData';
import { Observable } from 'rxjs/Rx';

let disconnectSubscription = Network.onDisconnect().subscribe(() => {
  this.showAlert('Disconnected!','network was disconnected :-(');
});

let connectSubscription = Network.onConnect().subscribe(() => {
  this.showAlert('network connected!','');
});

@Component({
  templateUrl: 'build/pages/newsfeed/newsfeed.html',
})
export class Newsfeed {
    events: ClubEvent[]; //Array of ClubEvent objects, defined in models/club-event
    view:string; //Used to toggle between All and Custom Newsfeed
    
  constructor(private navCtrl: NavController, public localData: LocalData, private alertCtrl: AlertController) {
      this.localData = localData;
      this.localData.getCustomFeed()
      .then(data => {this.events = data;
            console.log(this.events);
        });
      this.view = "custom"; //Set to the All Events view initially
  }
  
  showAlert(title:string,message:string) {
    let alert = this.alertCtrl.create({
      title: title,
      subTitle: message,
      buttons: ['OK']
    });
    alert.present();
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
