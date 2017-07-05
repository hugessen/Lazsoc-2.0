var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Events } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
//import { NetworkService } from '../providers/NetworkService';
var CACHE_TTL = 60 * 60;
var API_URL = 'https://moria.lazsoc.ca/v2/api/';
var CacheService = (function () {
    function CacheService(events, http, storage) {
        var _this = this;
        this.events = events;
        this.http = http;
        this.storage = storage;
        events.subscribe('cache:invalidate', function () {
            _this.cacheInvalidate();
        });
    }
    /**
     * Invalidate Cache
     * @returns {Promise<any>}
     */
    CacheService.prototype.cacheInvalidate = function () {
        return this.storage.clear();
    };
    /**
     * Get Cached Item
     * @param {string} name - Cache key
     * @param {string} location - API endpoint of cached item
     * @param {number=} ttl - TTL in seconds (-1 to invalidate immediately)
     * @returns {Promise<{}>}
     */
    CacheService.prototype.getItem = function (name, location, ttl) {
        var _this = this;
        // if ttl is < 0, delete cached item and retrieve a fresh one
        if (ttl < 0) {
            this.storage.remove(name);
            // console.log('removed ' + name + ' from storage');
        }
        return new Promise(function (resolve, reject) {
            _this.storage.get(name).then(function (cachedResult) {
                if (typeof cachedResult !== 'undefined') {
                    // something's in the cache
                    var data = JSON.parse(cachedResult);
                    if (_this.itemExpired(data)) {
                        // cache IS expired
                        // console.log('expired cache');
                        _this.load(location)
                            .then(function (res) { return _this.setItem(name, res, ttl).then(function () { return resolve({ fetchType: 'api', cacheVal: res }); }); })
                            .catch(function (err) { return reject(err); });
                    }
                    else {
                        // cache is NOT expired
                        // console.log('data resolved');
                        resolve({ fetchType: 'cache', cacheVal: data.data });
                    }
                }
                else {
                    // not in the cache (key doesn't exist)
                    // console.log('pulling from api');
                    _this.load(location)
                        .then(function (res) { return _this.setItem(name, res, ttl).then(function () { return resolve({ fetchType: 'api', cacheVal: res }); }); })
                        .catch(function (err) { return reject(err); });
                }
            }).catch(function (err) { return reject(err); });
        });
    };
    /**
     * Set Cached Item
     * @param {string} name - Key name of item to store
     * @param {any} data - Value of data to store
     * @param {ttl=} ttl - TTL in seconds
     */
    CacheService.prototype.setItem = function (name, data, ttl) {
        var expiration = (typeof ttl !== 'undefined' && ttl) ? this.currentTimestamp() + ttl : this.currentTimestamp() + CACHE_TTL;
        var value = JSON.stringify({ data: data, expires: expiration });
        // console.log(name + ' being set in storage');
        return this.storage.set(name, value);
    };
    /**
     * Delete Cached Item
     * @param {string} name - Key name of item to delete
     * @returns {Promise<any>}
     */
    CacheService.prototype.deleteItem = function (name) {
        return this.storage.remove(name);
    };
    /**
     * Check Item for Expired Cache
     * @param {data: any, expires: number} item - Cache item
     * @returns {boolean}
     */
    CacheService.prototype.itemExpired = function (item) {
        return (typeof item !== 'undefined' && item !== null && typeof item.expires !== 'undefined') ?
            this.currentTimestamp() > item.expires : true;
    };
    /**
     * Get Current Timestamp
     * @returns {number}
     */
    CacheService.prototype.currentTimestamp = function () {
        return Math.floor(new Date().getTime() / 1000);
    };
    /**
     * Load from API Endpoint
     * @param {string} path - Endpoint to grab
     */
    CacheService.prototype.load = function (path) {
        console.log(API_URL + path);
        return this.http.get(API_URL + path).map(function (res) { return res.json(); }).toPromise();
    };
    return CacheService;
}());
CacheService = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [Events, Http, Storage])
], CacheService);
export { CacheService };
//# sourceMappingURL=CacheService.js.map