var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Pipe } from '@angular/core';
var MapToIterablePipe = (function () {
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
    return MapToIterablePipe;
}());
MapToIterablePipe = __decorate([
    Pipe({
        name: 'mapToIterable'
    })
], MapToIterablePipe);
export { MapToIterablePipe };
export var MAPTOITERABLE_PROVIDERS = [
    MapToIterablePipe
];
//# sourceMappingURL=MapToIterablePipe.js.map