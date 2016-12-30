"use strict";
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var router_2 = require("nativescript-angular/router");
var detailsComponent = (function () {
    function detailsComponent(activeRoute, routerextention) {
        this.activeRoute = activeRoute;
        this.routerextention = routerextention;
        this.isLoading = true;
    }
    detailsComponent.prototype.onNavBtnTap = function () {
        this.routerextention.back();
    };
    detailsComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: "details",
            templateUrl: "details.component.html",
        }), 
        __metadata('design:paramtypes', [router_1.ActivatedRoute, router_2.RouterExtensions])
    ], detailsComponent);
    return detailsComponent;
}());
exports.detailsComponent = detailsComponent;
//# sourceMappingURL=details.component.js.map