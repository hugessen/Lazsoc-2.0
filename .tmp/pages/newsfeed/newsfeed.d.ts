import { NavController, AlertController } from 'ionic-angular';
import { ClubEvent } from '../../models/club-event';
import { LocalData } from '../../providers/LocalData';
export declare class Newsfeed {
    navCtrl: NavController;
    localData: LocalData;
    alertCtrl: AlertController;
    events: ClubEvent[];
    view: string;
    constructor(navCtrl: NavController, localData: LocalData, alertCtrl: AlertController);
    showAlert(title: string, message: string): void;
    addToCalendar(event: ClubEvent): void;
    viewEvent(event: ClubEvent): void;
    doRefresh(refresher: any): void;
}
