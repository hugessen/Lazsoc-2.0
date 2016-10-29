import { Pipe } from '@angular/core';
export var GetLongDate = (function () {
    function GetLongDate() {
    }
    GetLongDate.prototype.transform = function (dateStr) {
        var date = new Date(dateStr);
        var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        var hour = (date.getHours() == 12) ? 12 : date.getHours() % 12;
        var minutes = (date.getMinutes() < 10) ? date.getMinutes() + "0" : date.getMinutes();
        var ampm = (date.getHours() < 12) ? "AM" : "PM";
        var result = days[date.getDay()] + ", " + months[date.getMonth()] + " " + date.getDate() + ", " + date.getFullYear() + " " + hour + ":" + minutes + " " + ampm;
        return result;
    };
    GetLongDate.decorators = [
        { type: Pipe, args: [{
                    name: 'getLongDate'
                },] },
    ];
    /** @nocollapse */
    GetLongDate.ctorParameters = [];
    return GetLongDate;
}());
