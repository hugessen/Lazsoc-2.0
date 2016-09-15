import { Injectable } from '@angular/core';
import { Storage, LocalStorage } from 'ionic-angular';
import { WebAPI } from '../providers/WebAPI';
import { CacheService } from '../providers/CacheService';

//Custom classes
import { ClubEvent } from '../models/club-event';
import { Club } from '../models/club'; //Club object. All objects stored in the 'models' folder
import { Interest } from '../models/interest';
import {DiscountSponsor} from '../models/discount-sponsor';

@Injectable()
export class LocalData {
    private clubs: any;
    private interests: any[];
    
    constructor(private webAPI:WebAPI, private cacheService: CacheService){
        cacheService.getItem('clubs','http://app.lazsoc.ca/app_clubs.php')
        .then(res => this.clubs = res)
        .catch(err => console.log('oops', err));
    }
    
    getClubs():any{
        return this.clubs;
    }
    
}