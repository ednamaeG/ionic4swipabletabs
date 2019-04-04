import { PostsControllerService } from "./../services/posts-controller.service";
import { Component, OnInit } from "@angular/core";
import { AuthService } from "../services/auth.service";

@Component({
 selector: "app-tab1",
 templateUrl: "tab1.page.html",
 styleUrls: ["tab1.page.scss"]
})
export class Tab1Page implements OnInit {
 posts = new Array();
 authDetails;
 constructor(public auth: AuthService, private postCtrl: PostsControllerService) {}

 async ngOnInit() {
  const data = await this.postCtrl.index();
  this.posts = data.posts;
  console.log("data", this.posts);
 }

 async delete(id) {
  if (confirm("Delete?")) {
   const res = await this.postCtrl.delete(id);
   if (res === "Article Deleted!") {
    this.posts = this.posts.filter((post) => post.id !== id);
   }
  }
 }
}
