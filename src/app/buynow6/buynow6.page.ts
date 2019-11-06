import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Buymodule6Module } from '../buymodule6/buymodule6.module';
import { FormGroup, FormControl } from '@angular/forms';
import { Storage } from '@ionic/storage';
import { NovasonLifeService } from '../novason-life.service';

@Component({
  selector: 'app-buynow6',
  templateUrl: './buynow6.page.html',
  styleUrls: ['./buynow6.page.scss'],
})
export class Buynow6Page implements OnInit {
  public user: Buymodule6Module;
  public loadProgress: number = 1;
  premium: string;
  child: number = 1;
  public name: string;
  public surname: string
  public pName: string;
  constructor(private _service: NovasonLifeService, private _storage: Storage, private _router: Router) { }

  ngOnInit() {
    this._service.customerGetSession().then(val => {
      this.name = JSON.parse(val).name
      this.surname = JSON.parse(val).surname
    });

    this._storage.get("premium").then(val => {
      this.pName = val.name
      this.premium = parseInt(val.premium_amount, 10).toFixed(2);
    });
  }

  buynow = new FormGroup({
    children: new FormControl(''),
  });

  buyNow() {
    let numChildren = this.child;

    if (numChildren > 0) {
      this._storage.set("numChildren", numChildren.toFixed(0));
      this._router.navigateByUrl("/buynow7")
    }
  }

  add() {
    if (this.buynow.value.children < 10) {
      this.child++;
    }
  }

  sub() {
    if (this.buynow.value.children > 1) {
      this.child--;
    }
  }
}