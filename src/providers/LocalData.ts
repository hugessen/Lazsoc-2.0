import { Injectable } from '@angular/core';
import { CacheService } from '../providers/CacheService';
import { Observable } from 'rxjs/Rx';

//Custom classes
import { ClubEvent } from '../models/club-event';
import { Club } from '../models/club'; //Club object. All objects stored in the 'models' folder
import { Interest } from '../models/interest';

@Injectable()
export class LocalData {
    public events: any;
    public clubs: any;
    public interests: any;
    public discountSponsors: any;
    public cache: CacheService;
    
    constructor(public cacheService: CacheService){
        this.cache = cacheService;
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
            this.cache.getItem('events','app_events.php',12*60*60) //Cache for 12 hours
            .then(res => {
                this.events = res;
                resolve(res);
            }).catch(err => reject(err));
        })
    }
    
    getUserInfo():Promise<any>{
        return new Promise((resolve,reject) => {
            this.cache.getItem('userdata','')
            .then(res => {
                this.events = res;
                resolve(res);
            }).catch(err => reject(err));
        })
    }
    
    getCustomFeed():Promise<any>{
        return new Promise((resolve,reject) => {
            Observable.forkJoin([ //Used to concurrently resolve multiple promises
                Observable.fromPromise(this.getEvents()),
                Observable.fromPromise(this.getClubs()),
                Observable.fromPromise(this.getInterests())
            ]).subscribe(data => {   
                //Applies the visible property to events based on Clubs and Interests
                var val = this.doCustomFeed(this.getEventsLocally(),data[1],data[2]);
                resolve(val);
            })
        })
    }
    
    doCustomFeed(events:any[], clubs:Club[], interests:Interest[]):ClubEvent[]{
        var result:Array<ClubEvent> = [];
        //Sorting by time
        events.sort(function(a,b){
            return Date.parse(a.startTime) - Date.parse(b.startTime)
        })
        //Applying visible property based on prefs
        for (let event of events){
            event.visible = false; //initially
            if (clubs[event.club].selected)
                event.visible = true; //Set to true if club selected
            result.push(event); //Add to the list
        }
        return result;
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
        {
            id:0,
            title:"5 Days for the Homeless!",
            startTime: "3/11/2017 9:00 AM",
            endTime: "3/11/2017 4:30 PM",
            location:"Fred Nichols Building",
            tagline:"Come out and support us as we sleep outside for a week!",
            club:21,   
            banner:"assets/img/Event Banners/5DaysBanner.jpg",
            tags: [
               "Philanthropy", "Leadership", "Social" 
            ],
            desc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
            
        },
        {   id:1,
            title:"O-Day",
            startTime:"9/11/2016 9:00 AM",
            endTime: "9/11/2016 4:30 PM",
            location: "Bingeman's Conference Centre",
            tagline:"Come out and learn what it means to be a business student!",
            club:22,
            banner:"assets/img/Event Banners/O-Day.jpg",
            tags: [
                "Networking","First Year"
            ],
            desc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."}
    ];
  }
}