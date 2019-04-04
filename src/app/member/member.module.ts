import { MemberRoutingModule } from './member.router.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { MemberPage } from './member.page';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MemberRoutingModule
  ],
  declarations: [MemberPage]
})
export class MemberPageModule {}
