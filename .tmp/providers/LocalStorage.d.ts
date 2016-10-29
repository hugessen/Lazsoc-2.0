/// <reference types="core-js" />
import { Storage } from '@ionic/Storage';
import { UserData } from '../models/UserData';
import 'rxjs/add/operator/map';
export declare class LocalStorage {
    private storage;
    events: any[];
    clubs: any[];
    interests: any;
    discount_partners: any[];
    userData: UserData;
    constructor(storage: Storage);
    get(key: string): Promise<string>;
    set(key: string, obj: any): Promise<any>;
    init(): void;
}
