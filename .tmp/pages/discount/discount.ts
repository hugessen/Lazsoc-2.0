import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {LocalData} from '../../providers/LocalData';
import {DiscountSponsor} from '../../models/discount-sponsor';

@Component({
  templateUrl: '../discount/discount.html'
})
export class DiscountPage {
    allSponsors:DiscountSponsor[];
    sponsorsRows:DiscountSponsor[][];
  constructor(public navCtrl: NavController, public localData:LocalData) {
      this.getSponsors();
  }
  
  getSponsors(){
    this.localData.getDiscountSponsors()
    .then(data => {
        this.allSponsors = data;
        this.sponsorsRows = this.sponsorsToRows(this.allSponsors,2);
    });
  }
  
  //Credit to Zeeshan for creating this method. Outputs a 2D array of DiscountSponsors[size], so we can output them in columns
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
