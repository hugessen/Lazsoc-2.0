import { NavController, NavParams } from 'ionic-angular';
import { ClubEvent } from '../../models/club-event';
import { Club } from '../../models/club';
export declare class EventPage {
    navCtrl: NavController;
    navParams: NavParams;
    event: ClubEvent;
    club: Club;
    message: string;
    constructor(navCtrl: NavController, navParams: NavParams);
    addToCalendar(): void;
}
