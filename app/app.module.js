"use strict";
var core_1 = require("@angular/core");
var platform_1 = require("nativescript-angular/platform");
var app_component_1 = require("./app.component");
var router_1 = require("nativescript-angular/router");
var app_routing_1 = require("./app.routing");
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [app_component_1.AppComponent].concat(app_routing_1.navigatableComponents),
            bootstrap: [app_component_1.AppComponent],
            imports: [platform_1.NativeScriptModule,
                router_1.NativeScriptRouterModule,
                router_1.NativeScriptRouterModule.forRoot(app_routing_1.routes)
            ],
            schemas: [core_1.NO_ERRORS_SCHEMA]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map