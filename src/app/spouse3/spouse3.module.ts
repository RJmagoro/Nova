import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { Spouse3Page } from './spouse3.page';

const routes: Routes = [
  {
    path: '',
    component: Spouse3Page
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
  declarations: [Spouse3Page]
})
export class Spouse3PageModule {
  id?: number;
  name: string;
  surname: string;
  customer_id: string;
  id_no: string;
  is_active?: boolean;
  age_range?: string;
}
