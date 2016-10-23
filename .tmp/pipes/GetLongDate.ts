import {Pipe} from '@angular/core';
 
@Pipe({
  name: 'getLongDate'
})
export class GetLongDate {
  transform(dateStr:string, args) {
    var date = new Date(dateStr);
    var days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    var months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
    var hour = (date.getHours() == 12) ? 12:date.getHours()%12;
    let minutes = (date.getMinutes() < 10) ? date.getMinutes() + "0" : date.getMinutes();
    let ampm = (date.getHours()<12) ? "AM":"PM";
    var result:string = days[date.getDay()] + ", " + months[date.getMonth()] + " " + date.getDate() + ", " + date.getFullYear() + " " + hour + ":" + minutes + " " + ampm;
    return result;
  }
}