import { SwipableService } from './../services/swipable.service';
import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Observable } from 'rxjs';

@Component({
 selector: "app-member",
 templateUrl: "./member.page.html",
 styleUrls: ["./member.page.scss"]
})
export class MemberPage implements OnInit {
 val: number = 0;
 constructor(private router: Router,private swipeSvc:SwipableService) {
     
 }

 ngOnInit() {

  this.swipeSvc.route$.subscribe(data=>{
      this.val = data;
      console.log(this.val);
  });

  this.val= this.val===null ? 0 : this.val;
 }

 move(route) {
  this.router.navigate(["/member/test/" + route]);
 }

 alert() {
  alert("testr");
 }
}
