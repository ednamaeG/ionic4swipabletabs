import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ThirdPage } from './third.page';
import { DirectivesModule } from './../directives/directives.module';
const routes: Routes = [
  {
    path: '',
    component: ThirdPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    DirectivesModule
  ],
  declarations: [ThirdPage]
})
export class ThirdPageModule {}
