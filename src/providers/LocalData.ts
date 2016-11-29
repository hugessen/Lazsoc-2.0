import { Injectable } from '@angular/core';
import { CacheService } from '../providers/CacheService';
import { LocalStorage } from '../providers/LocalStorage';
import { Observable } from 'rxjs/Rx';

declare var RRule: any; 

//Custom classes
import { ClubEvent } from '../models/club-event';
import { Club } from '../models/club'; //Club object. All objects stored in the 'models' folder
import { Interest } from '../models/interest';
import { Prefs } from '../models/prefs';

var STALE_TIME = 14;
const AHEAD_TIME = 14;

@Injectable()
export class LocalData {
    public events: any;
    public discountSponsors: any;
    private prefs:Prefs;
    public cache: CacheService;
    
    // public exportedEvents;

    constructor(public cacheService: CacheService, private localStorage:LocalStorage){
        this.cache = cacheService; 
        this.prefs = {clubPrefs:{},interestPrefs:{}};
    }
    
    //Remember to fix this to pull from API after
    getCustomFeed(club?:Club):Promise<any>{
        return new Promise((resolve,reject) => {
            Observable.forkJoin([ //Used to concurrently resolve multiple promises
                Observable.fromPromise(this.getEvents()),
                Observable.fromPromise(this.getClubs()),
                Observable.fromPromise(this.getInterests()),
                Observable.fromPromise(this.getPrefs())
            ]).subscribe(data => {
                var events = data[0].events;
                var clubs = data[1];
                var interests = this.getInterestsLocally();
                var exportedEvents:Array<Object>;
                //Turn recurring events into a list of regular events
                var recurring = this.parseRecurringEvents(data[0].recurring_events);
                //Add recurring events to event list
                for (let r_event of recurring)
                    events.push(r_event);

                //Applies the visible property to events based on Clubs and Interests
                if(data[3] != null)
                    this.prefs = data[3];
                clubs = this.transformClubs(clubs);
                this.localStorage.set('prefs',this.prefs);
                if(club)
                    var val = this.doCustomFeed(events,clubs,interests,this.prefs,club)
                else
                    var val = this.doCustomFeed(events,clubs,interests,this.prefs)
                resolve(val);
            })
        })
    }
    
    doCustomFeed(events:any[], clubs:any, interests:Interest[], prefs:Prefs,club?:Club):any{
        var result:Object = {};
        //Sorting by time
        events.sort(function(a,b){
            return Date.parse(a.start_date_time) - Date.parse(b.start_date_time)
        })
        if(club)
            STALE_TIME = 0;
        //Applying visible property based on prefs
        for (let event of events){
            var currentTime = new Date().getTime();
            var eventStart = Date.parse(event.start_date_time);
            if(eventStart > currentTime - 60*60*24*1000*STALE_TIME && (!club || clubs[event.club_id.toString()].name == club.name)) { //Ignore events that are older than the stale time
                var eventDateKey:string = this.generateDateKey(event.start_date_time);
                event.visible = false; //initially
                event.timeframe = "";
                event.basedOn = "";

                //Filtering by prefs
                if (prefs.clubPrefs.hasOwnProperty(event.club_id.toString()) && prefs.clubPrefs[event.club_id.toString()].selected == true)
                    event.visible = true; //Set to true if club selected
                else{
                    for(let tag of event.event_tags){
                        if(prefs.interestPrefs.hasOwnProperty(tag.tag) && prefs.interestPrefs[tag.tag].selected){
                            event.visible = true;
                            event.basedOn = tag.tag;
                        }  
                    }
                }

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

    parseRecurringEvents(recurring_events:any[]):any[]{
        var event_list = [];
        var now = new Date();
        var past = new Date();
        past.setDate(past.getDate() - STALE_TIME);
        var ahead = new Date();
        ahead.setDate(ahead.getDate() + AHEAD_TIME);
        for (let event of recurring_events){
            var duration = (Date.parse(event.end_date_time) - Date.parse(event.start_date_time));
            if(event.hasOwnProperty('is_recurring') && event.is_recurring){
                var rule = new RRule({
                    freq:RRule.WEEKLY,
                    interval: event.recurring_event.repeat_every,
                    byweekday: this.getByWeekday(event),
                    dtstart: new Date(event.start_date_time),
                    until: new Date(event.recurring_event.ends_on)
                });
            }
            //Get all the occurrences between specified dates
            var occurrences = rule.between(now,ahead);
            //So, for now I'm just pushing a singular instance of each event type, the soonest upcoming one
            if(occurrences.length > 0)
                event_list.push(this.createEventInstance(event,new Date(occurrences[0]),duration));
        }
        return event_list;
    }

    //Returns an instance of a recurring event given one of its dates
    createEventInstance(event,date,duration:number):any{
        var new_event = event;
        var startTime = date.toString();
        var endTime = new Date(Date.parse(date) + duration).toString();
        new_event.start_date_time = startTime;
        new_event.end_date_time = endTime;
        return event;
    }

    getByWeekday(event){
        var by_week_day = []
        if (event.recurring_event.monday) {
            by_week_day.push(RRule.MO);
        }
        if (event.recurring_event.tuesday) {
            by_week_day.push(RRule.TU);
        }
        if (event.recurring_event.wednesday) {
            by_week_day.push(RRule.WE);
        }
        if (event.recurring_event.thursday) {
            by_week_day.push(RRule.TH);
        }
        if (event.recurring_event.friday) {
            by_week_day.push(RRule.FR);
        }
        if (event.recurring_event.saturday) {
            by_week_day.push(RRule.SA);
        }
        if (event.recurring_event.sunday) {
            by_week_day.push(RRule.SU);
        }
        return by_week_day;
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
                resolve(res.cacheVal);
            }).catch(err => reject(err));
        })
    }
    
    getPrefs():Promise<any>{
        return new Promise((resolve,reject) => {
            this.localStorage.get('prefs')
            .then(res => {
                resolve(JSON.parse(res));
            }).catch(err => reject(err));
        })
    }

    getClubs(doTransform?:boolean):Promise<any>{
        return new Promise((resolve,reject) => {
            this.cache.getItem('clubs','clubs.json',60*60*24)

            .then(res => {
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
    getExportedEvents(){
        return new Promise((resolve,reject) => {
            this.localStorage.get('exported-events')
            .then(res => {
                resolve(JSON.parse(res));
            }).catch(err => reject(err));
        })
    }
    getInterestsLocally(){
        return JSON.parse(`[
    {
        "id": 0,
        "name": "Accounting"
    },
    {
        "id": 1,
        "name": "Finance"
    },
    {
        "id": 2,
        "name": "Competitions"
    },
    {
        "id": 3,
        "name": "Exam Review"
    },
    {
        "id": 4,
        "name": "Debate"
    },
    {
        "id": 5,
        "name": "Networking"
    },
    {
        "id": 6,
        "name": "Academic Help"
    },
    {
        "id": 7,
        "name": "E-Business"
    },
    {
        "id": 8,
        "name": "Economics"
    },
    {
        "id": 9,
        "name": "Entrepreneurship"
    },
    {
        "id": 10,
        "name": "First Year"
    },
    {
        "id": 11,
        "name": "International"
    },
    {
        "id": 12,
        "name": "Journalism and Media"
    },
    {
        "id": 13,
        "name": "Leadership"
    },
    {
        "id": 14,
        "name": "Marketing"
    },
    {
        "id": 15,
        "name": "Public Speaking"
    },
    {
        "id": 16,
        "name": "Sales"
    },
    {
        "id": 17,
        "name": "Philanthropy"
    },
    {
        "id": 18,
        "name": "Sports Management"
    },
    {
        "id": 19,
        "name": "Consulting"
    },
    {
        "id": 20,
        "name": "Social"
    }
    ]`);
    }
}
