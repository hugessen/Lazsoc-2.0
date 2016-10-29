import { ViewController, NavParams } from 'ionic-angular';
export declare class PopoverPage {
    private viewCtrl;
    private navParams;
    feedType: string;
    timeframe: string;
    constructor(viewCtrl: ViewController, navParams: NavParams);
    close(): void;
}
