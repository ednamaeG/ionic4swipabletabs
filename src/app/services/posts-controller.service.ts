import { AuthStorageProviderService } from "./auth-storage-provider.service";
import { Injectable } from "@angular/core";
import { HTTP } from "@ionic-native/http/ngx";
@Injectable({
 providedIn: "root"
})
export class PostsControllerService {
 private address = "http://192.168.0.156/api/posts";
 headers = {
  Accept: "",
  Authorization: ""
 };
 constructor(private http: HTTP, private authStorage: AuthStorageProviderService) {
  this.setHeaders();
 }

 async index() {
  try {
   const res = await this.http.get(this.address , {}, {});
   return JSON.parse(res.data);
  } catch (err) {
   console.log(err);
  }
 }

 async create() {
  try {
  } catch (err) {}
 }

 async update() {
  try {
  } catch (err) {}
 }

 async delete(id) {
  console.log(this.headers, `${this.address}/${id}`);
  try {
   const res = await this.http.delete(`${this.address}/${id}`, {}, this.headers);
   return res.data;
  } catch (err) {
      console.log("Error",err.message)
  }
 }

 async setHeaders() {
  const authDetails = await this.authStorage.getAuthDetails();
  this.headers = {
   Accept: "application/json",
   Authorization: "Bearer" + " " + authDetails.token
  };
 }
}
