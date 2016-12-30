import { Component } from "@angular/core";
import * as admob from "nativescript-admob";
@Component({
    selector: "my-app",
    templateUrl: "app.component.html",
})
export class AppComponent {
    public counter: number = 16;
constructor(){
         admob.createBanner({
          testing: true,
        //  view:GridLayout,
          iosTestDeviceIds: ["yourTestDeviceUDIDs", "canBeAddedHere"],
          size: admob.AD_SIZE.SMART_BANNER,
          iosBannerId: "ca-app-pub-XXXXXX/YYYYYY", // add your own
          androidBannerId: "ca-app-pub-AAAAAAAA/BBBBBBB", // add your own
 
       margins: {
        // if both are set, top wins
      //  top: 100,
       bottom:0
      }
    }).then(
        function() {
           console.log("SUCCESS");
        },
        function(error) {
           console.log("FAIL"+ error);
        }
    )
}
    public get message(): string {
        if (this.counter > 0) {
            return this.counter + " taps left";
        } else {
            return "Hoorraaay! \nYou are ready to start building!";
        }
    }
    
    public onTap() {
        this.counter--;
    }
}
