import { SamplePage } from "./../sample/sample.page";
import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { Router } from "@angular/router";
import { HTTP } from "@ionic-native/http/ngx";
import { AuthStorageProviderService } from "./auth-storage-provider.service";
import { ModalController } from "@ionic/angular";
@Injectable({
 providedIn: "root"
})
export class AuthService {
 authState$ = new BehaviorSubject(false);
 address = "http://192.168.0.156/api/";
 constructor(private router: Router, private http: HTTP, private authStorage: AuthStorageProviderService, private modalCtrl: ModalController) {}

 async login(credentials) {
  try {
   const res = await this.http.post(this.address + "login", credentials, {});
   const data = JSON.parse(res.data);

   data["authstate"] = Boolean(true);
   this.authStorage.storeAuthDetails(data);

   this.modalCtrl.dismiss();
   this.authState$.next(true);
   this.router.navigate([""]);
  } catch (err) {
   console.log("error", err);
  }
 }

 logout() {
  this.authState$.next(false);
  this.authStorage.removeAuth();
  this.displayLoginModal();
 }

 async checkToken(id): Promise<boolean> {
  const res = await this.http.post(this.address + "token", { id: id }, {});
  console.log("data",res.data)
  return res.data === '1' ? true : false;
 }

 async displayLoginModal() {
  const modal = await this.modalCtrl.create({
   component: SamplePage,
   backdropDismiss: false
  });
  return await modal.present();
 }
}
