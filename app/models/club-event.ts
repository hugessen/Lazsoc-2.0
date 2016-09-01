import { Club } from './club';

export class ClubEvent{
    id:number;
    title:string;
    startTime:string;
    endTime:string;
    location:string;
    tagline:string;
    club:Club;
    banner:string;
    desc: string;
}