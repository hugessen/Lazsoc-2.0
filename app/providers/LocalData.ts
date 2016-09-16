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
    private cache: CacheService;
    
    constructor(private webAPI:WebAPI, private cacheService: CacheService){
        this.cache = cacheService;
    }
    
    getClubs():Promise<any>{
        return new Promise((resolve,reject) => {
            this.cache.getItem('clubs','app_clubs.php')
            .then(res => {
                this.clubs = res;
                resolve(res);
            }).catch(err => reject(err));
        })
    }
    getInterests():Promise<any>{
        return new Promise((resolve,reject) => {
            this.cache.getItem('interests','app_interests.php')
            .then(res => {
                this.clubs = res;
                resolve(res);
            }).catch(err => reject(err));
        })
    }
    
}