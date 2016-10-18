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
            this.cache.getItem('events','events.json',60*20) //Cache for 20 mins
            .then(res => {
                this.events = res["events"].events;
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
    
    getCustomFeed(club?:Club):Promise<any>{
        return new Promise((resolve,reject) => {
            Observable.forkJoin([ //Used to concurrently resolve multiple promises
                Observable.fromPromise(this.getEvents()),
                Observable.fromPromise(this.getClubs()),
                Observable.fromPromise(this.getInterests())
            ]).subscribe(data => {   
                //Applies the visible property to events based on Clubs and Interests
                if(club)
                    var val = this.doCustomFeed(data[0]["events"],data[1],data[2],club)
                else
                    var val = this.doCustomFeed(data[0]["events"],data[1],data[2]);
                resolve(val);
            })
        })
    }
    
    doCustomFeed(events:any[], clubs:Club[], interests:Interest[], club?:Club):any{
        var result:Object = {};
        //Sorting by time
        events.sort(function(a,b){
            return Date.parse(a.start_date_time) - Date.parse(b.start_date_time)
        })
        //Applying visible property based on prefs
        for (let event of events){
            var currentTime = new Date().getTime();
            var eventStart = Date.parse(event.start_date_time);
            if(eventStart > currentTime - 60*60*24*30 && (!club || clubs[event.club_id].name == club.name)) { //Ignore events that are more than a month old
                var eventDateKey:string = this.generateDateKey(event.start_date_time);
                event.visible = false; //initially
                event.timeframe = "";
                event.basedOn = "";

                //Filtering by prefs
                if (clubs[event.club_id].selected)
                    event.visible = true; //Set to true if club selected
                // else{
                //     for(let tag of event.tags){
                //         for (let interest of interests){
                //             if (tag == interest.name && interest.selected){
                //                 event.visible = true;
                //                 event.basedOn = tag; //"Based on your interest in:..."
                //             }    
                //         }
                //     }
                // }

                //Checking timeframe
                if (eventStart < currentTime) 
                    event.timeframe = "past";
                else if (eventStart >= currentTime && eventStart <= currentTime + 60*60*24*7) 
                    event.timeframe = "this week";
                else 
                    event.timeframe = "upcoming";

                if(!result.hasOwnProperty(eventDateKey)){ //Does an entry exist for this key?
                    var dividerVal = this.getLongDate(new Date(event.start_date_time));
                    result[eventDateKey] = {divider:dividerVal, events:[]} 
                }
                result[eventDateKey].events.push(event);
            }
        }
        return result;
    }
    
    generateDateKey(date:string):string{
        return (new Date(date).getDate().toString() + "-" + new Date(date).getMonth().toString() + "-" + new Date(date).getFullYear().toString()).toString();
    }

    getLongDate(date:Date):string{
        var days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
        var months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
        var result:string = days[date.getDay()] + ", " + months[date.getMonth()] + " " + date.getDate() + ", " + date.getFullYear();
        return result;
    }

    getClubs():Promise<any>{
        return new Promise((resolve,reject) => {
            this.cache.getItem('clubs','clubs.json',60*60*24) 
            .then(res => {
                this.clubs = res;
                resolve(this.clubs);
            }).catch(err => reject(err));
        })
    }
    getInterests():Promise<any>{
        return new Promise((resolve,reject) => {
            this.cache.getItem('interests','app_interests.php',60*60*24)
            .then(res => {
                this.interests = res;
                resolve(this.interests);
            }).catch(err => reject(err));
        })
    }
    getDiscountSponsors():Promise<any>{
        return new Promise((resolve,reject) => {
            this.cache.getItem('discount-sponsors','discount_partners.json',60*60*24)
            .then(res => {
                this.discountSponsors = res;
                resolve(res);
            }).catch(err => reject(err));
        })
    }
}