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
    this.userData = null;
    this.storage.clear();
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
}