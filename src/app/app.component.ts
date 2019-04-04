import { SplashModalPage } from "./splash-modal/splash-modal.page";
import { AuthStorageProviderService } from "./services/auth-storage-provider.service";
import { AuthService } from "./services/auth.service";
import { Component } from "@angular/core";

import { Platform, LoadingController } from "@ionic/angular";
import { SplashScreen } from "@ionic-native/splash-screen/ngx";
import { StatusBar } from "@ionic-native/status-bar/ngx";
import { Router } from "@angular/router";
import { ModalController } from "@ionic/angular";
import { async } from "q";
@Component({
 selector: "app-root",
 templateUrl: "app.component.html"
})
export class AppComponent {
 constructor(
  private platform: Platform,
  private splashScreen: SplashScreen,
  private statusBar: StatusBar,
  private loading: LoadingController,
  private auth: AuthService,
  private router: Router,
  private authStorage: AuthStorageProviderService,
  private modalCtrl: ModalController
 ) {
  this.initializeApp();
 }

 initializeApp() {
  this.platform.ready().then(() => {
   this.auth.authState$.subscribe();
   this.statusBar.styleDefault();
   this.splashScreen.hide();
  });
 }

 async setRootPage() {
  const authDetails = await this.authStorage.getAuthDetails();
  if (authDetails.authstate) {
   this.displaySplashPage();
  }
 }

 // }, 3000);

 async displaySplashPage() {
  const modal = await this.modalCtrl.create({
   component: SplashModalPage
  });
  return await modal.present();
 }
}
