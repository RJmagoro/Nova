import { Customer } from './../class/customer';
import { Buynow4PageModule } from './buynow4.module';
import { Component, OnInit, DoCheck } from '@angular/core';
import { Input } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { NovasonLifeService } from '../novason-life.service';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-buynow4',
  templateUrl: './buynow4.page.html',
  styleUrls: ['./buynow4.page.scss'],
})
export class Buynow4Page implements OnInit, DoCheck {
  @Input('progress') progress = 5000;
  cover: number = 5000;
  ngDoCheck() {
    this.progress = this.buynow.controls['name'].value;
  }

  public pName: string;
  public user: Customer;
  public name: string;
  public surname: string;
  public loadProgress: number
  constructor(private _service: NovasonLifeService, private _router: Router, private _storage: Storage) { }

  ngOnInit() {
    this._service.customerGetSession().then(val => {
      this.user = JSON.parse(val)
      this.name = JSON.parse(val).name
      this.surname = JSON.parse(val).surname
    });
    this._storage.get("premium").then(val => {
      this.pName = val.name
      if (val.premium_amount > 0) {
        this._router.navigateByUrl("/buynow5");
      }
    })
  }

  buynow = new FormGroup({
    name: new FormControl(5000),
    surname: new FormControl(''),
    idNum: new FormControl('')
  });

  buyNow() {
    if (this.pName == null) {
      this.pName == "Cash Payout";
    }

    let insurancePlan: Buynow4PageModule = {
      name: this.pName,
      customer_id: this.user.id,
      premium_amount: this.progress,
      isactive: true,
    }
    if (this.progress) {
      this._storage.set("premium", insurancePlan).then(val => this._router.navigateByUrl("/buynow5"));
    }
  }

  add() {
    if (this.buynow.controls['name'].value < 30000) {
      this.cover += 1000;
    }
  }

  sub() {
    if (this.buynow.controls['name'].value > 5000) {
      this.cover -= 1000;
    }
  }
}
