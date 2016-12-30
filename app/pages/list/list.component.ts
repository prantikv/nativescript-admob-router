import { Component } from "@angular/core";
import { RouterExtensions } from "nativescript-angular/router";
@Component({
    moduleId: module.id,
    selector: "list",
    templateUrl: "list.component.html",
})


export class listComponent {

    public myItems: any;
    public isLoading = true;
    constructor(public routerextensions: RouterExtensions) {
    }

    onItemTap(args) {

    }
    getUserDetails() {
        this.routerextensions.navigate(["details"]);

    }

}