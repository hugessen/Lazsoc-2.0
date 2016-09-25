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
    private firstLoad: boolean = true;
    private events: any;
    private clubs: any;
    private interests: any;
    private discountSponsors: any;
    private cache: CacheService;
    
    constructor(private webAPI:WebAPI, private cacheService: CacheService){
        this.cache = cacheService;
        this.webAPI = webAPI;
    }
    
    saveData(name:string, data:any, ttl?:number):Promise<{}>{
        return new Promise((resolve,reject) => {
            if(ttl){
                this.cache.setItem(name,data,ttl)
                .then(res => resolve(res))
                .catch(err => reject(err));
            }
            else{
                this.cache.setItem(name,data)
                .then(res => resolve(res))
                .catch(err => reject(err));
            }
        })
    }
    
    getEvents():Promise<any>{
        return new Promise((resolve,reject) => {
            this.cache.getItem('events','app_events.php')
            .then(res => {
                this.events = res;
                resolve(res);
            }).catch(err => reject(err));
        })
    }
    getClubs():Promise<any>{
        return new Promise((resolve,reject) => {
            this.cache.getItem('clubs','app_clubs.php')
            .then(res => {
                this.clubs = res;
                resolve(this.clubs);
            }).catch(err => reject(err));
        })
    }
    getInterests():Promise<any>{
        return new Promise((resolve,reject) => {
            this.cache.getItem('interests','app_interests.php')
            .then(res => {
                this.interests = res;
                resolve(this.interests);
            }).catch(err => reject(err));
        })
    }
    getDiscountSponsors():Promise<any>{
        return new Promise((resolve,reject) => {
            this.cache.getItem('discount-sponsors','app_discount.php')
            .then(res => {
                this.discountSponsors = res;
                resolve(res);
            }).catch(err => reject(err));
        })
    }
    
    
    getEventsLocally(){
    return [  
        {   id:0,
            title:"O-Day",
            startTime:"9/11/2016 9:00:00 AM",
            endTime: "9/11/2016 4:30:00 PM",
            location: "Bingeman's Conference Centre",
            tagline:"Come out and learn what it means to be a business student!",
            club:22,
            banner:"img/Event Banners/O-Day.jpg",
            tags: [
                "Networking","First Year"
            ],
            desc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."},
        {
            id:1,
            title:"5 Days for the Homeless!",
            startTime: "3/11/2017 9:00:00 AM",
            endTime: "3/11/2017 4:30:00 PM",
            location:"Fred Nichols Building",
            tagline:"Come out and support us as we sleep outside for a week!",
            club:21,   
            banner:"img/Event Banners/5DaysBanner.jpg",
            tags: [
               "Philanthropy", "Leadership", "Social" 
            ],
            desc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
            
        }
    ];
  }
}