/// <reference types="core-js" />
import { CacheService } from '../providers/CacheService';
import { LocalStorage } from '../providers/LocalStorage';
import { Club } from '../models/club';
import { Interest } from '../models/interest';
import { Prefs } from '../models/prefs';
export declare class LocalData {
    cacheService: CacheService;
    private localStorage;
    events: any;
    discountSponsors: any;
    private prefs;
    cache: CacheService;
    constructor(cacheService: CacheService, localStorage: LocalStorage);
    getCustomFeed(club?: Club): Promise<any>;
    doCustomFeed(events: any[], clubs: any, interests: Interest[], prefs: Prefs, club?: Club): any;
    generateDateKey(date: string): string;
    getLongDate(date: Date): string;
    transformClubs(clubs: any[]): Object;
    formatSocialLinks(socialLinks: any[]): Object;
    getEvents(): Promise<any>;
    getPrefs(): Promise<any>;
    getClubs(doTransform?: boolean): Promise<any>;
    getInterests(): Promise<any>;
    getDiscountSponsors(): Promise<any>;
    getInterestsLocally(): any;
}
