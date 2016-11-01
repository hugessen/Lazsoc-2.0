/// <reference types="core-js" />
import { NavController, AlertController, PopoverController } from 'ionic-angular';
import { Calendar, Network } from 'ionic-native';
import { ClubEvent } from '../../models/club-event';
import { LocalData } from '../../providers/LocalData';
import { LocalStorage } from '../../providers/LocalStorage';
export declare class Newsfeed {
    navCtrl: NavController;
    localData: LocalData;
    localStorage: LocalStorage;
    alertCtrl: AlertController;
    popoverCtrl: PopoverController;
    network: Network;
    calendarCtrl: Calendar;
    events: Object;
    clubs: Object;
    timeframe: string;
    feedType: string;
    message: string;
    constructor(navCtrl: NavController, localData: LocalData, localStorage: LocalStorage, alertCtrl: AlertController, popoverCtrl: PopoverController, network: Network, calendarCtrl: Calendar);
    showAlert(title: string, message: string): void;
    presentPopover(myEvent: any): void;
    isValidURL(): boolean;
    addToCalendar(event: ClubEvent): void;
    viewEvent(event: any): void;
    doRefresh(refresher: any): void;
}
