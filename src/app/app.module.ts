import { HammerConfig } from "./directives/config";
import { FormsModule } from "@angular/forms";
import { SamplePage } from "./sample/sample.page";
import { NgModule } from "@angular/core";
import { BrowserModule, HAMMER_GESTURE_CONFIG } from "@angular/platform-browser";
import { RouteReuseStrategy } from "@angular/router";

import { IonicModule, IonicRouteStrategy } from "@ionic/angular";
import { SplashScreen } from "@ionic-native/splash-screen/ngx";
import { StatusBar } from "@ionic-native/status-bar/ngx";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HTTP } from "@ionic-native/http/ngx";
import { IonicStorageModule } from "@ionic/storage";
import { SplashModalPage } from "./splash-modal/splash-modal.page";
import { Camera } from "@ionic-native/camera/ngx";
import { FileTransfer } from '@ionic-native/file-transfer/ngx';
@NgModule({
 declarations: [AppComponent, SplashModalPage, SamplePage],
 entryComponents: [SplashModalPage, SamplePage],
 imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, IonicStorageModule.forRoot(), FormsModule],
 providers: [
  HTTP,
  StatusBar,
  SplashScreen,
  Camera,
  FileTransfer,
  { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
  {
   provide: HAMMER_GESTURE_CONFIG,
   useClass: HammerConfig
  }
 ],
 bootstrap: [AppComponent]
})
export class AppModule {}
