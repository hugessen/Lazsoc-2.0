/// <reference types="core-js" />
import { CacheService } from '../providers/CacheService';
import { ClubEvent } from '../models/club-event';
import { Club } from '../models/club';
import { Interest } from '../models/interest';
export declare class LocalData {
    cacheService: CacheService;
    events: any;
    clubs: any;
    interests: any;
    discountSponsors: any;
    cache: CacheService;
    constructor(cacheService: CacheService);
    saveData(name: string, data: any, ttl?: number): Promise<{}>;
    getEvents(): Promise<any>;
    getUserInfo(): Promise<any>;
    getCustomFeed(): Promise<any>;
    doCustomFeed(events: any[], clubs: Club[], interests: Interest[]): ClubEvent[];
    getClubs(): Promise<any>;
    getInterests(): Promise<any>;
    getDiscountSponsors(): Promise<any>;
    getEventsLocally(): {
        id: number;
        title: string;
        startTime: string;
        endTime: string;
        location: string;
        tagline: string;
        club: number;
        banner: string;
        tags: string[];
        desc: string;
    }[];
}
