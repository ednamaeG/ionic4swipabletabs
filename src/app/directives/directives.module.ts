import { SwipeDirective } from './swipe.directive';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
@NgModule({
  declarations: [SwipeDirective],
  imports: [
    CommonModule
  ],
  exports:[SwipeDirective]
})
export class DirectivesModule { }
