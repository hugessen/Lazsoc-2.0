import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { ClubEvent } from '../models/club-event';
import 'rxjs/add/operator/map';
 
@Injectable()
export class WebAPI {
  data: any;
 
  constructor(private http: Http) {
    this.data = null;
  }
 
  getAPIData() {
    if (this.data) {
      return Promise.resolve(this.data);
    }
 
    return new Promise(resolve => {
      this.http.get('https://lazsoc.ca/app_info.php')
        .map(res => res.json())
        .subscribe(data => {
          this.data = data.results;
          resolve(this.data);
        });
    });
  }
  
  //Richard's manually inputted clubs
  events: ClubEvent[] = [
    {id: 0, title:'BU111 Workshop', club: "SOS", desc:'BU111 Desc'},
    {id: 1, title:'EC140 Workshop', club: "LEC", desc:'EC140 Desc'}
  ];
  
  getEvents(): ClubEvent[]{
    return this.events;
  }
}