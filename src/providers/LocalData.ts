import { Injectable } from '@angular/core';
import { CacheService } from '../providers/CacheService';
import { LocalStorage } from '../providers/LocalStorage';
import { Observable } from 'rxjs/Rx';

declare var RRule: any;

//Custom classes
import { Club } from '../models/club'; //Club object. All objects stored in the 'models' folder
import { Event_Tag } from '../models/event_tag';
import { Prefs } from '../models/prefs';

const STALE_TIME = 14;
const AHEAD_TIME = 14;

@Injectable()
export class LocalData {
    public events: any;
    public cache: CacheService;

    // public exportedEvents;

    constructor(public cacheService: CacheService, private localStorage:LocalStorage){
        this.cache = cacheService;
    }

    //Remember to fix this to pull from API after
    getCustomFeed(club?:Club):Promise<any>{
        return new Promise((resolve,reject) => {
            Observable.forkJoin([ //Used to concurrently resolve multiple promises
                Observable.fromPromise(this.getEvents()),
                Observable.fromPromise(this.getClubs()),
                Observable.fromPromise(this.getPrefs())
            ]).subscribe(data => {
                this.getArticles();
                // console.log("events", data[0]); //Events and recurring events
                var events = data[0].events;//data[0].events;
                var clubs = data[1];
                var prefs = (data[2] != null) ? data[2] : {clubPrefs:{}, interestPrefs:{}};
                clubs = this.transformClubs(clubs);

                //Handle Recurring Events
                var recurring = this.parseRecurringEvents(data[0].recurring_events);
                for (let r_event of recurring)
                    events.push(r_event);
                if(club)
                    var val = this.generateCustomFeed(events,clubs,prefs,club)
                else
                    var val = this.generateCustomFeed(events,clubs,prefs)
                resolve(val);
            })
        })
    }

    generateCustomFeed(events:any[], clubs:any, prefs:Prefs,club?:Club):any{
        var result = { past:{}, thisweek:{}, upcoming:{} }
        //Sorting by time
        events.sort(function(a,b){
            return Date.parse(a.start_date_time) - Date.parse(b.start_date_time)
        })
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
                    for(let event_tag of event.event_tags){
                        if(prefs.interestPrefs.hasOwnProperty(event_tag) && prefs.interestPrefs[event_tag].selected){
                            event.visible = true;
                            event.basedOn = event_tag;
                        }
                    }
                }

                //Checking timeframe
                if (eventStart < currentTime)
                    event.timeframe = "past";
                else if (eventStart >= currentTime && eventStart <= currentTime + 60*60*24*7*1000)
                    event.timeframe = "thisweek";
                else
                    event.timeframe = "upcoming";

                if(!result[event.timeframe].hasOwnProperty(eventDateKey)){ //Does an entry exist for this key?
                    var dividerVal = this.getLongDate(new Date(event.start_date_time));
                    result[event.timeframe][eventDateKey] = {divider:dividerVal, events:[], visible:false}
                }
                if (event.visible)
                    result[event.timeframe][eventDateKey].visible = true; //So we know whether to show the divider
                result[event.timeframe][eventDateKey].events.push(event);
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

    //Generates the hashkey for getting events by day. Used for dividers in the newsfeed
    generateDateKey(date:string):string{
        return (new Date(date).getDate().toString() + "-" + new Date(date).getMonth().toString() + "-" + new Date(date).getFullYear().toString()).toString();
    }

    //The divider text for the newsfeed
    getLongDate(date:Date):string{
        var days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
        var months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
        var result:string = days[date.getDay()] + ", " + months[date.getMonth()] + " " + date.getDate() + ", " + date.getFullYear();
        return result;
    }

    //Turns clubs from an array into a hash table, and turns their social links into hash tables similarly.
    transformClubs(clubs:any[]):Object{
        var result:Object = {};
        for (let club of clubs){
            club.club_social_links = this.formatSocialLinks(club.club_social_links);
            result[club.id.toString()] = club;
        }
        return result;
    }

    //Turns the clubs's social links into a hash table for easy access. Much easier to manipulate than an array.
    formatSocialLinks(socialLinks:any[]):Object{
        var result:Object = {};
        for (let link of socialLinks){
            result[link.link_type] = link.url;
        }
        return result;
    }

    //Only used locally. Returns raw event data from the server
    getEvents():Promise<any>{
        return new Promise((resolve,reject) => {
            this.cache.getItem('events','events.json',60*20) //Cache for 20 mins
            .then(res => {
                resolve(res.cacheVal);
            }).catch(err => reject(err));
        })
    }

    // Grab articles
    getArticles(): Promise<any> {
        return new Promise((resolve, reject) => {
            this.cache.getItem('articles', 'get_articles', 60*20) //Cache for 20 mins
                .then(res => {
                    console.log("Camila Cabello is bae");
                    resolve(res.cacheVal);
                    console.log(JSON.stringify(res, null, 2));
                }).catch(err => reject(err));
        })
    }

    //Returns user's locally stored preferences
    getPrefs():Promise<any>{
        return new Promise((resolve,reject) => {
            this.localStorage.get('prefs')
            .then(res => {
                resolve(JSON.parse(res));
            }).catch(err => reject(err));
        })
    }

    //Gets clubs from the server. Cache expires after 24 hours
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

    getTags():Promise<any>{
        return new Promise((resolve,reject) => {
            this.cache.getItem('tags','event_tags.json',60*60*24)
            .then(res => {
                resolve(res.cacheVal);
            }).catch(err => reject(err));
        })
    }
    getDiscountSponsors():Promise<any>{
        return new Promise((resolve,reject) => {
            this.cache.getItem('discount-sponsors','discount_partners.json',60*60*12)
            .then(res => {
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

    getDummyEvents(){
        return JSON.parse(`
            {
              "events": [
                {
                  "id": 82,
                  "title": "Orientation Day 2016",
                  "sub_heading": "The must-attend event for all first-years",
                  "location": "Bingemans",
                  "banner": "assets/img/O-Day.jpg",
                  "club_id": 2,
                  "facebook_event_link": "",
                  "event_description": "Welcome Class of 2020 to the Lazaridis Students' Society's Orientation Day 2016! You aren't the only one nervous about what the Lazaridis business experience is going to throw at you. Check out the information below to find out how you can be one step further into ensuring your future success as a student here at Laurier! Orientation Day (O-Day) 2016 is an exclusive orientation event for incoming Business & Economics first year students planned by the Lazaridis Students' Society. This event gives students more information about what Laurier Business and Economics has to offer and the resources available, as well as networking with other first year students and upper year mentors. MORNING SESSIONS Attend sessions that will answer your most important questions about succeeding as a business student. From various specializations, to potential career designations, to even learning about how to survive your first year at Laurier; you will learn from your designated CEO (upper year student group leader) that will meet with you in the morning. LUNCH & KEYNOTE SPEECH Enjoy a three course lunch and a keynote speech from our distinguished guest speaker. This year's keynote speaker is: Michael Hamilton, Senior-Vice President of RBC Insurance. Don't worry, this is the first of many events highlighting food you'll see at Laurier. LAZSOC CLUBS FAIR & MERCHANDISE SALE Attend the LazSoc Clubs Fair and meet representatives from our 22 Clubs & Associations, all of which are looking to hire first year students! Have the chance to chat with student leaders, professors, and corporate sponsors. The earlier you get involved, the better! These club representatives are here to help you get started. Be one of the first people to grab exclusive products from our Class of 2020 merchandise and apparel line at http://shop.lazsoc.ca! FIRST YEAR HANDBOOK Need advice on getting set up at Laurier? Looking for academic resources? Or even wondering about the social life at Laurier? Check out our exclusive First Year Handbook for ALL Laurier students at http://fyh.lazsoc.ca! Online ticket sales end September 5th at http://oday.lazsoc.ca! Tickets can be purchased in-person on Sunday September 4/5th, in the Athletic Complex during move-in.",
                  "start_date_time": "2017-05-30T08:00:00.000Z",
                  "end_date_time": "2017-05-30T10:00:00.000Z",
                  "is_recurring": false,
                  "created_at": "2017-05-27T20:22:37.000Z",
                  "updated_at": "2017-05-27T20:53:56.000Z",
                  "app_thumbnail": "",
                  "event_tags": []
                },
                {
                  "id": 81,
                  "title": "Year End Gala 2017 | A Night at the Oscars",
                  "sub_heading": "Come enjoy a night of celebration and awards to celebrate all the accomplishments of student volunteers",
                  "location": "Crowne Plaza Kitchener",
                  "banner": "http://i.imgur.com/OT0Wq5p.png",
                  "club_id": 2,
                  "facebook_event_link": "https://www.facebook.com/events/1847071392235374/",
                  "event_description": "It's a brisk spring evening. Flashes of bright lights fill the atmosphere as stars dressed in glamour and extravagance make their way down the red carpet. Dozens of camera flashes go off as you celebrate the night away with your friends. You are cordially invited to the fourth annual Year End Gala on March 24th! This year's Year End Gala theme is... A Night at the Oscars! At this black tie themed spectacle you will enjoy a three-course meal, two complimentary drink tickets, an awards ceremony, and a dance to end off the night and celebrate the year's successes. Year End Gala focuses on the accomplishments of our Clubs & Associations. Their efforts, dedication, and commitment will be recognized at the award ceremony; and celebrate the achievements of our student volunteers! Tickets: http://yeg.lazsoc.ca/ Sale ends on March 19th at 11:59PM",
                  "start_date_time": "2017-05-30T08:00:00.000Z",
                  "end_date_time": "2017-05-30T10:00:00.000Z",
                  "is_recurring": false,
                  "created_at": "2017-05-27T20:22:37.000Z",
                  "updated_at": "2017-05-27T20:53:56.000Z",
                  "app_thumbnail": "",
                  "event_tags": []
                },
                {
                  "id": 80,
                  "title": "EC290 Mock Midterm 1",
                  "sub_heading": "Need that extra help before writing your midterm? Come write LEC's mock midterm!",
                  "location": "SBE1250",
                  "banner": "",
                  "club_id": 10,
                  "facebook_event_link": "https://www.facebook.com/events/1847071392235374/",
                  "event_description": "Need that extra help before writing your midterm? Come write LEC's mock midterm! The mock midterms are written to be an accurate representation of the midterm your professor will test you on. After the test, student tutors who have taken and excelled in the course will work with the class, take up the midterm, and answer any other questions you have!",
                  "start_date_time": "2017-05-31T15:00:00.000Z",
                  "end_date_time": "2017-05-31T18:00:00.000Z",
                  "is_recurring": false,
                  "created_at": "2017-05-27T20:22:37.000Z",
                  "updated_at": "2017-05-27T20:53:56.000Z",
                  "app_thumbnail": "",
                  "event_tags": ["Exam Review","Economics"]
                },
                                {
                  "id": 79,
                  "title": "Startup Consulting Case Competition",
                  "sub_heading": "LCC: Laurier Consulting Club and Startup Laurier are excited to announce our fourth annual Startup Consulting Case Competition!",
                  "location": "67 Erb Street West",
                  "banner": "assets/img/Startup Consulting.jpg",
                  "club_id": 19,
                  "facebook_event_link": "https://www.facebook.com/events/1847071392235374/",
                  "event_description": "Have you ever wondered what it’s like working in a startup? Are you eager to prove your entrepreneurial skills as well as consulting capabilities? If you answered yes to any of those questions, then this is the event for you! In teams of four, you will tackle a case and present your innovative new ideas to a panel of judges composed of Canada’s brightest entrepreneurs whose startups need YOUR help! Aim high and you could have a chance to win some great prizes (TBA) as well connecting with up-and-coming startups.",
                  "start_date_time": "2017-06-08T08:00:00.000Z",
                  "end_date_time": "2017-06-08T10:00:00.000Z",
                  "is_recurring": false,
                  "created_at": "2017-05-27T20:22:37.000Z",
                  "updated_at": "2017-05-27T20:53:56.000Z",
                  "app_thumbnail": "",
                  "event_tags": []
                }
              ],
              "recurring_events": []
            }
        `)
    }
}
