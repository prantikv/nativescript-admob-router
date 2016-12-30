import { Component } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import {RouterExtensions } from "nativescript-angular/router";

@Component({
    moduleId:module.id,
    selector: "details",
    templateUrl: "details.component.html",
})
export class detailsComponent{
    public detailItems: any;
    public isLoading = true;

    public constructor( private activeRoute: ActivatedRoute,private routerextention :RouterExtensions) {

    }
    onNavBtnTap(){
        this.routerextention.back();
    }
}
