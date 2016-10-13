import { NavController, NavParams } from 'ionic-angular';
import { ClubEvent } from '../../models/club-event';
export declare class EventPage {
    navCtrl: NavController;
    navParams: NavParams;
    event: ClubEvent;
    message: string;
    constructor(navCtrl: NavController, navParams: NavParams);
    addToCalendar(): void;
}
