import { NavController, NavParams } from 'ionic-angular';
import { LocalData } from '../../providers/LocalData';
import { Club } from '../../models/club';
import { ClubEvent } from '../../models/club-event';
export declare class ClubPage {
    private navCtrl;
    private navParams;
    private localData;
    club: Club;
    events: ClubEvent[];
    constructor(navCtrl: NavController, navParams: NavParams, localData: LocalData);
    toggle(): void;
}
