import { Customer } from './../class/customer';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Buymodule3Module } from '../buymodule3/buymodule3.module';
import { NovasonLifeService } from '../novason-life.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-buynow3',
  templateUrl: './buynow3.page.html',
  styleUrls: ['./buynow3.page.scss'],
})
export class Buynow3Page implements OnInit {
  public users: Buymodule3Module;
  public user: Customer;
  constructor(private _service: NovasonLifeService, private _router: Router) { }

  ngOnInit() {
    this._service.customerGetSession().then(val => this.user = JSON.parse(val));
  }
  buynow = new FormGroup({
    address: new FormControl(''),
    suburb: new FormControl(''),
    town: new FormControl(''),
    code: new FormControl(''),
    // email: new FormControl(''),
  });

  buyNow() {
    let user: Customer = {
      id: this.user.id,
      name: this.user.name,
      surname: this.user.surname,
      title: this.user.title,
      idNumber: this.user.idNumber,
      email: this.user.email,
      password: this.user.password,
      customerContact: this.user.customerContact,
      profilePicId: this.user.profilePicId,
      profilePhoto: this.user.profilePhoto,
      postalAddress: this.buynow.controls['address'].value,
      surburb: this.buynow.controls['suburb'].value,
      town_city: this.buynow.controls['town'].value,
      postalCode: this.buynow.controls['code'].value,
      monthlyPayment: this.user.monthlyPayment,
      cardHolder: this.user.cardHolder,
      cardNumber: this.user.cardNumber,
      expiryDate: this.user.expiryDate,
      cVV: this.user.cVV,
      isActive: this.user.isActive
    };

    // this.user.email = this.buynow.controls['email'].value;
    this.user.customerContact = this.user.customerContact;
    this.user.postalAddress = this.buynow.controls['address'].value;
    this.user.surburb = this.buynow.controls['suburb'].value;
    this.user.town_city = this.buynow.controls['town'].value;
    this.user.postalCode = this.buynow.controls['code'].value;

    // && user.email != "" 
    if (user.name != "" && user.surname != "" && user.title != "" && user.idNumber != "" && user.customerContact != "") {
      this._service.customerSetSession(this.user);
      this._service.putCustomer(user.id, user).subscribe((res) => {
        this._router.navigateByUrl("/beneficiary");
      });
    }
  }
}