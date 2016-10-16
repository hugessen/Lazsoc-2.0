import {Component} from '@angular/core';
import {ViewController, NavParams} from 'ionic-angular';

@Component({
  templateUrl: 'popover.html'
})
export class PopoverPage {
  feedType:string;
  timeframe:string;
  
  constructor(private viewCtrl: ViewController, private navParams:NavParams) {
    this.feedType = navParams.get('feedType');
    this.timeframe = navParams.get('timeframe');
  }
  close() {
      console.log("feed type: " + this.feedType + " timeframe: " + this.timeframe);
      this.viewCtrl.dismiss({feedType:this.feedType, timeframe:this.timeframe});
  }
}