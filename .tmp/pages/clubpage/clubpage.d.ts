/// <reference types="core-js" />
import { NavController, NavParams } from 'ionic-angular';
import { LocalData } from '../../providers/LocalData';
import { Club } from '../../models/club';
import { UserData } from '../../models/UserData';
import { ClubEvent } from '../../models/club-event';
export declare class ClubPage {
    private navCtrl;
    private navParams;
    private localData;
    club: Club;
    events: Object[];
    userData: UserData;
    currentTime: number;
    constructor(navCtrl: NavController, navParams: NavParams, localData: LocalData);
    viewEvent(event: ClubEvent): void;
    toggle(): void;
    openLink(url: string): void;
}
