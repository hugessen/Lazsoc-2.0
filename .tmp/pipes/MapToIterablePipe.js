import { Pipe } from '@angular/core';
export var MapToIterablePipe = (function () {
    function MapToIterablePipe() {
    }
    MapToIterablePipe.prototype.transform = function (dict, args) {
        if (args === void 0) { args = []; }
        var a = [];
        for (var key in dict) {
            if (dict.hasOwnProperty(key)) {
                a.push({ key: key, val: dict[key] });
            }
        }
        return a;
    };
    MapToIterablePipe.decorators = [
        { type: Pipe, args: [{
                    name: 'mapToIterable'
                },] },
    ];
    /** @nocollapse */
    MapToIterablePipe.ctorParameters = [];
    return MapToIterablePipe;
}());
export var MAPTOITERABLE_PROVIDERS = [
    MapToIterablePipe
];
