/// <reference types="core-js" />
import { Events } from 'ionic-angular';
import { Storage } from '@ionic/Storage';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
export declare class CacheService {
    events: Events;
    http: Http;
    storage: Storage;
    constructor(events: Events, http: Http, storage: Storage);
    /**
     * Invalidate Cache
     * @returns {Promise<any>}
     */
    cacheInvalidate(): Promise<any>;
    /**
     * Get Cached Item
     * @param {string} name - Cache key
     * @param {string} location - API endpoint of cached item
     * @param {number=} ttl - TTL in seconds (-1 to invalidate immediately)
     * @returns {Promise<{}>}
     */
    getItem(name: string, location: string, ttl?: number): Promise<{}>;
    /**
     * Set Cached Item
     * @param {string} name - Key name of item to store
     * @param {any} data - Value of data to store
     * @param {ttl=} ttl - TTL in seconds
     */
    setItem(name: string, data: any, ttl?: number): Promise<{}>;
    /**
     * Delete Cached Item
     * @param {string} name - Key name of item to delete
     * @returns {Promise<any>}
     */
    deleteItem(name: string): Promise<any>;
    /**
     * Check Item for Expired Cache
     * @param {data: any, expires: number} item - Cache item
     * @returns {boolean}
     */
    itemExpired(item: {
        data: any;
        expires: number;
    }): boolean;
    /**
     * Get Current Timestamp
     * @returns {number}
     */
    currentTimestamp(): number;
    /**
     * Load from API Endpoint
     * @param {string} path - Endpoint to grab
     */
    load(path: string): Promise<{}>;
}
