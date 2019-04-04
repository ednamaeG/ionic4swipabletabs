import { AuthService } from "./../services/auth.service";
import { Component, OnInit } from "@angular/core";

@Component({
 selector: "app-login",
 templateUrl: "./login.page.html",
 styleUrls: ["./login.page.scss"]
})
export class LoginPage implements OnInit {
 email: string;
 password: string;
 constructor(private auth: AuthService) {}

 ngOnInit() {}

 login() {
  let credentials = {
   email: this.users().email,
   password: this.users().password
  };
  this.auth.login(credentials);
 }

 users() {
  return {
   email: "123@email.com",
   password: "qwertyuiop"
  };
 }
}
