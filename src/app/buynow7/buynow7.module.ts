import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { Buynow7Page } from './buynow7.page';

const routes: Routes = [
  {
    path: '',
    component: Buynow7Page
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
  declarations: [Buynow7Page]
})
export class Buynow7PageModule {
  id?: number;
  name: string;
  surname: string;
  customer_id: string;
  id_no?: string;
  is_active: boolean;
  nationality: string;
}
