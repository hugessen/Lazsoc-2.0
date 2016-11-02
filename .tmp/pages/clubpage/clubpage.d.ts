/// <reference types="core-js" />
import { NavController, NavParams } from 'ionic-angular';
import { LocalData } from '../../providers/LocalData';
import { Club } from '../../models/club';
import { Prefs } from '../../models/prefs';
import { ClubEvent } from '../../models/club-event';
export declare class ClubPage {
    private navCtrl;
    private navParams;
    private localData;
    club: Club;
    events: Object[];
    prefs: Prefs;
    currentTime: number;
    constructor(navCtrl: NavController, navParams: NavParams, localData: LocalData);
    viewEvent(event: ClubEvent): void;
    toggle(): void;
    openLink(url: string): void;
}
