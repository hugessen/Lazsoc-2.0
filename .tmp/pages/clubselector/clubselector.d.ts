import { NavController, ToastController } from 'ionic-angular';
import { LocalData } from '../../providers/LocalData';
import { LocalStorage } from '../../providers/LocalStorage';
import { Club } from '../../models/club';
import { Prefs } from '../../models/prefs';
import { Interest } from '../../models/interest';
export declare class ClubSelector {
    navCtrl: NavController;
    localData: LocalData;
    toastCtrl: ToastController;
    private localStorage;
    clubs: Club[];
    interests: Interest[];
    prefs: Prefs;
    view: string;
    constructor(navCtrl: NavController, localData: LocalData, toastCtrl: ToastController, localStorage: LocalStorage);
    init(): void;
    showToast(message: string): void;
    toggle(clubID: number): void;
    viewClub(club: Club): void;
    savePrefs(): void;
}
