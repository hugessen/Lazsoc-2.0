import { NavParams, ViewController, ToastController } from 'ionic-angular';
import { LocalData } from '../../providers/LocalData';
import { UserData } from '../../models/userdata';
export declare class LoginPage {
    navParams: NavParams;
    viewCtrl: ViewController;
    toastCtrl: ToastController;
    localData: LocalData;
    userData: UserData;
    programOptions: string[];
    constructor(navParams: NavParams, viewCtrl: ViewController, toastCtrl: ToastController, localData: LocalData);
    submit(): void;
    isValidEmail(email: string): boolean;
    isNumeric(str: string): boolean;
    showToast(message: string): void;
}
