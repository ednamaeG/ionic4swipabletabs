import { AuthService } from "./../services/auth.service";
import { Component, OnInit } from "@angular/core";
import { ModalController, LoadingController } from "@ionic/angular";
@Component({
 selector: "app-splash-modal",
 templateUrl: "./splash-modal.page.html",
 styleUrls: ["./splash-modal.page.scss"]
})
export class SplashModalPage implements OnInit {
 constructor(private modalCtrl: ModalController, private auth: AuthService, private loadingCtrl: LoadingController) {
  this.auth.authState$.subscribe((data) => {});
 }

 async ngOnInit() {
  const loading = await this.loadingCtrl.create({ message: "Initializing..." });
  loading.present();
  setTimeout(() => {
   loading.dismiss();
   this.dismissSplash();
  }, 2000);
 }

 dismissSplash() {
  if (this.auth.authState$.value) {
   this.modalCtrl.dismiss();
  }else{
    this.modalCtrl.dismiss();
  }
 }
}
