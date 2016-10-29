import {Injectable} from '@angular/core';
import {Alert, NavController} from 'ionic-angular';
import {Network, Connection} from 'ionic-native';

@Injectable()
export class NetworkService {
  constructor(private nav: NavController) {
  }
  
  noConnection() {
    return (Network.connection === 'none');
  }

  showNetworkAlert() {
    let networkAlert = Alert.create({
      title: 'No Internet Connection',
      message: 'Please check your internet connection.',
      buttons: [
        {
          text: 'Cancel',
          handler: () => {networkAlert.dismiss()}
        }
      ]
    });
    this.nav.present(networkAlert);
  }
}