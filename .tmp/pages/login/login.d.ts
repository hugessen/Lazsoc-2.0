import { NavParams, ViewController, ToastController } from 'ionic-angular';
import { LocalStorage } from '../../providers/LocalStorage';
import { UserData } from '../../models/userdata';
export declare class LoginPage {
    navParams: NavParams;
    viewCtrl: ViewController;
    toastCtrl: ToastController;
    localStorage: LocalStorage;
    userData: UserData;
    programOptions: string[];
    constructor(navParams: NavParams, viewCtrl: ViewController, toastCtrl: ToastController, localStorage: LocalStorage);
    submit(): void;
    isValidEmail(email: string): boolean;
    isNumeric(str: string): boolean;
    showToast(message: string): void;
}
