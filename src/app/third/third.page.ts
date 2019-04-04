import { SwipableService } from './../services/swipable.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-third',
  templateUrl: './third.page.html',
  styleUrls: ['./third.page.scss'],
})
export class ThirdPage implements OnInit {

  constructor(private swipeSvc:SwipableService) { }

  ngOnInit() {
  }
  
}
