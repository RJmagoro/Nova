import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { Buynow4Page } from './buynow4.page';

const routes: Routes = [
  {
    path: '',
    component: Buynow4Page
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
  declarations: [Buynow4Page]
})
export class Buynow4PageModule {
  id?: number;
  customer_id?: string;
  name?: string;
  premium_amount?: number;
  isactive?: boolean;
  type?: string;
}
