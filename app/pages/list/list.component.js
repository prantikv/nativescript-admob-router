"use strict";
var core_1 = require("@angular/core");
var router_1 = require("nativescript-angular/router");
var listComponent = (function () {
    function listComponent(routerextensions) {
        this.routerextensions = routerextensions;
        this.isLoading = true;
    }
    listComponent.prototype.onItemTap = function (args) {
    };
    listComponent.prototype.getUserDetails = function () {
        this.routerextensions.navigate(["details"]);
    };
    listComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: "list",
            templateUrl: "list.component.html",
        }), 
        __metadata('design:paramtypes', [router_1.RouterExtensions])
    ], listComponent);
    return listComponent;
}());
exports.listComponent = listComponent;
//# sourceMappingURL=list.component.js.map