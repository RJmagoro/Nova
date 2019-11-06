import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { Buynow9Page } from './buynow9.page';

const routes: Routes = [
  {
    path: '',
    component: Buynow9Page
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
     ReactiveFormsModule
  ],
  declarations: [Buynow9Page]
})
export class Buynow9PageModule {}
