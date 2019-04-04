import { Directive, ElementRef, Output, EventEmitter } from "@angular/core";
import "hammerjs";
import { SwipableService } from "../services/swipable.service";

@Directive({
 selector: "[hammer-swipe]"
})
export class SwipeDirective {
 itemEl: HTMLElement;
 _hammer: HammerManager;

 @Output()
 tapEvent: EventEmitter<string> = new EventEmitter();

 constructor(el: ElementRef, private swipeSvc: SwipableService) {
  this.itemEl = el.nativeElement;
 }

 ngOnInit() {
  this._hammer = new Hammer.Manager(this.itemEl);
  var swipe = new Hammer.Swipe();
  this._hammer.add([swipe]);

  this._hammer.on("swipeleft", (e) => {
   console.log("Left", this.swipeSvc.vb);
   this.swipeSvc.switchNextTab();
  });

  this._hammer.on("swiperight", (e) => {
   console.log("right");
   this.swipeSvc.switchPrevTab();
  });
 }
}
