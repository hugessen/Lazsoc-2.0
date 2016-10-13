import { NavController, ToastController } from 'ionic-angular';
import { LocalData } from '../../providers/LocalData';
import { Club } from '../../models/club';
import { Interest } from '../../models/interest';
export declare class ClubSelector {
    navCtrl: NavController;
    localData: LocalData;
    toastCtrl: ToastController;
    clubs: Club[];
    interests: Interest[];
    view: string;
    constructor(navCtrl: NavController, localData: LocalData, toastCtrl: ToastController);
    init(): void;
    showToast(message: string): void;
    toggle(club: Club): void;
    viewClub(club: Club): void;
    savePrefs(): void;
}
