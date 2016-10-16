import { NavController, AlertController, PopoverController } from 'ionic-angular';
import { ClubEvent } from '../../models/club-event';
import { Club } from '../../models/club';
import { LocalData } from '../../providers/LocalData';
export declare class Newsfeed {
    navCtrl: NavController;
    localData: LocalData;
    alertCtrl: AlertController;
    popoverCtrl: PopoverController;
    events: ClubEvent[];
    clubs: Club[];
    timeframe: string;
    feedType: string;
    message: string;
    constructor(navCtrl: NavController, localData: LocalData, alertCtrl: AlertController, popoverCtrl: PopoverController);
    showAlert(title: string, message: string): void;
    presentPopover(myEvent: any): void;
    addToCalendar(event: ClubEvent): void;
    viewEvent(event: ClubEvent): void;
    doRefresh(refresher: any): void;
}
