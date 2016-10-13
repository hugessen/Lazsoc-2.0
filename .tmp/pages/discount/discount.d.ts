import { NavController } from 'ionic-angular';
import { LocalData } from '../../providers/LocalData';
import { DiscountSponsor } from '../../models/discount-sponsor';
export declare class DiscountPage {
    navCtrl: NavController;
    localData: LocalData;
    allSponsors: DiscountSponsor[];
    sponsorsRows: DiscountSponsor[][];
    constructor(navCtrl: NavController, localData: LocalData);
    getSponsors(): void;
    sponsorsToRows(sponsors: DiscountSponsor[], size: number): DiscountSponsor[][];
}
