import {Storage, SqlStorage, Events} from 'ionic-angular';
import {Http} from '@angular/http';
import {Injectable} from '@angular/core';
import 'rxjs/add/operator/map';


const CACHE_TTL = 60 * 60; // 1 hour
const API_URL = '';

@Injectable()
export class CacheService {

  private storage: Storage;

  constructor(private events: Events, private http: Http) {

    events.subscribe('cache:invalidate', () => {
      this.cacheInvalidate();
    });

    this.storage = new Storage(SqlStorage);

  }


  /**
   * Invalidate Cache
   * @returns {Promise<any>}
   */
  public cacheInvalidate(): Promise<any> {
    return this.storage.clear();
  }

  /**
   * Get Cached Item
   * @param {string} name - Cache key
   * @param {string} location - API endpoint of cached item
   * @param {number=} ttl - TTL in seconds (-1 to invalidate immediately)
   * @returns {Promise<{}>}
   */
  public getItem(name: string, location: string, ttl?: number): Promise<{}> {

    // if ttl is < 0, delete cached item and retrieve a fresh one
    if (ttl < 0) {
      this.storage.remove(name);
    }

    return new Promise((resolve, reject) => {

      this.storage.get(name).then(cachedResult => {
          console.log('logging cached result: ' + cachedResult);
        if (typeof cachedResult !== 'undefined') {
            
          // something's in the cache
          let data = JSON.parse(cachedResult);
          
          if (this.itemExpired(data)) {
            // cache IS expired
            console.log('expired cache');
            this.load(location)
              .then(res => this.setItem(name, res, ttl).then(() => resolve(data.data)))
              .catch(err => reject(err));
          } else {
            // cache is NOT expired
            console.log('data resolved');
            resolve(data.data);
          }

        } else {
          // not in the cache (key doesn't exist)
          console.log('pulling from api');
          this.load(location)
            .then(res => this.setItem(name, res, ttl).then(() => resolve(res)))
            .catch(err => reject(err));
        }

      }).catch(err => reject(err));

    });
  }


  /**
   * Set Cached Item
   * @param {string} name - Key name of item to store
   * @param {any} data - Value of data to store
   * @param {ttl=} ttl - TTL in seconds
   */
  public setItem(name: string, data: any, ttl?: number): Promise<{}> {
    let expiration = (typeof ttl !== 'undefined' && ttl) ? this.currentTimestamp() + ttl : this.currentTimestamp() + CACHE_TTL;
    let value = JSON.stringify({ data: data, expires: expiration});
    console.log(name + ' being set in storage');
    return this.storage.set(name, value);
  }

  /**
   * Delete Cached Item
   * @param {string} name - Key name of item to delete
   * @returns {Promise<any>}
   */
  public deleteItem(name: string): Promise<any> {
    return this.storage.remove(name);
  }


  /**
   * Check Item for Expired Cache
   * @param {data: any, expires: number} item - Cache item
   * @returns {boolean}
   */
  private itemExpired(item: {data: any, expires: number}): boolean {
    return (typeof item !== 'undefined' && typeof item.expires !== 'undefined') ?
      this.currentTimestamp() > item.expires : true;
  }


  /**
   * Get Current Timestamp
   * @returns {number}
   */
  private currentTimestamp(): number {
    return Math.floor(new Date().getTime() / 1000);
  }


  /**
   * Load from API Endpoint
   * @param {string} path - Endpoint to grab
   */
  private load(path: string): Promise<{}> {
    return this.http.get('http://app.lazsoc.ca/app_clubs.php').map(res => res.json().data).toPromise();
  }

}