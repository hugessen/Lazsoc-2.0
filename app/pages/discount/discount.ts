import {Component} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import {WebAPI} from '../../providers/webAPI';
import {DiscountSponsor} from '../../models/discount-sponsor';

@Component({
  templateUrl: 'build/pages/discount/discount.html'
})
export class DiscountPage {
    allSponsors:DiscountSponsor[];
    sponsorsRows:DiscountSponsor[][];
  constructor(private navCtrl: NavController) {
      this.allSponsors = this.getDiscountSponsors();
      //this.sponsorsRows = this.sponsorsToRows(this.allSponsors,2); //Unfortunately the compiler has a problem with this method
  }
  
  //The compiler treats result as undefined, and thus doesn't like when I push(). Need to fix
  sponsorsToRows(sponsors:DiscountSponsor[], size:number){
      var result:Array<DiscountSponsor[]>;
      for (var x = 0; x < sponsors.length; x++){
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
  
  //Angular has an issue with me importing WebAPI, and I have no idea why. I have to access locally for now.
  getDiscountSponsors():DiscountSponsor[]{
      return [
		{
			name: "Quick Sandwiches",
			logo: "img/discount_program/Quick_Sandwiches_Logo.png",
			discount: "-10% Storewide"
		},
		{
			name: "Shoeless Joes",
			logo: "img/discount_program/Shoeless_Joes_Logo.png",
			discount: "-25% Food with the Purchase of a Drink"
		},
		{
			name: "Caliburger",
			logo: "img/discount_program/Caliburger_Logo.png",
			discount: "-10% Storewide"
		},
		{
			name: "Holy Guacamole",
			logo: "img/discount_program/Holy_Guacamole_Logo.png",
			discount: "Free Upgrade to a Large Burrito"
		},			
		{
			name: "Noon Moment",
			logo: "img/discount_program/Noon_Moment_Logo.png",
			discount: "-10% Storewide"
		},
		{
			name: "Sweet Dreams Teashop",
			logo: "img/discount_program/Sweet_Dreams_Logo.png",
			discount: "-10% Storewide"
		},		
		{
			name: "Menchies",
			logo: "img/discount_program/Menchies_Logo.png",
			discount: "-10% Storewide"
		},
		{
			name: "Wordsworth Books",
			logo: "img/discount_program/Words_Worth_Books_Logo.png",
			discount: "-10% Storewide"
		},
		{
			name: "Staples",
			logo: "img/discount_program/Staples_Logo.png",
			discount: "-20% Copy and Print Services"
		},
		{
			name: "Harmony by Earthwinds",
			logo: "img/discount_program/Harmony_Logo.png",
			discount: "-10% off Regular Priced Items In-Store"
		},
		{
			name: "KW Pilates",
			logo: "img/discount_program/KW_Pilates_Logo.png",
			discount: "-10% Discount off Regular Priced Classes"
		},
		{
			name: "The Truth Beauty Company",
			logo: "img/discount_program/TTBC_Logo.png",
			discount: "-10% Discount at Waterloo and Guelph Locations"
		},
		{
			name: "Capri Salon",
			logo: "img/discount_program/Capri_Salon_Logo.png",
			discount: "-10% Off Products and Salon Services Tuesday through Thursday with select Stylists"
		}
		/*{
			name: "Huether Hotel",
			logo: "img/discount_program/Huether_Hotel_Logo.png",
			discount: "TBD"
		},*/
		];
  }
}
