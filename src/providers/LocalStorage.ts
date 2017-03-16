import { Injectable } from '@angular/core';
import {Storage} from '@ionic/storage';
import { UserData } from '../models/userdata';

import 'rxjs/add/operator/map';
 
@Injectable()
export class LocalStorage {
  interests: any;
  discount_partners: any[];
  userData:UserData;
  constructor(private storage:Storage) {  
    this.init();
    this.userData = null;
    // this.storage.clear();
    // this.set('app-interests',this.interests);
    // this.set('app-discount',this.discount_partners);
    // this.storage.remove('userdata');
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
  }
}