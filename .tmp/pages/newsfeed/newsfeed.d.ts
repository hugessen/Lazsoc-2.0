/// <reference types="core-js" />
import { NavController, AlertController, PopoverController } from 'ionic-angular';
import { ClubEvent } from '../../models/club-event';
import { LocalData } from '../../providers/LocalData';
import { LocalStorage } from '../../providers/LocalStorage';
export declare class Newsfeed {
    navCtrl: NavController;
    localData: LocalData;
    localStorage: LocalStorage;
    alertCtrl: AlertController;
    popoverCtrl: PopoverController;
    events: Object;
    clubs: Object;
    timeframe: string;
    feedType: string;
    message: string;
    constructor(navCtrl: NavController, localData: LocalData, localStorage: LocalStorage, alertCtrl: AlertController, popoverCtrl: PopoverController);
    showAlert(title: string, message: string): void;
    presentPopover(myEvent: any): void;
    isValidURL(): boolean;
    addToCalendar(event: ClubEvent): void;
    viewEvent(event: any): void;
    doRefresh(refresher: any): void;
}
