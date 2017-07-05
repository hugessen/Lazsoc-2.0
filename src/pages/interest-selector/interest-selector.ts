import {Component, Input} from '@angular/core';
import {NavController, NavParams, ModalController} from 'ionic-angular';
import {LoginPage} from '../login/login';
import {UserData} from '../../models/userdata';
import {LocalData} from '../../providers/LocalData';
import {LocalStorage} from '../../providers/LocalStorage';

@Component({
  selector:'interest-selector',
  templateUrl: 'interest-selector.html'
})

export class InterestSelector {
  @Input() interests:any[];
  @Input() prefs:any;

  constructor(private navCtrl: NavController, private navParams: NavParams, private modalCtrl: ModalController, private localData: LocalData, private localStorage: LocalStorage) {
      this.navCtrl = navCtrl;
      this.localData.getTags()
      .then(data => {
          this.interests = this.formatTags(data);
      })
      console.log("interest-selector:",this.interests);
  }


  formatTags(interests):any[]{
    var result = [];
    var id = 0;
    for (let interest of interests){
      result.push({name:interest, id:id++});
    }
    return result;
  }
}
