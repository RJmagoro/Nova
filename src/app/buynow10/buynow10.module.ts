import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { Buynow10Page } from './buynow10.page';

const routes: Routes = [
  {
    path: '',
    component: Buynow10Page
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
  declarations: [Buynow10Page]
})
export class Buynow10PageModule {
  id?: number;
  name: string;
  surname: string;
  customer_id: string;
  id_no: string;
  is_active?: boolean;
  age_range?: string;
}