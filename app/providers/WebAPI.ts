import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { ClubEvent } from '../models/club-event';
import { Club } from '../models/club';
import 'rxjs/add/operator/map';
 
@Injectable()
export class WebAPI {
  data:any;
  clubData: any;
 
  constructor(private http: Http) {
    this.data = null;
    this.clubData = [{
        name:"Richard"
    }]
  }
 
  getClubs(){
      return this.clubData;
  }
 
  getEvents() {
    if (this.data) {
      return Promise.resolve(this.data);
    }
    return new Promise(resolve => {
      this.http.get('https://lazsoc.ca/app_info.php')
        .map(res => res.json())
        .subscribe(data => {
          this.data = data;
          resolve(this.data);
        });
    });
  }
}