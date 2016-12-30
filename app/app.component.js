"use strict";
var core_1 = require("@angular/core");
var admob = require("nativescript-admob");
var AppComponent = (function () {
    function AppComponent() {
        this.counter = 16;
        admob.createBanner({
            testing: true,
            //  view:GridLayout,
            iosTestDeviceIds: ["yourTestDeviceUDIDs", "canBeAddedHere"],
            size: admob.AD_SIZE.SMART_BANNER,
            iosBannerId: "ca-app-pub-XXXXXX/YYYYYY",
            androidBannerId: "ca-app-pub-AAAAAAAA/BBBBBBB",
            margins: {
                // if both are set, top wins
                //  top: 100,
                bottom: 0
            }
        }).then(function () {
            console.log("SUCCESS");
        }, function (error) {
            console.log("FAIL" + error);
        });
    }
    Object.defineProperty(AppComponent.prototype, "message", {
        get: function () {
            if (this.counter > 0) {
                return this.counter + " taps left";
            }
            else {
                return "Hoorraaay! \nYou are ready to start building!";
            }
        },
        enumerable: true,
        configurable: true
    });
    AppComponent.prototype.onTap = function () {
        this.counter--;
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: "my-app",
            templateUrl: "app.component.html",
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map