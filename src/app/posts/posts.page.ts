import { SwipableService } from "./../services/swipable.service";
import { AuthService } from "./../services/auth.service";
import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
 selector: "app-posts",
 templateUrl: "./posts.page.html",
 styleUrls: ["./posts.page.scss"]
})
export class PostsPage implements OnInit {
 items = new Array(20);
 constructor(public auth: AuthService, private router: Router, private swipeSvc: SwipableService) {}

 ngOnInit() {}

 
}
