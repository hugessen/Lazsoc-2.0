import { Injectable } from '@angular/core';
import { Storage, LocalStorage } from 'ionic-angular';
import { WebAPI } from '../providers/WebAPI';
//Custom classes
import { ClubEvent } from '../models/club-event';
import { Club } from '../models/club'; //Club object. All objects stored in the 'models' folder
import { Interest } from '../models/interest';
import {DiscountSponsor} from '../models/discount-sponsor';

import 'rxjs/add/operator/map';

@Injectable()
export class LocalData {
    interests:any[];
    localStorage:Storage;
    constructor(private webAPI:WebAPI){
        this.localStorage = new Storage(LocalStorage);
    }
    
    //Stub. Checks if localStorage returns empty object
    isEmptyObject(val:string){
    }
    
    //Check if we have localStorage. Yes: Return it. No: Call API.
    getInterests():Interest[]{
        /*
        if(!isEmptyObject(localStorage.get('interests'))){
            return JSON.parse(localStorage.get('interests'));
        else { //Get from WebAPI, see below }
        }
        */
        var returnVal:any[] = this.webAPI.getInterests(); //Just doing this for now
        for (let interest of returnVal) interest.selected = false;
        return returnVal;
    }   
    setInterests(interests:any[]){
        this.interests = interests;
    } 
    
    //Method Stub
    getClubs(){ }
    
    //Method Stub
    setClubs(){ }
    
    writeToStorage(){
        this.localStorage.set('interests',JSON.stringify(this.interests));
        //this.localStorage.set('clubs', JSON.stringify(this.clubs)); Will be implemented
    }
}