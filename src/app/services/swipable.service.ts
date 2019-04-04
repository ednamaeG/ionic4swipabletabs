import { BehaviorSubject } from "rxjs";
import { Injectable, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Injectable({
 providedIn: "root"
})
export class SwipableService implements OnInit {
 route$: BehaviorSubject<number> = new BehaviorSubject(null);
 routes = ["tab1", "tab2", "tab3", "tab4", "tab5"];
 tabIndex = 0;
 vb = "testing";
 constructor(private router: Router) {}

 ngOnInit() {
  this.route$.next(0);
 }

 switchNextTab() {
  this.tabIndex++;
  if (this.tabIndex <= this.routes.length - 1) {
   this.router.navigate(["/member/test/" + this.routes[this.tabIndex]]);
   console.log("index", this.tabIndex);
  } else {
   this.tabIndex = 0;
   this.router.navigate(["/member/test/" + this.routes[this.tabIndex]]);
  }
  this.route$.next(this.tabIndex);
 }

 switchPrevTab() {
  this.tabIndex--;
  if (this.tabIndex > 0) {
   this.router.navigate(["/member/test/" + this.routes[this.tabIndex]]);
  } else {
   this.tabIndex = 0;
   this.router.navigate(["/member/test/" + this.routes[this.tabIndex]]);
  }
  this.route$.next(this.tabIndex);
 }
}
