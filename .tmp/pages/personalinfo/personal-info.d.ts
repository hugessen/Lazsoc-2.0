import { NavController, NavParams, ModalController } from 'ionic-angular';
import { UserData } from '../../models/UserData';
import { LocalData } from '../../providers/LocalData';
export declare class PersonalInfo {
    private navCtrl;
    private navParams;
    private modalCtrl;
    private localData;
    userData: UserData;
    hasInfo: boolean;
    constructor(navCtrl: NavController, navParams: NavParams, modalCtrl: ModalController, localData: LocalData);
    init(): void;
    openLogin(): void;
}
