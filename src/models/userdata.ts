export class UserData{
    personalInfo:{
        firstname:string;
        lastname:string;
        email:string;
        studyYear:number;
        program:string;
    };
    clubPrefs:{
        club_id:number;
        selected:boolean;
    }[];
    interestPrefs:{
        interest_id:number;
        selected:boolean;
    }[];
}