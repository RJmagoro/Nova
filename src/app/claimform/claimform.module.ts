import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ClaimformPage } from './claimform.page';

const routes: Routes = [
  {
    path: '',
    component: ClaimformPage
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
  declarations: [ClaimformPage]
})
export class ClaimformPageModule {
  customer_id?: string;
  type: string;
  placeholder_id_no: string;
  name: string;
  surname: string;
  contact_no: string;
  alternative_contact: string;
  death_certificate?: Blob;
  completed: boolean;
  isactive: boolean;
  police_report?: Blob;
}
