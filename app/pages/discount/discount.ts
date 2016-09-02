import {Component} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import {WebAPI} from '../../providers/WebAPI';
import {DiscountSponsor} from '../../models/discount-sponsor';

@Component({
  templateUrl: 'build/pages/discount/discount.html'
})
export class DiscountPage {
    allSponsors:DiscountSponsor[];
    sponsorsRows:DiscountSponsor[][];
  constructor(private navCtrl: NavController, public webAPI:WebAPI) {
      this.allSponsors = this.webAPI.getDiscountSponsors();
      this.sponsorsRows = this.sponsorsToRows(this.allSponsors,2); //Unfortunately the compiler has a problem with this method
  }
  
  //The compiler treats result as undefined, and thus doesn't like when I push(). Need to fix
  sponsorsToRows(sponsors:DiscountSponsor[], size:number){
      var result:Array<DiscountSponsor[]>;
      result = [];
      for (var x = 0; x < sponsors.length; x+=size){
          result.push(sponsors.slice(x,x+size));
      }
      // Every row MUST be full, if it is not then add in spacing to make sure they're all the same size
      for (var x = 0; x<result.length; x++){
          while (result[x].length % size != 0){
              result[x].push({
                  name: "",
                  logo:"",
                  discount: ""
              })
          }
      }
      return result;
  }
  
}
