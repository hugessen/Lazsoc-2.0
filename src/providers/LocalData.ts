import { Injectable } from '@angular/core';
import { CacheService } from '../providers/CacheService';
import { LocalStorage } from '../providers/LocalStorage';
import { Observable } from 'rxjs/Rx';
import { RRule } from 'rrule/lib/rrule';
import * as nlpjs from 'rrule/lib/nlp';


//Custom classes
import { ClubEvent } from '../models/club-event';
import { Club } from '../models/club'; //Club object. All objects stored in the 'models' folder
import { Interest } from '../models/interest';
import { UserData } from '../models/userdata';

@Injectable()
export class LocalData {
    public events: any;
    public discountSponsors: any;
    private userData:UserData;
    public cache: CacheService;

    constructor(public cacheService: CacheService, private localStorage:LocalStorage){
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
    //Remember to fix this to pull from API after
    getCustomFeed(club?:Club):Promise<any>{
        return new Promise((resolve,reject) => {
            Observable.forkJoin([ //Used to concurrently resolve multiple promises
                Observable.fromPromise(this.getEvents()),
                Observable.fromPromise(this.getClubs()),
                Observable.fromPromise(this.getInterests()),
                Observable.fromPromise(this.getUserInfo())
            ]).subscribe(data => {
                var events = data[0]; //Remember to delete these
                var clubs = data[1];
                var interests = data[2];
                console.log(clubs);
                //Applies the visible property to events based on Clubs and Interests
                if(data[3] != null) 
                    this.userData = data[3];
                else{
                    this.userData = {
                        personalInfo:{firstname:"", lastname:"", email:"", studyYear:0, program:""},
                        clubPrefs:{},
                        interestPrefs:{}
                    };
                    for(let club of clubs){
                        this.userData.clubPrefs[club.id.toString()] = {club_id:club.id, selected:false}
                    }   
                    for (let interest of interests){
                        this.userData.interestPrefs[interest.name] = {interest_id:interest.id, selected:false}
                    }
                }
                if(club)
                    var val = this.doCustomFeed(events,clubs,interests,this.userData,club)
                else
                    var val = this.doCustomFeed(events,clubs,interests,this.userData)
                resolve(val);
            })
        })
    }
    
    doCustomFeed(events:any[], clubs:Club[], interests:Interest[], userData:UserData, club?:Club):any{
        console.log(userData);
        var result:Object = {};
        //Sorting by time
        events.sort(function(a,b){
            return Date.parse(a.start_date_time) - Date.parse(b.start_date_time)
        })
        //Applying visible property based on prefs
        for (let event of events){
            var currentTime = new Date().getTime();
            var eventStart = Date.parse(event.start_date_time);
            if(eventStart > currentTime - 60*60*24*30 && (!club || clubs[event.club_id.toString()].name == club.name)) { //Ignore events that are more than a month old
                var eventDateKey:string = this.generateDateKey(event.start_date_time);
                event.visible = false; //initially
                event.timeframe = "";
                event.basedOn = "";

                //Filtering by prefs
                if (userData.clubPrefs[event.club_id.toString()].selected == true)
                    event.visible = true; //Set to true if club selected
                // else{
                //     for(let tag of event.tags){
                //         for (let interest of interests){
                //             if (tag == interest.name && interest[tag]){
                //                 event.visible = true;
                //                 event.basedOn = tag; //"Based on your interest in:..."
                //             }    
                //         }
                //     }
                // }

                //Checking timeframe
                if (eventStart < currentTime)   
                    event.timeframe = "past";
                else if (eventStart >= currentTime && eventStart <= currentTime + 60*60*24*7*1000)
                    event.timeframe = "this week";
                else 
                    event.timeframe = "upcoming";

                if(!result.hasOwnProperty(eventDateKey)){ //Does an entry exist for this key?
                    var dividerVal = this.getLongDate(new Date(event.start_date_time));
                    result[eventDateKey] = {divider:dividerVal, events:[], visible:false} 
                }
                if (event.visible)
                    result[eventDateKey].visible = true; //So we know whether to show the divider
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

    transformClubs(clubs:any[]):Object{
        var result:Object = {};
        for (let club of clubs){
            club.club_social_links = this.formatSocialLinks(club.club_social_links);
            result[club.id.toString()] = club;
        }
        return result;
    }

    formatSocialLinks(socialLinks:any[]):Object{
        var result:Object = {};
        for (let link of socialLinks){
            result[link.link_type] = link.url;
        }
        return result;
    }
    getEvents():Promise<any>{
        return new Promise((resolve,reject) => {
            this.cache.getItem('events','events.json',60*20) //Cache for 20 mins
            .then(res => {
                console.log("getting events works");
                resolve(res.cacheVal["events"]);
            }).catch(err => reject(err));
        })
    }
    
    getUserInfo():Promise<any>{
        return new Promise((resolve,reject) => {
            this.localStorage.get('userdata')
            .then(res => {
                resolve(JSON.parse(res));
            }).catch(err => reject(err));
        })
    }

    getClubs(doTransform?:boolean):Promise<any>{
        return new Promise((resolve,reject) => {
            this.cache.getItem('clubs','clubs.json',60*60*24)

            .then(res => {
                console.log("Getting clubs works");
                if(doTransform)
                    resolve(this.transformClubs(res.cacheVal));
                else
                    resolve(res.cacheVal);
            }).catch(err => reject(err));
        })
    }
    getInterests():Promise<any>{
        return new Promise((resolve,reject) => {
            this.localStorage.get('app-interests') 
            .then(res => {
                console.log("Getting interests works");
                resolve(JSON.parse(res));
            }).catch(err => reject(err));
        })
        // return new Promise((resolve,reject) => {
        //     this.cache.getItem('interests','app_interests.php',60*60*24)
        //     .then(res => {
        //         resolve(res);
        //     }).catch(err => reject(err));
        // })
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