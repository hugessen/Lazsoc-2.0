import { Injectable } from '@angular/core';
import { Storage } from '@ionic/Storage';
import 'rxjs/add/operator/map';
export var LocalStorage = (function () {
    function LocalStorage(storage) {
        this.storage = storage;
        this.init();
        this.userData = null;
        // this.storage.clear();
        //this.set('app-interests',this.interests);
        // this.set('app-discount',this.discount_partners);
        // this.storage.remove('userdata');
    }
    LocalStorage.prototype.get = function (key) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.storage.get(key).then(function (result) {
                if (typeof result !== 'undefined') {
                    console.log('key', key, 'resolved');
                    resolve(result);
                }
                else
                    resolve({});
            })
                .catch(function (err) { return reject(err); });
        });
    };
    LocalStorage.prototype.set = function (key, obj) {
        console.log("Saving key:", key, "in storage.");
        var value = JSON.stringify(obj);
        return this.storage.set(key, value);
    };
    LocalStorage.prototype.init = function () {
        this.interests = JSON.parse("[\n  {\n    \"id\": 0,\n    \"name\": \"Accounting\"\n  },\n  {\n    \"id\": 1,\n    \"name\": \"Finance\"\n  },\n  {\n    \"id\": 2,\n    \"name\": \"Competitions\"\n  },\n  {\n    \"id\": 3,\n    \"name\": \"Exam Review\"\n  },\n  {\n    \"id\": 4,\n    \"name\": \"Debate\"\n  },\n  {\n    \"id\": 5,\n    \"name\": \"Networking\"\n  },\n  {\n    \"id\": 6,\n    \"name\": \"Academic Help\"\n  },\n  {\n    \"id\": 7,\n    \"name\": \"E-Business\"\n  },\n  {\n    \"id\": 8,\n    \"name\": \"Economics\"\n  },\n  {\n    \"id\": 9,\n    \"name\": \"Entrepreneurship\"\n  },\n  {\n    \"id\": 10,\n    \"name\": \"First Year\"\n  },\n  {\n    \"id\": 11,\n    \"name\": \"International\"\n  },\n  {\n    \"id\": 12,\n    \"name\": \"Journalism and Media\"\n  },\n  {\n    \"id\": 13,\n    \"name\": \"Leadership\"\n  },\n  {\n    \"id\": 14,\n    \"name\": \"Marketing\"\n  },\n  {\n    \"id\": 15,\n    \"name\": \"Public Speaking\"\n  },\n  {\n    \"id\": 16,\n    \"name\": \"Sales\"\n  },\n  {\n    \"id\": 17,\n    \"name\": \"Philanthropy\"\n  },\n  {\n    \"id\": 18,\n    \"name\": \"Sports Management\"\n  },\n  {\n    \"id\": 19,\n    \"name\": \"Consulting\"\n  },\n  {\n    \"id\": 20,\n    \"name\": \"Social\"\n  }\n]");
    };
    LocalStorage.decorators = [
        { type: Injectable },
    ];
    /** @nocollapse */
    LocalStorage.ctorParameters = [
        { type: Storage, },
    ];
    return LocalStorage;
}());
