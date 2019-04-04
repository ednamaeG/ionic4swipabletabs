import { async } from "@angular/core/testing";
import { Injectable } from "@angular/core";
import { Storage } from "@ionic/storage";
@Injectable({
 providedIn: "root"
})
export class AuthStorageProviderService {
 constructor(private storage: Storage) {}

 async storeAuthDetails(details) {
  await this.storage.set("auth_details", details);
 }

 async getAuthDetails() {
  const details = await this.storage.get("auth_details");
  return details;
 }

 async removeAuth() {
  await this.storage.remove("auth_details");
 }
}
