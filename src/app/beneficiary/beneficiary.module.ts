import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { BeneficiaryPage } from './beneficiary.page';

const routes: Routes = [
  {
    path: '',
    component: BeneficiaryPage
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
  declarations: [BeneficiaryPage]
})
export class BeneficiaryPageModule {
  id?: number;
  name: string;
  surname: string;
  customer_id: string;
  id_no: string;
  is_active?: boolean;
  age_range?: string;
  nationality?: string;
}
