import { Injectable } from '@angular/core';
import {Storage} from '@ionic/Storage';
import { UserData } from '../models/UserData';
import 'rxjs/add/operator/map';
 
@Injectable()
export class LocalStorage {
  events:any[];
  clubs: any[];
  interests: any;
  discount_partners: any[];
  userData:UserData;
  constructor(private storage:Storage) {  
    this.init();
    this.userData = {
        personalInfo:{firstname:"", lastname:"", email:"", studyYear:0, program:""},
        clubPrefs:{},
        interestPrefs:{}
    };
    for(let club of this.clubs){
        this.userData.clubPrefs[club.id.toString()] = {club_id:club.id, selected:false}
    }   
    for (let interest of this.interests){
        this.userData.interestPrefs[interest.id.toString()] = {interest_id:interest.id, selected:false}
    }
    this.set('app-events',this.events);
    this.set('app-clubs',this.clubs);
    // this.set('app-interests',this.interests);
    // this.set('app-discount',this.discount_partners);
    // this.set('userdata', this.userData);
  }
 
  get(key:string):Promise<string> {
    return new Promise((resolve,reject) => {
      this.storage.get(key).then(result => {
        if(typeof result !== 'undefined'){
          console.log('key',key,'resolved');
          resolve(result);
        }
        else resolve({});
      })
      .catch(err => reject(err));
    })
  }
  set(key:string,obj:any):Promise<any>{
    console.log("Saving key:", key ,"in storage.");
    var value = JSON.stringify(obj);
    return this.storage.set(key,value)
  }

  init(){
    this.events = JSON.parse(`[
   {
      "id":3,
      "title":"LAA Co-op Dinner",
      "sub_heading":"LAA Co-op Dinner",
      "location":"Crowne Plaza, Kitchener ON",
      "banner":null,
      "club_id":4,
      "facebook_event_link":"",
      "event_description":"Our flagship event, the LAA Co-op Dinner is a large, formal dinner and networking session with top recruiters from the nations leading accounting firms, employers and our partners. The Co-op dinner allows students to formally network with key industry professionals prior to the primary CPA Co-op recruiting period and build their contact network within the accounting industry. This event is highly recommended for students interested in pursuing a career in accounting. Ticket required for attendance.",
      "start_date_time":"2016-11-15T17:30:00.000Z",
      "end_date_time":"2016-11-15T21:30:00.000Z",
      "is_recurring":false,
      "created_at":"2016-10-17T00:24:53.000Z",
      "updated_at":"2016-10-17T00:24:53.000Z",
      "app_thumbnail":null,
      "event_tags":[
         {
            "id":5,
            "event_id":3,
            "tag":"Accounting"
         },
         {
            "id":6,
            "event_id":3,
            "tag":"Networking"
         }
      ]
   },
   {
      "id":8,
      "title":"BU111 Math Help Session",
      "sub_heading":"",
      "location":"BA111 Bricker Academic",
      "banner":null,
      "club_id":6,
      "facebook_event_link":"",
      "event_description":"This event is tailored for any student taking BU111 who is in need of help with the quantitative material prior to the final exam. This event will entail guided help by students who have successfully completed this course. There will be a thorough review of quantitative material through a provided mock midterm as well as going through questions from the students' lab manuals, with time for additional questions to be answered if need be. The objective for this event is to ensure all students have sound knowledge of the quantitative material weeks before their final exam.",
      "start_date_time":"2016-11-22T19:30:00.000Z",
      "end_date_time":"2016-11-22T21:00:00.000Z",
      "is_recurring":false,
      "created_at":"2016-10-17T00:24:53.000Z",
      "updated_at":"2016-10-17T00:24:53.000Z",
      "app_thumbnail":null,
      "event_tags":[
         {
            "id":13,
            "event_id":8,
            "tag":"Exam Review"
         },
         {
            "id":14,
            "event_id":8,
            "tag":"First Year"
         }
      ]
   },
   {
      "id":9,
      "title":"Case Competition",
      "sub_heading":"",
      "location":"Lazaridis Building",
      "banner":null,
      "club_id":6,
      "facebook_event_link":"",
      "event_description":"XLerate Laurier's Annual Case Conference is a career-changing first year experience. Create a group of 4 people and come visit the XLerate booth to register your team. Every team will be receiving a case and presenting their solution in front of judges. This is a great way to develop your case analysis skills and expand your network, which are both essential for getting into co-op. It's a perfect highlight for any resume or LinkedIn page! This event is open to all first year SBE students. Food and drink is provided!",
      "start_date_time":"2017-01-28T09:00:00.000Z",
      "end_date_time":"2017-01-28T17:00:00.000Z",
      "is_recurring":false,
      "created_at":"2016-10-17T00:24:53.000Z",
      "updated_at":"2016-10-17T00:24:53.000Z",
      "app_thumbnail":null,
      "event_tags":[
         {
            "id":15,
            "event_id":9,
            "tag":"Competitions"
         },
         {
            "id":16,
            "event_id":9,
            "tag":"First Year"
         }
      ]
   },
   {
      "id":10,
      "title":"New Venture Pitch Critique",
      "sub_heading":"",
      "location":"BA102 Bricker Academic",
      "banner":null,
      "club_id":6,
      "facebook_event_link":"",
      "event_description":"This event is for students who wish to pitch their New Venture product to past winners of this project, as well as to students who have been highly successful. They can practice their pitch in an environment where they will receive feedback and constructive criticism in order to ultimately become better at pitch delivery and learn a skill that will become an asset in the business world. The main purpose of this event is to make students more confident and comfortable making pitches in front of people, while improving their skills to ultimately lead to higher success in this project.",
      "start_date_time":"2017-02-04T18:00:00.000Z",
      "end_date_time":"2017-02-04T20:30:00.000Z",
      "is_recurring":false,
      "created_at":"2016-10-17T00:24:53.000Z",
      "updated_at":"2016-10-17T00:24:53.000Z",
      "app_thumbnail":null,
      "event_tags":[
         {
            "id":17,
            "event_id":10,
            "tag":"Public Speaking"
         },
         {
            "id":18,
            "event_id":10,
            "tag":"Academic Help"
         },
         {
            "id":19,
            "event_id":10,
            "tag":"First Year"
         }
      ]
   },
   {
      "id":11,
      "title":"BU121 Quiz Bowl",
      "sub_heading":"",
      "location":"BA102 Bricker Academic",
      "banner":null,
      "club_id":6,
      "facebook_event_link":"",
      "event_description":"This event is perfect for first year students who want a thorough review of all BU121 material before their exam. Upper year students will be guiding the group through a mock exam, providing extra help with both quantitative and qualitative material. There will be tips and tricks given on how to get full marks on long answer and math questions, as well as how to best tackle multiple choice questions. Overall, this event is essential for all first year business students before their BU121 exam!",
      "start_date_time":"2017-02-17T19:30:00.000Z",
      "end_date_time":"2017-02-17T21:30:00.000Z",
      "is_recurring":false,
      "created_at":"2016-10-17T00:24:53.000Z",
      "updated_at":"2016-10-17T00:24:53.000Z",
      "app_thumbnail":null,
      "event_tags":[
         {
            "id":20,
            "event_id":11,
            "tag":"First Year"
         },
         {
            "id":21,
            "event_id":11,
            "tag":"Academic Help"
         },
         {
            "id":22,
            "event_id":11,
            "tag":"Exam Review"
         }
      ]
   },
   {
      "id":12,
      "title":"BU121 Math Help Session",
      "sub_heading":"",
      "location":"BA111 Bricker Academic",
      "banner":null,
      "club_id":6,
      "facebook_event_link":"",
      "event_description":"This guided help session will ultimately improve students' abilities with the quantitative portions of BU121, leading to more success on the final exam. This session will reiterate material learned in lecture and will give students the opportunity to try out questions, while being able to get their questions answered by students who have successfully completed this course in the past. The main purpose of this event is to aid students' learning weeks before the final exam to ensure their success.",
      "start_date_time":"2017-03-29T19:30:00.000Z",
      "end_date_time":"2017-03-29T21:30:00.000Z",
      "is_recurring":false,
      "created_at":"2016-10-17T00:24:53.000Z",
      "updated_at":"2016-10-17T00:24:53.000Z",
      "app_thumbnail":null,
      "event_tags":[
         {
            "id":23,
            "event_id":12,
            "tag":"First Year"
         },
         {
            "id":24,
            "event_id":12,
            "tag":"Academic Help"
         },
         {
            "id":25,
            "event_id":12,
            "tag":"Exam Review"
         }
      ]
   },
   {
      "id":14,
      "title":"New Venture Critique",
      "sub_heading":"",
      "location":"Senate and Board Chamber",
      "banner":null,
      "club_id":6,
      "facebook_event_link":"",
      "event_description":"This event entails New Venture groups discussing their potential product/service ideas to upper year students, as well as going into depth about the feasibility of these ideas. Emphasis will be put on ensuring groups are choosing ventures that are achievable and will allow them to succeed with this competition. Going through a wide variety of ideas with upper year students will help the groups with brainstorming doable ventures as well as giving them the opportunity to gain critical tips and insight on how to succeed in this project.",
      "start_date_time":"2016-10-05T19:00:00.000Z",
      "end_date_time":"2016-10-05T21:00:00.000Z",
      "is_recurring":false,
      "created_at":"2016-10-17T00:24:53.000Z",
      "updated_at":"2016-10-17T00:24:53.000Z",
      "app_thumbnail":null,
      "event_tags":[
         {
            "id":27,
            "event_id":14,
            "tag":"Academic Help"
         },
         {
            "id":28,
            "event_id":14,
            "tag":"First Year"
         }
      ]
   },
   {
      "id":15,
      "title":"Personal Branding Workshop",
      "sub_heading":"",
      "location":"Paul Martin Centre",
      "banner":null,
      "club_id":6,
      "facebook_event_link":"",
      "event_description":"Do you want to find out how to create your own personal brand? Or do you think it's time to finally set up that LinkedIn account you hear upper years talking about all the time? XLerate Laurier is holding a Personal Branding Workshop that can help you take advantage of these tools.",
      "start_date_time":"2016-10-19T19:00:00.000Z",
      "end_date_time":"2016-10-19T21:00:00.000Z",
      "is_recurring":false,
      "created_at":"2016-10-17T00:24:53.000Z",
      "updated_at":"2016-10-17T00:24:53.000Z",
      "app_thumbnail":null,
      "event_tags":[
         {
            "id":29,
            "event_id":15,
            "tag":"Marketing"
         }
      ]
   },
   {
      "id":16,
      "title":"BU 111 Quizbowl",
      "sub_heading":"",
      "location":"BA 201",
      "banner":null,
      "club_id":6,
      "facebook_event_link":"",
      "event_description":"This event is for any student taking BU111 who seeks a thorough review of both quantitative and qualitative material of the course. The objective of this event is to aid with students' studies and provide them with new opportunities for learning. Students will get a mock exam covering material from lecture and an upper year student will guide them through it, providing them with tips on the best way to answer questions and get full credit on them. In addition, there will be practice with multiple choice questions with tips on how to best approach them. The main objective here is to give students time to ask questions and try a mock exam before their midterm or final exam.",
      "start_date_time":"2016-10-26T19:00:00.000Z",
      "end_date_time":"2016-10-26T21:00:00.000Z",
      "is_recurring":false,
      "created_at":"2016-10-17T00:24:53.000Z",
      "updated_at":"2016-10-17T00:24:53.000Z",
      "app_thumbnail":null,
      "event_tags":[
         {
            "id":30,
            "event_id":16,
            "tag":"Exam Review"
         },
         {
            "id":31,
            "event_id":16,
            "tag":"First Year"
         },
         {
            "id":32,
            "event_id":16,
            "tag":"Academic Help"
         }
      ]
   },
   {
      "id":18,
      "title":"Golden Talk: A Startup Networking Event",
      "sub_heading":"",
      "location":"KPMG Atrium",
      "banner":null,
      "club_id":23,
      "facebook_event_link":"",
      "event_description":"If you want to hear insight from the teams of some great startups and organizations (including Communitech, Chillabit and Gymnatik) and learn the crucial skills to effectively pitch and network with organizations to land great opportunities, this is the event for you! Come out to the KPMG Atrium today at 7 to join Startup Laurier and Golden Speakers Club to improve your professional skills while having fun doing it! and if none of that is appealing we have free pizza so come anyways. Hope to see you all there!",
      "start_date_time":"2016-09-27T19:00:00.000Z",
      "end_date_time":"2016-09-27T20:20:00.000Z",
      "is_recurring":false,
      "created_at":"2016-10-17T00:24:53.000Z",
      "updated_at":"2016-10-17T00:24:53.000Z",
      "app_thumbnail":null,
      "event_tags":[
         {
            "id":34,
            "event_id":18,
            "tag":"Public Speaking"
         }
      ]
   },
   {
      "id":19,
      "title":"Public Speaking Boot Camp",
      "sub_heading":"",
      "location":"Paul Martin Centre",
      "banner":null,
      "club_id":23,
      "facebook_event_link":"",
      "event_description":"An event completely different from anything on campus! This is the perfect opportunity for you to shape your communication skills through public speaking! Gain some tips from professionals in the field of business and communication and participate in a series of interactive exercises to bring yourself one step closer to acing your presentations at school and building your network! Just ask our successful alumni of the Boot Camp, including: Barack Obama, Oprah Winfrey and Kobe Bryant (note: this may or may not be true).",
      "start_date_time":"2016-10-20T19:00:00.000Z",
      "end_date_time":"2016-10-20T21:00:00.000Z",
      "is_recurring":false,
      "created_at":"2016-10-17T00:24:53.000Z",
      "updated_at":"2016-10-17T00:24:53.000Z",
      "app_thumbnail":null,
      "event_tags":[
         {
            "id":35,
            "event_id":19,
            "tag":"Public Speaking"
         }
      ]
   }
]`);
    this.clubs = JSON.parse(`[
  {
    "id": 2,
    "name": "LazSoc",
    "slug": "lazsoc",
    "club_account_number": 5001,
    "description": "The Lazaridis Students’ Society strives to enhance the student experience of every Lazaridis student by providing opportunities for students to discover and pursue their passions.",
    "shortname": "LazSoc",
    "email": null,
    "website": "http://lazsoc.ca",
    "app_logo": "assets/img/LazSoc.png",
    "app_banner": "assets/img/banners/LazSocBanner.png",
    "club_tags": [
      {
        "id": 64,
        "club_id": 2,
        "tag": "Leadership"
      }
    ],
    "club_social_links": [
      {
        "id": 70,
        "club_id": 2,
        "link_type": "facebook",
        "url": "https://www.facebook.com/LazSoc"
      },
      {
        "id": 71,
        "club_id": 2,
        "link_type": "twitter",
        "url": "https://twitter.com/LazSoc"
      },
      {
        "id": 72,
        "club_id": 2,
        "link_type": "instagram",
        "url": "https://www.instagram.com/LazSoc/"
      },
      {
        "id": 73,
        "club_id": 2,
        "link_type": "youtube",
        "url": "https://www.youtube.com/channel/UC2aZ9l1l4oef2Amf_9IvtUg"
      },
      {
        "id": 74,
        "club_id": 2,
        "link_type": "snapchat",
        "url": "lazsoc"
      }
    ]
  },
  {
    "id": 3,
    "name": "Women In Leadership Laurier",
    "slug": "will",
    "club_account_number": 5002,
    "description": "Women In Leadership Laurier (WILL) is an innovative business club at Wilfrid Laurier University. Our mission focuses on promoting equal opportunity and continuous learning. WILL strives to provide leadership skills, resources, information and support needed to succeed in today’s professional environment. By embracing knowledge from experienced speakers, the Waterloo community and our peers, we encourage growth without any boundaries.",
    "shortname": "WILL",
    "email": null,
    "website": "http://www.willaurier.org",
    "app_logo": "assets/img/WILL.png",
    "app_banner": "assets/img/banners/WILLBanner.png",
    "club_tags": [
      {
        "id": 48,
        "club_id": 3,
        "tag": "Women in Business"
      },
      {
        "id": 49,
        "club_id": 3,
        "tag": "Networking"
      },
      {
        "id": 50,
        "club_id": 3,
        "tag": "Leadership"
      }
    ],
    "club_social_links": [
      {
        "id": 49,
        "club_id": 3,
        "link_type": "facebook",
        "url": "https://www.facebook.com/WomeninLeadershipLaurier/"
      },
      {
        "id": 50,
        "club_id": 3,
        "link_type": "twitter",
        "url": "https://twitter.com/WILLaurier"
      },
      {
        "id": 51,
        "club_id": 3,
        "link_type": "instagram",
        "url": "https://www.instagram.com/willaurier/"
      }
    ]
  },
  {
    "id": 4,
    "name": "Laurier Accounting Association",
    "slug": "laa",
    "club_account_number": 5004,
    "description": "We’re in a unique position – we have the ears of the recruitment departments of top domestic and international accounting firms, and the attention of Laurier business students holding the largest member base of any WLU club. Let us use it to help each individual set and achieve career goals. We’re here to organize events, provide resources, and create connections that result in success and achievement for both sides of the table. Above all, our end goal is to educate Laurier students on the various accounting career paths that are available to them.",
    "shortname": "LAA",
    "email": null,
    "website": "http://laurieraccounting.com",
    "app_logo": "assets/img/LAA.png",
    "app_banner": "assets/img/banners/LAABanner.png",
    "club_tags": [
      {
        "id": 60,
        "club_id": 4,
        "tag": "Accounting"
      },
      {
        "id": 61,
        "club_id": 4,
        "tag": "Finance"
      },
      {
        "id": 62,
        "club_id": 4,
        "tag": "Networking"
      }
    ],
    "club_social_links": [
      {
        "id": 63,
        "club_id": 4,
        "link_type": "facebook",
        "url": "https://www.facebook.com/LaurierAccounting/"
      },
      {
        "id": 64,
        "club_id": 4,
        "link_type": "twitter",
        "url": "https://twitter.com/WLUaccounting"
      },
      {
        "id": 65,
        "club_id": 4,
        "link_type": "instagram",
        "url": "https://www.instagram.com/wluaccounting/"
      }
    ]
  },
  {
    "id": 5,
    "name": "Laurier Investment & Finance Association",
    "slug": "lifa",
    "club_account_number": 5005,
    "description": "Laurier Investment & Finance Association’s (LIFA) mission is to develop, educate and inspire students into exploring the different roles within the finance industry. Our commitment to the Laurier community is to offer valuable opportunities, including unique and instructive events for students to interact, network and learn from today’s industry leaders.",
    "shortname": "LIFA",
    "email": null,
    "website": "http://www.lifawlu.ca",
    "app_logo": "assets/img/LIFA.png",
    "app_banner": "assets/img/banners/LIFABanner.png",
    "club_tags": [
      {
        "id": 31,
        "club_id": 5,
        "tag": "Finance"
      },
      {
        "id": 32,
        "club_id": 5,
        "tag": "Networking"
      },
      {
        "id": 33,
        "club_id": 5,
        "tag": "Capital Markets"
      },
      {
        "id": 34,
        "club_id": 5,
        "tag": "Investing"
      },
      {
        "id": 35,
        "club_id": 5,
        "tag": "Economics"
      }
    ],
    "club_social_links": [
      {
        "id": 38,
        "club_id": 5,
        "link_type": "facebook",
        "url": "https://www.facebook.com/LIFApage/"
      },
      {
        "id": 39,
        "club_id": 5,
        "link_type": "twitter",
        "url": "https://twitter.com/LIFA_wlu"
      }
    ]
  },
  {
    "id": 6,
    "name": "Xlerate",
    "slug": "xlerate",
    "club_account_number": 5006,
    "description": "XLerate is a club run exclusively for first year Laurier Business and Economics students to help ease the transition from high school to university. We aim to help each student maintain a balance of academic success, community involvement and social development; all needed to help you survive and thrive in your first year at Laurier!",
    "shortname": "XLerate",
    "email": null,
    "website": "http://www.xleratewlu.ca",
    "app_logo": "assets/img/XL.png",
    "app_banner": "assets/img/banners/XLBanner.png",
    "club_tags": [
      {
        "id": 41,
        "club_id": 6,
        "tag": "1st Year"
      },
      {
        "id": 42,
        "club_id": 6,
        "tag": "Exam Review"
      },
      {
        "id": 43,
        "club_id": 6,
        "tag": "Case Competitions"
      },
      {
        "id": 44,
        "club_id": 6,
        "tag": "Public Speaking"
      },
      {
        "id": 45,
        "club_id": 6,
        "tag": "Networking"
      }
    ],
    "club_social_links": [
      {
        "id": 46,
        "club_id": 6,
        "link_type": "facebook",
        "url": "https://www.facebook.com/XLerateWLU/"
      }
    ]
  },
  {
    "id": 7,
    "name": "DECA",
    "slug": "deca",
    "club_account_number": 5007,
    "description": "DECA Laurier is a student-run organization that provides students with the essential skills needed to survive and excel in the corporate world. These skills are enhanced in the field of marketing, entrepreneurship, finance and business management through the use of business simulations and case studies. Each year, competitions are held regionally, provincially and internationally to further challenge and engage our members beyond what they think they are capable of, pushing them to exceed expectations and limits. DECA Laurier strives to create a bridge between the knowledge acquired at school and the practical skills needed at the work place. It is an experience that provides a platform for students to learn, compete and succeed in today’s vastly changing environment.",
    "shortname": "DECA",
    "email": null,
    "website": null,
    "app_logo": "assets/img/Deca.png",
    "app_banner": "assets/img/banners/DECABanner.png",
    "club_tags": [
      {
        "id": 11,
        "club_id": 7,
        "tag": "Public Speaking"
      },
      {
        "id": 12,
        "club_id": 7,
        "tag": "Case Competitions"
      },
      {
        "id": 13,
        "club_id": 7,
        "tag": "Networking"
      }
    ],
    "club_social_links": [
      {
        "id": 15,
        "club_id": 7,
        "link_type": "facebook",
        "url": "https://www.facebook.com/decalaurier"
      },
      {
        "id": 16,
        "club_id": 7,
        "link_type": "twitter",
        "url": "https://twitter.com/decalaurier"
      },
      {
        "id": 17,
        "club_id": 7,
        "link_type": "youtube",
        "url": "https://www.youtube.com/user/DecaLaurier"
      },
      {
        "id": 18,
        "club_id": 7,
        "link_type": "instagram",
        "url": "https://www.instagram.com/deca_laurier/"
      }
    ]
  },
  {
    "id": 9,
    "name": "Laurier Consulting Club",
    "slug": "lcc",
    "club_account_number": 5009,
    "description": "Since 2009, the Laurier Consulting Club has continued to grow both in membership numbers as well as in quality – here’s how:We operate with the intentions of improving the knowledge and technical skills of the students of SBE at Wilfrid Laurier University. Through our two portfolios – engagement and the Laurier Consulting Program (LCP) we aim to provide unique and tangible opportunities that can help students grow on a professional level making them able to compete in the consulting landscape. Through ‘Engagement’, we offer workshops, networking events, info sessions and a large-scale case competition to allow for learning about the industry, learning techniques that can be used to get hired, and finally, case practice – an industry essential. The ‘Laurier Consulting Program’ is unique to LCC and seamlessly complements our engagement portfolio by allowing students to deploy what they have learned at our events in real consulting engagements setup and managed by our executive team.",
    "shortname": "LCC",
    "email": null,
    "website": "http://www.laurierconsulting.ca",
    "app_logo": "assets/img/LCC.png",
    "app_banner": "assets/img/banners/LCCBanner.png",
    "club_tags": [
      {
        "id": 4,
        "club_id": 9,
        "tag": "Consulting"
      },
      {
        "id": 5,
        "club_id": 9,
        "tag": "Networking"
      }
    ],
    "club_social_links": [
      {
        "id": 5,
        "club_id": 9,
        "link_type": "facebook",
        "url": "http://www.facebook.com/LaurierConsultingClub"
      },
      {
        "id": 6,
        "club_id": 9,
        "link_type": "twitter",
        "url": "https://twitter.com/wluconsulting"
      },
      {
        "id": 7,
        "club_id": 9,
        "link_type": "instagram",
        "url": "https://www.instagram.com/laurierconsulting/"
      }
    ]
  },
  {
    "id": 10,
    "name": "Laurier Economics Club",
    "slug": "lec",
    "club_account_number": 5010,
    "description": "The Laurier Economics Club (LEC) is Laurier’s only economics-focused club on campus. Our goal is to provide resources to students who are interested in the field of economics. Through our speaker engagements, mock midterm sessions, and our annual conference, we expose our members to a diverse range of economic knowledge and experience. We strive to enhance each member’s academic journey while providing them with tools to help them realize their full potential and value in a degree/minor in economics.",
    "shortname": "LEC",
    "email": null,
    "website": "http://lauriereconomics.club",
    "app_logo": "assets/img/LEC.png",
    "app_banner": "assets/img/banners/LECBanner.png",
    "club_tags": [
      {
        "id": 21,
        "club_id": 10,
        "tag": "Economics"
      },
      {
        "id": 22,
        "club_id": 10,
        "tag": "Mock Midterm"
      },
      {
        "id": 23,
        "club_id": 10,
        "tag": "Networking"
      }
    ],
    "club_social_links": [
      {
        "id": 28,
        "club_id": 10,
        "link_type": "facebook",
        "url": "https://www.facebook.com/LaurierEconClub/"
      },
      {
        "id": 29,
        "club_id": 10,
        "link_type": "twitter",
        "url": "https://twitter.com/laurierecon"
      },
      {
        "id": 30,
        "club_id": 10,
        "link_type": "youtube",
        "url": "https://www.youtube.com/channel/UCN1p50AHX2Hj-pMD7PHZhsA"
      }
    ]
  },
  {
    "id": 11,
    "name": "Laurier Marketing Association",
    "slug": "lma",
    "club_account_number": 5011,
    "description": "The Laurier Marketing Association is a student organization dedicated to undergraduates interested in marketing. We’ve teamed up with the best resources Wilfrid Laurier has to offer: world-renowned faculty, successful alumni, industry leaders, and recruiters from the world’s top companies. You may want to know if marketing is right for you, or you may already be on your way into the real marketing world. Either way, we’ll help you get your head start. Ultimately, our mission is to help our members attain the level of marketing experience they desire by providing comprehensive resources that span the academic, professional, and social faces of marketing.",
    "shortname": "LMA",
    "email": "president@lauriermarketing.com",
    "website": "http://lauriermarketing.com",
    "app_logo": "assets/img/LMA.png",
    "app_banner": "assets/img/banners/LMABanner.png",
    "club_tags": [
      {
        "id": 1,
        "club_id": 11,
        "tag": "Marketing"
      },
      {
        "id": 2,
        "club_id": 11,
        "tag": "Networking"
      },
      {
        "id": 3,
        "club_id": 11,
        "tag": "Case Competitions"
      }
    ],
    "club_social_links": [
      {
        "id": 1,
        "club_id": 11,
        "link_type": "facebook",
        "url": "https://www.facebook.com/lauriermarketing/"
      },
      {
        "id": 2,
        "club_id": 11,
        "link_type": "twitter",
        "url": "https://twitter.com/wlumarketing"
      },
      {
        "id": 3,
        "club_id": 11,
        "link_type": "youtube",
        "url": "https://www.youtube.com/user/LaurierMarketing"
      },
      {
        "id": 4,
        "club_id": 11,
        "link_type": "instagram",
        "url": "https://www.instagram.com/wlumarketing/"
      }
    ]
  },
  {
    "id": 12,
    "name": "The Link",
    "slug": "the_link",
    "club_account_number": 5013,
    "description": "The Link’s mission is dedicated to connecting past, present and future students within Wilfrid Laurier University’s School of Business and Economics, the community and internationally by promoting leadership and networking opportunities in a professional manner. The Link strives to create an environment where students can grow on an academic, professional and personal level. Since its establishment in April 2002, The Link has provided Wilfrid Laurier Business & Economics students the chance to connect and network with future students, past students, and university faculty. Our first event was The Leadership in Business Conference, which allowed university students to teach high school students business skills in a friendly yet competitive environment. Today, The Link has grown into a diverse and unique business organization, which carries forth the values of leadership, networking and development. The Link executive team consists of creative, energetic and innovative individuals who strive to be a positive influence in their school, community, and international business world.",
    "shortname": "The Link",
    "email": null,
    "website": "http://thelinkonline.org/update/",
    "app_logo": "assets/img/Link.png",
    "app_banner": "assets/img/banners/LinkBanner.png",
    "club_tags": [
      {
        "id": 55,
        "club_id": 12,
        "tag": "Networking"
      },
      {
        "id": 56,
        "club_id": 12,
        "tag": "International"
      },
      {
        "id": 57,
        "club_id": 12,
        "tag": "Leadership"
      }
    ],
    "club_social_links": [
      {
        "id": 56,
        "club_id": 12,
        "link_type": "facebook",
        "url": "https://www.facebook.com/TheLinkWLU/"
      },
      {
        "id": 57,
        "club_id": 12,
        "link_type": "twitter",
        "url": "https://twitter.com/thelinkwlu"
      },
      {
        "id": 58,
        "club_id": 12,
        "link_type": "instagram",
        "url": "https://www.instagram.com/thelinkwlu/"
      },
      {
        "id": 59,
        "club_id": 12,
        "link_type": "youtube",
        "url": "https://www.youtube.com/channel/UC8xLVjBN2FPqj5VIdJfs05g"
      }
    ]
  },
  {
    "id": 13,
    "name": "AIESEC",
    "slug": "aiesec",
    "club_account_number": 5014,
    "description": "AIESEC is the world’s largest student run organization present in over 128 countries and 2800 universities. AIESEC is focused on leadership development through the facilitation of international exchange. We provide students opportunities to develop themselves personally and professionally through our various programs such as campus involvement and exchange. AIESEC has the ability to send Laurier students on exchange to different countries for various internships and provide an incredible international experience.",
    "shortname": "AIESEC",
    "email": null,
    "website": "http://aiesec.ca",
    "app_logo": "assets/img/Aiesec.png",
    "app_banner": "assets/img/banners/AIESECBanner.png",
    "club_tags": [
      {
        "id": 17,
        "club_id": 13,
        "tag": "International"
      }
    ],
    "club_social_links": [
      {
        "id": 20,
        "club_id": 13,
        "link_type": "facebook",
        "url": "https://www.facebook.com/AIESECLaurier/"
      },
      {
        "id": 21,
        "club_id": 13,
        "link_type": "twitter",
        "url": "https://twitter.com/aieseclaurier"
      },
      {
        "id": 22,
        "club_id": 13,
        "link_type": "youtube",
        "url": "https://www.youtube.com/channel/UCKJqaocNZ_RpR7hWjyfAyvg"
      },
      {
        "id": 23,
        "club_id": 13,
        "link_type": "instagram",
        "url": "https://www.instagram.com/aieseclaurier/"
      }
    ]
  },
  {
    "id": 14,
    "name": "Atrium Media Group",
    "slug": "amg",
    "club_account_number": 5015,
    "description": "The Atrium Media Group is a dynamic and innovative media organization that provides rewarding opportunities for students to showcase their creativity and talent through various initiatives including; the trademark Atrium Magazine that is published thrice a year, the new multi-functional blog featuring articles and editorials not found in our magazine, and the rapidly growing Atrium Photography/Videography Team. AMG has been a part of SBE’s history for over 20 years, during which it has aimed to represent the students of SBE by bringing light to the current issues, concerns, and interests of our community.",
    "shortname": "AMG",
    "email": null,
    "website": "http://sbeatrium.com",
    "app_logo": "assets/img/AMG.png",
    "app_banner": "assets/img/banners/AMGBanner.png",
    "club_tags": [
      {
        "id": 18,
        "club_id": 14,
        "tag": "Marketing"
      },
      {
        "id": 19,
        "club_id": 14,
        "tag": "Media"
      },
      {
        "id": 20,
        "club_id": 14,
        "tag": "Journalism"
      }
    ],
    "club_social_links": [
      {
        "id": 24,
        "club_id": 14,
        "link_type": "facebook",
        "url": "https://www.facebook.com/sbeatrium"
      },
      {
        "id": 25,
        "club_id": 14,
        "link_type": "twitter",
        "url": "https://twitter.com/sbeatrium"
      },
      {
        "id": 26,
        "club_id": 14,
        "link_type": "youtube",
        "url": "https://www.youtube.com/channel/UCiBLuhg1VXPn-UtGikIBKWA"
      },
      {
        "id": 27,
        "club_id": 14,
        "link_type": "instagram",
        "url": "https://www.instagram.com/sbeatrium/"
      }
    ]
  },
  {
    "id": 15,
    "name": "Students Offering Support",
    "slug": "sos",
    "club_account_number": 5018,
    "description": "Students Offering Support is a national network of student volunteers who offer comprehensive Exam-AID review sessions right before midterms and finals to raise money for sustainable education projects in Latin America. Students who attend the session donate $20 to review the course content with a senior student who has taken the course before. After the session, students are ready to ace the exam! The money raised funds our outreach trips, which take groups of students to countries such as Costa Rica, Peru, and Nicaragua to contribute to the construction projects that SOS is funding.",
    "shortname": "SOS",
    "email": null,
    "website": "http://laurier.soscampus.com/index.php?lm_slug=lm_index",
    "app_logo": "assets/img/SOS.png",
    "app_banner": "assets/img/banners/SOSBanner.png",
    "club_tags": [
      {
        "id": 51,
        "club_id": 15,
        "tag": "International"
      },
      {
        "id": 52,
        "club_id": 15,
        "tag": "Exam Review"
      },
      {
        "id": 53,
        "club_id": 15,
        "tag": "Tutoring"
      },
      {
        "id": 54,
        "club_id": 15,
        "tag": "Social Enterprise"
      }
    ],
    "club_social_links": [
      {
        "id": 52,
        "club_id": 15,
        "link_type": "facebook",
        "url": "https://www.facebook.com/lauriersos"
      },
      {
        "id": 53,
        "club_id": 15,
        "link_type": "twitter",
        "url": "https://twitter.com/LaurierSOS"
      },
      {
        "id": 54,
        "club_id": 15,
        "link_type": "instagram",
        "url": "https://www.instagram.com/studentsofferingsupport/"
      },
      {
        "id": 55,
        "club_id": 15,
        "link_type": "youtube",
        "url": "https://www.youtube.com/channel/UCSv4Sn_Xun59ecixQcM8qNA"
      }
    ]
  },
  {
    "id": 16,
    "name": "WLU Debate",
    "slug": "wlu_debate",
    "club_account_number": 5019,
    "description": "The WLU Debating Society is Laurier’s Waterloo campus debate club. We hold meetings weekly and attend tournaments regularly. To join, all you have to do is participate by coming out to our meetings! You do not need any previous debating experience, and are welcomed to attend any time throughout the year. At our meetings, an experienced member of the club will give a brief debating lesson, and you will be able to participate in practice rounds.",
    "shortname": "WLU Debate",
    "email": null,
    "website": "http://www.wludebating.com",
    "app_logo": "assets/img/Debate.png",
    "app_banner": "assets/img/banners/DebateBanner.png",
    "club_tags": [
      {
        "id": 46,
        "club_id": 16,
        "tag": "Public Speaking"
      },
      {
        "id": 47,
        "club_id": 16,
        "tag": "Debate"
      }
    ],
    "club_social_links": [
      {
        "id": 47,
        "club_id": 16,
        "link_type": "facebook",
        "url": "https://www.facebook.com/WLUdebating/"
      },
      {
        "id": 48,
        "club_id": 16,
        "link_type": "twitter",
        "url": "https://twitter.com/wludebating"
      }
    ]
  },
  {
    "id": 17,
    "name": "Enactus",
    "slug": "enactus",
    "club_account_number": 5020,
    "description": "Enactus is a non-profit global organization dedicated to inspiring students to improve the world through entrepreneurial action. There are over 1700 university programs running Enactus in 36 countries, with over 70,500 participating students and building 550 partnerships with corporate organizations and individuals. We provide a platform for teams of outstanding university and college students to create community development projects that put people’s own ingenuity and talents at the centre of improving their livelihoods. Guided by educators and supported by business leaders, our students take the kind of entrepreneurial approach that empowers people to be a part of their own success. Our work transforms both the lives of the people we serve, and in turn, the lives of our students as they develop into more effective, values-driven leaders.An annual series of Regional and National Competitions provides a forum for teams to showcase the impact of their outreach efforts and to be evaluated by executives serving as judges. National champion teams advance to the prestigious Enactus World Cup to experience excellence in competition, collaboration, and celebration.",
    "shortname": "Enactus",
    "email": null,
    "website": "http://enactuslaurier.ca",
    "app_logo": "assets/img/Enactus.png",
    "app_banner": "assets/img/banners/EnactusBanner.png",
    "club_tags": [
      {
        "id": 9,
        "club_id": 17,
        "tag": "Entrepreneurship"
      },
      {
        "id": 10,
        "club_id": 17,
        "tag": "Social Change"
      }
    ],
    "club_social_links": [
      {
        "id": 12,
        "club_id": 17,
        "link_type": "facebook",
        "url": "https://www.facebook.com/enactuswlu"
      },
      {
        "id": 13,
        "club_id": 17,
        "link_type": "twitter",
        "url": "https://twitter.com/enactuslaurier"
      },
      {
        "id": 14,
        "club_id": 17,
        "link_type": "instagram",
        "url": "https://www.instagram.com/enactuslaurier/"
      }
    ]
  },
  {
    "id": 18,
    "name": "Sports Management Laurier",
    "slug": "sml",
    "club_account_number": 5021,
    "description": "Sports Management Laurier (SML) provides students the chance to connect with prominent professionals in the sports management industry. SML makes it possible for individuals to pursue their dream career within the Brand, Agency, and Broadcast sectors of the industry. SMLs flagship events include a speaker series and various social events with industry professionals. SML has a proud partnership with TSN.",
    "shortname": "SML",
    "email": null,
    "website": "http://www.smlaurier.com",
    "app_logo": "assets/img/SML.png",
    "app_banner": "assets/img/banners/SMLBanner.png",
    "club_tags": [
      {
        "id": 28,
        "club_id": 18,
        "tag": "Marketing"
      },
      {
        "id": 29,
        "club_id": 18,
        "tag": "Sports Management"
      },
      {
        "id": 30,
        "club_id": 18,
        "tag": "Networking"
      }
    ],
    "club_social_links": [
      {
        "id": 35,
        "club_id": 18,
        "link_type": "facebook",
        "url": "https://www.facebook.com/smlaurier/"
      },
      {
        "id": 36,
        "club_id": 18,
        "link_type": "twitter",
        "url": "https://twitter.com/smlaurier"
      },
      {
        "id": 37,
        "club_id": 18,
        "link_type": "instagram",
        "url": "https://www.instagram.com/smlaurier/"
      }
    ]
  },
  {
    "id": 19,
    "name": "Startup Laurier",
    "slug": "startup",
    "club_account_number": 5022,
    "description": "Startups and Waterloo are two words that fit perfectly together. Startup Laurier (formerly know as the Laurier Innovation and Technology Club) brings that entrepreneurial culture to campus. Our events, programs, and initiatives are meant to empower Laurier students to explore and pursue their entrepreneurial ambitions. Whether it be starting your own business, working for a startup, growing a skill, or wanting to learn more about Kitchener-Waterloo’s entrepreneurship community, we provide students with the resources and connections to make it happen.",
    "shortname": "Startup",
    "email": null,
    "website": "http://www.startuplaurier.com",
    "app_logo": "assets/img/SL.png",
    "app_banner": "assets/img/banners/StartupBanner.png",
    "club_tags": [
      {
        "id": 24,
        "club_id": 19,
        "tag": "Entrepreneurship"
      },
      {
        "id": 25,
        "club_id": 19,
        "tag": "Startups"
      },
      {
        "id": 26,
        "club_id": 19,
        "tag": "Technology"
      },
      {
        "id": 27,
        "club_id": 19,
        "tag": "Networking"
      }
    ],
    "club_social_links": [
      {
        "id": 31,
        "club_id": 19,
        "link_type": "facebook",
        "url": "https://www.facebook.com/startuplaurier/"
      },
      {
        "id": 32,
        "club_id": 19,
        "link_type": "twitter",
        "url": "https://twitter.com/startuplaurier"
      },
      {
        "id": 33,
        "club_id": 19,
        "link_type": "youtube",
        "url": "https://www.youtube.com/channel/UCrMbYqEUQNVcMuj1w6jY0kQ"
      },
      {
        "id": 34,
        "club_id": 19,
        "link_type": "instagram",
        "url": "https://www.instagram.com/startuplaurier/"
      }
    ]
  },
  {
    "id": 20,
    "name": "Laurier Sales Association",
    "slug": "lsa",
    "club_account_number": 5023,
    "description": "The key to success in ANY business career is simple: increase your sales skills. No matter what your role is, selling is part of your job. Sales is not about manipulating or pressuring your client, it is about effectively communicating the benefits and logic behind a decision. Most importantly, it is about selling YOURSELF. The Laurier Sales Association prides itself in being one of Canada’s first and only clubs focused entirely on sales. We work with our sponsors to provide a hands-on- approach through workshops, sales competitions and networking events. Join us today to learn more about careers in sales and enhance the skill set to excel in any profession.",
    "shortname": "LSA",
    "email": null,
    "website": "http://www.lauriersales.com",
    "app_logo": "assets/img/LSA.png",
    "app_banner": "assets/img/banners/LSABanner.png",
    "club_tags": [
      {
        "id": 36,
        "club_id": 20,
        "tag": "Sales"
      },
      {
        "id": 37,
        "club_id": 20,
        "tag": "Public Speaking"
      },
      {
        "id": 38,
        "club_id": 20,
        "tag": "Marketing"
      }
    ],
    "club_social_links": [
      {
        "id": 40,
        "club_id": 20,
        "link_type": "facebook",
        "url": "https://www.facebook.com/LaurierSales/"
      },
      {
        "id": 41,
        "club_id": 20,
        "link_type": "twitter",
        "url": "https://twitter.com/lauriersales"
      },
      {
        "id": 42,
        "club_id": 20,
        "link_type": "instagram",
        "url": "https://www.instagram.com/lauriersalesassociation/"
      }
    ]
  },
  {
    "id": 21,
    "name": "Technology Management Laurier",
    "slug": "tml",
    "club_account_number": 5024,
    "description": "Technology Management Laurier (TML) connects students to the growing global technology sector. Technology Management Laurier strives to provide each member with the opportunity to succeed in the technology sector, or enhance their business-tech abilities. From insights into the industry from technical and corporate perspectives, to partnered events with local tech incubators like the Communitech Hub, we empower innovation. As Laurier’s only tech-business club, TML has grown rapidly since its inception by issuing improved member services in the form of a Speaker Series with large-scale technology companies, tech-incubator tours, networking opportunities and the Consumer Electronic Demo. Additionally, TML has assisted local businesses and startups through its Consultech (Consulting Division), and continues to provide technological implementation services (Social Media, Web Development, and much more). Most recently, Tech-Management Laurier has also partnered with the Laurier Startup Fund course to further develop the Consultech division.",
    "shortname": "TML",
    "email": null,
    "website": "http://www.lauriertech.com",
    "app_logo": "assets/img/TML.png",
    "app_banner": "assets/img/banners/TMLBanner.png",
    "club_tags": [
      {
        "id": 58,
        "club_id": 21,
        "tag": "Technology"
      },
      {
        "id": 59,
        "club_id": 21,
        "tag": "Networking"
      }
    ],
    "club_social_links": [
      {
        "id": 60,
        "club_id": 21,
        "link_type": "facebook",
        "url": "https://www.facebook.com/EBusinessLaurier/"
      },
      {
        "id": 61,
        "club_id": 21,
        "link_type": "twitter",
        "url": "https://twitter.com/LaurierTech_"
      },
      {
        "id": 62,
        "club_id": 21,
        "link_type": "instagram",
        "url": "https://www.instagram.com/lauriertech/"
      }
    ]
  },
  {
    "id": 22,
    "name": "The Advertising Project",
    "slug": "tap",
    "club_account_number": 5027,
    "description": "The Advertising Project is dedicated to providing eye-catching, dynamic advertising for local enterprises and not-for-profits through digital and print media to help businesses soar above the competition. All advertising is created and designed by students looking to gain experience in the industry as graphic designers, copywriters, and account executives.",
    "shortname": "TAP",
    "email": null,
    "website": "http://www.theadvertisingproject.com",
    "app_logo": "assets/img/TAP.png",
    "app_banner": "assets/img/banners/TAPBanner.png",
    "club_tags": [
      {
        "id": 14,
        "club_id": 22,
        "tag": "Advertising"
      },
      {
        "id": 15,
        "club_id": 22,
        "tag": "Marketing"
      },
      {
        "id": 16,
        "club_id": 22,
        "tag": "Case Competitions"
      }
    ],
    "club_social_links": [
      {
        "id": 19,
        "club_id": 22,
        "link_type": "facebook",
        "url": "https://www.facebook.com/theadvertisingproject"
      }
    ]
  },
  {
    "id": 23,
    "name": "Golden Speakers Club",
    "slug": "gsc",
    "club_account_number": 5028,
    "description": "The Golden Speakers Club was created to change the way students think about and perform when Public Speaking. The Golden Speakers Club’s flagship event is the Public Speaking Competition in which students can put their public speaking abilities to the test in front of a panel of judges.",
    "shortname": "GSC",
    "email": null,
    "website": "http://www.goldenspeakersclub.com",
    "app_logo": "assets/img/GoldenSpeakers.png",
    "app_banner": "assets/img/banners/GSBanner.png",
    "club_tags": [
      {
        "id": 6,
        "club_id": 23,
        "tag": "Public Speaking"
      },
      {
        "id": 7,
        "club_id": 23,
        "tag": "First Year"
      },
      {
        "id": 8,
        "club_id": 23,
        "tag": "Networking"
      }
    ],
    "club_social_links": [
      {
        "id": 8,
        "club_id": 23,
        "link_type": "facebook",
        "url": "https://www.facebook.com/goldenspeakersclub"
      },
      {
        "id": 9,
        "club_id": 23,
        "link_type": "twitter",
        "url": "https://twitter.com/speakgolden"
      },
      {
        "id": 10,
        "club_id": 23,
        "link_type": "youtube",
        "url": "https://www.youtube.com/channel/UCx6vgUGFfx1haFRmxdQ3G6Q"
      },
      {
        "id": 11,
        "club_id": 23,
        "link_type": "instagram",
        "url": "https://www.instagram.com/goldenspeakers/"
      }
    ]
  },
  {
    "id": 24,
    "name": "JDCC",
    "slug": "jdcc",
    "club_account_number": 5029,
    "description": "JDC Central is a team-based, academic case study competition that will attract more than 500 of the brightest students in Eastern Canada to participate in the most prestigious event of its kind. JDC competitors participate in rigorous academic case simulations, a debate competition, athletic, social, and spirit events throughout a fast-paced and competitive weekend. JDC Laurier’s pride, dedication, and wealth of superior talent has resulted in seven straight championships in seven years of competition.",
    "shortname": "JDCC",
    "email": null,
    "website": null,
    "app_logo": "assets/img/JDCC.png",
    "app_banner": "assets/img/banners/JDCCBanner.png",
    "club_tags": [
      {
        "id": 39,
        "club_id": 24,
        "tag": "Public Speaking"
      },
      {
        "id": 40,
        "club_id": 24,
        "tag": "Case Competitions"
      }
    ],
    "club_social_links": [
      {
        "id": 43,
        "club_id": 24,
        "link_type": "facebook",
        "url": "https://www.facebook.com/JDCCLaurier/"
      },
      {
        "id": 44,
        "club_id": 24,
        "link_type": "twitter",
        "url": "https://twitter.com/jdcclaurier"
      },
      {
        "id": 45,
        "club_id": 24,
        "link_type": "instagram",
        "url": "https://www.instagram.com/jdcclaurier/"
      }
    ]
  },
  {
    "id": 25,
    "name": "5 Days",
    "slug": "5_days",
    "club_account_number": 2030,
    "description": "5 Days for the Homeless is a national charity that is run annually by the Lazaridis School of Business and Economics. This campaign raises money and awareness for two youth shelters in the Kitchener/Waterloo area. Each campaign, five Laurier students give up basic luxuries and live outside on campus with only a sleeping bag and the clothes on their backs.",
    "shortname": "5 Days",
    "email": null,
    "website": "http://5days.ca/schools/wilfrid-laurier-university/",
    "app_logo": "assets/img/5days.png",
    "app_banner": "assets/img/banners/5DaysBanner.png",
    "club_tags": [
      {
        "id": 63,
        "club_id": 25,
        "tag": "Social Change"
      }
    ],
    "club_social_links": [
      {
        "id": 66,
        "club_id": 25,
        "link_type": "facebook",
        "url": "https://www.facebook.com/5DaysLaurier"
      },
      {
        "id": 67,
        "club_id": 25,
        "link_type": "twitter",
        "url": "https://twitter.com/5DAYSLAURIER"
      },
      {
        "id": 68,
        "club_id": 25,
        "link_type": "instagram",
        "url": "https://www.instagram.com/5dayslaurier/"
      },
      {
        "id": 69,
        "club_id": 25,
        "link_type": "youtube",
        "url": "https://www.youtube.com/channel/UCKGPVYRibnlDM5uUxuydP0g"
      }
    ]
  }
]`);
    this.interests = JSON.parse(`[
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
   this.discount_partners = JSON.parse(`[{"id":1,"name":"Quick Sandwiches","logo":"assets/img/discount_program/Quick_Sandwiches_Logo.png","discount":"-10% Storewide","created_at":"2016-10-03T18:42:57.000Z","updated_at":"2016-10-03T18:42:57.000Z"},{"id":2,"name":"Shoeless Joes","logo":"assets/img/discount_program/Shoeless_Joes_Logo.png","discount":"-25% Food with the Purchase of a Drink","created_at":"2016-10-03T18:42:57.000Z","updated_at":"2016-10-03T18:42:57.000Z"},{"id":3,"name":"Caliburger","logo":"assets/img/discount_program/Caliburger_Logo.png","discount":"-10% Storewide","created_at":"2016-10-03T18:42:57.000Z","updated_at":"2016-10-03T18:42:57.000Z"},{"id":4,"name":"Holy Guacamole","logo":"assets/img/discount_program/Holy_Guacamole_Logo.png","discount":"Free Upgrade to a Large Burrito","created_at":"2016-10-03T18:42:57.000Z","updated_at":"2016-10-03T18:42:57.000Z"},{"id":5,"name":"Noon Moment","logo":"assets/img/discount_program/Noon_Moment_Logo.png","discount":"-10% Storewide","created_at":"2016-10-03T18:42:57.000Z","updated_at":"2016-10-03T18:42:57.000Z"},{"id":6,"name":"Sweet Dreams Teashop","logo":"assets/img/discount_program/Sweet_Dreams_Logo.png","discount":"-10% Storewide","created_at":"2016-10-03T18:42:57.000Z","updated_at":"2016-10-03T18:42:57.000Z"},{"id":7,"name":"Menchies","logo":"assets/img/discount_program/Menchies_Logo.png","discount":"-10% Storewide","created_at":"2016-10-03T18:42:57.000Z","updated_at":"2016-10-03T18:42:57.000Z"},{"id":8,"name":"Wordsworth Books","logo":"assets/img/discount_program/Words_Worth_Books_Logo.png","discount":"-10% Storewide","created_at":"2016-10-03T18:42:57.000Z","updated_at":"2016-10-03T18:42:57.000Z"},{"id":9,"name":"Staples","logo":"assets/img/discount_program/Staples_Logo.png","discount":"-20% Copy and Print Services using Business Discount #8152349448","created_at":"2016-10-03T18:42:57.000Z","updated_at":"2016-10-03T18:43:52.000Z"},{"id":10,"name":"Harmony by Earthwinds","logo":"assets/img/discount_program/Harmony_Logo.png","discount":"-10% off Regular Priced Items In-Store","created_at":"2016-10-03T18:42:57.000Z","updated_at":"2016-10-03T18:42:57.000Z"},{"id":11,"name":"KW Pilates","logo":"assets/img/discount_program/KW_Pilates_Logo.png","discount":"-10% Discount off Regular Priced Classes","created_at":"2016-10-03T18:42:57.000Z","updated_at":"2016-10-03T18:42:57.000Z"},{"id":12,"name":"The Truth Beauty Company","logo":"assets/img/discount_program/TTBC_Logo.png","discount":"-10% Discount at Waterloo and Guelph Locations","created_at":"2016-10-03T18:42:57.000Z","updated_at":"2016-10-03T18:42:57.000Z"},{"id":13,"name":"Capri Salon","logo":"assets/img/discount_program/Capri_Salon_Logo.png","discount":"-10% Off Products and Salon Services Tuesday through Thursday with select Stylists","created_at":"2016-10-03T18:42:57.000Z","updated_at":"2016-10-03T18:42:57.000Z"},{"id":14,"name":"Huether Hotel","logo":"assets/img/discount_program/Huether_Hotel_Logo.png","discount":"-10% Storewide","created_at":"2016-10-03T18:42:57.000Z","updated_at":"2016-10-03T18:42:57.000Z"},{"id":15,"name":"Live Switchboard","logo":"assets/img/discount_program/LSI_Logo.png","discount":"-20% off of Mailbox and Laptop Rentals, -10% off of Tutoring, Driving School, Computer and Cellphone Repair, Printing, Translation, and Editing Services, -5% off of Courier Services (Domestic and International) and Store Items (Accessories and Stationary","created_at":"2016-10-03T18:46:34.000Z","updated_at":"2016-10-11T06:07:41.000Z"},{"id":16,"name":"KW Empanadas Inc","logo":"assets/img/discount_program/KWEmp_Logo.png","discount":"-10% off all products using promo code LAZARIDIS","created_at":"2016-10-03T18:46:55.000Z","updated_at":"2016-10-11T06:07:59.000Z"}]`);
  }
}