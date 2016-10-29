import { NavController, NavParams, ModalController } from 'ionic-angular';
import { UserData } from '../../models/UserData';
import { LocalData } from '../../providers/LocalData';
import { LocalStorage } from '../../providers/LocalStorage';
export declare class PersonalInfo {
    private navCtrl;
    private navParams;
    private modalCtrl;
    private localData;
    private localStorage;
    userData: UserData;
    hasInfo: boolean;
    constructor(navCtrl: NavController, navParams: NavParams, modalCtrl: ModalController, localData: LocalData, localStorage: LocalStorage);
    openLogin(): void;
}
