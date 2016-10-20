import { Injectable } from '@angular/core';
import {Storage} from '@ionic/Storage';
import 'rxjs/add/operator/map';
 
@Injectable()
export class LocalStorage {
 
  constructor(private storage:Storage) {  
  }
 
  get(key:string):Promise<{}> {
    return new Promise((resolve,reject) => {
      this.storage.get(key).then(result => {
        if(typeof result !== 'undefined')
          resolve(result);
        else resolve({});
      })
      .catch(err => reject(err));
    })
  }
  set(key:string,val:any):Promise<any>{
    return this.storage.set(key,val)
  }
}