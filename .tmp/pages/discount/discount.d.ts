import { NavController } from 'ionic-angular';
import { LocalData } from '../../providers/LocalData';
import { LocalStorage } from '../../providers/LocalStorage';
import { DiscountSponsor } from '../../models/discount-sponsor';
export declare class DiscountPage {
    navCtrl: NavController;
    localData: LocalData;
    localStorage: LocalStorage;
    allSponsors: DiscountSponsor[];
    sponsorsRows: DiscountSponsor[][];
    constructor(navCtrl: NavController, localData: LocalData, localStorage: LocalStorage);
    getSponsors(): void;
    sponsorsToRows(sponsors: DiscountSponsor[], size: number): DiscountSponsor[][];
}
