import {Component} from '@angular/core';
import {NavController, NavParams, ViewController} from 'ionic-angular';
import { LocalData } from '../../providers/LocalData';
import {Calendar} from 'ionic-native';
import { Club } from '../../models/club';
import { Prefs } from '../../models/prefs';
import { ClubEvent } from '../../models/club-event';
import { EventPage } from '../eventpage/event-page';

@Component({
  templateUrl: '../clubpage/clubpage.html'
})
export class ClubPage {
    club: Club;
    events: Object[];
    prefs: Prefs;
    isModal:boolean;
    currentTime:number;
    //Current club being viewed is passed through NavParams
  constructor(private navCtrl: NavController, private navParams: NavParams, private localData: LocalData, public viewCtrl:ViewController) {
    this.currentTime = new Date().getTime();
    this.club = this.navParams.get('club'); //The club whose page it is
    this.prefs = this.navParams.get('prefs'); //For the toggle() method
    this.isModal = this.navParams.get('isModal');
    console.log(JSON.stringify(this.club));

    this.localData.getCustomFeed(this.club) //Club is an optional param that restricts output to a particular club's events
    .then(res => {
        this.events = res["thisweek"];
        console.log(this.events);
    })
  }

  //Push an event on the stack to be viewed
  viewEvent(event:ClubEvent):void{
    this.navCtrl.push(EventPage, {event:event, club:this.club});
  }

  //Toggle the club as a preference
  toggle(){
    this.prefs.clubPrefs[this.club.id.toString()].selected = !this.prefs.clubPrefs[this.club.id.toString()].selected;
  }

  hasSocial(club:string):boolean {
    return this.club.club_social_links.hasOwnProperty(club);
  }

  //Used to check if this club has events coming up. No point in looping through events if there aren't any
  isEmptyObj(obj:Object){
    return JSON.stringify(obj) === JSON.stringify({});
  }

  //For opening social media links
  openLink(url:string){
    window.open(url, "_system");
  }

  //For adding events from the mini-newsfeed
  addToCalendar(event:ClubEvent){
    Calendar.createEventInteractively(event.title, event.location, event.sub_heading, new Date(event.start_date_time), new Date(event.end_date_time))
    .then(
        (msg) => {
          console.log(msg);
        },
        (err) => console.log(err)
    );
  }

  modalDismiss(){
    this.viewCtrl.dismiss();
  }
}