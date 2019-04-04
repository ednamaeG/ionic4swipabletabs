import { SamplePage } from "./../sample/sample.page";
import { AuthStorageProviderService } from "./auth-storage-provider.service";
import { Router, CanActivate, ActivatedRouteSnapshot } from "@angular/router";
import { Injectable } from "@angular/core";
import { AuthService } from "./auth.service";
import { NavController, ModalController, LoadingController } from "@ionic/angular";
import { SplashModalPage } from "../splash-modal/splash-modal.page";

@Injectable({
 providedIn: "root"
})
export class AuthguardService implements CanActivate {
 constructor(
  private auth: AuthService,
  private router: Router,
  private nav: NavController,
  private authStorage: AuthStorageProviderService,
  private modalCtrl: ModalController,
  private loadingCtrl: LoadingController
 ) {}

 async canActivate(route: ActivatedRouteSnapshot) {
  const loading = await this.loadingCtrl.create({ message: "Initializing..." });
  loading.present();

  const authDetails = await this.authStorage.getAuthDetails();
  console.log(authDetails)
  if (authDetails) {
   if (await this.auth.checkToken(authDetails.token_id)) {
    this.auth.authState$.next(false);
    const data = {};
    data["authstate"] = Boolean(false);

    await this.authStorage.storeAuthDetails(data);
    loading.dismiss();
    this.displayLoginModal();

    return false;
   } else {
    loading.dismiss();
    this.auth.authState$.next(true);
   }
  } else {
   loading.dismiss();
   this.displayLoginModal();
   return false;
  }

  if (!this.auth.authState$.value || !authDetails.authstate) {
   loading.dismiss();
   this.displayLoginModal();
   return false;
  }

  return true;
 }

 async displayLoginModal() {
  const modal = await this.modalCtrl.create({
   component: SamplePage,
   backdropDismiss: false
  });
  return await modal.present();
 }

 async displaySplashPage() {
  const modal = await this.modalCtrl.create({
   component: SplashModalPage
  });
  return await modal.present();
 }
}
