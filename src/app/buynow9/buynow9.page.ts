import { Component, OnInit } from '@angular/core';
import { Buymodule9Module } from '../buymodule9/buymodule9.module';
import { FormGroup, FormControl } from '@angular/forms';
import { Storage } from '@ionic/storage';
import { Router } from '@angular/router';
import { NovasonLifeService } from '../novason-life.service';

@Component({
  selector: 'app-buynow9',
  templateUrl: './buynow9.page.html',
  styleUrls: ['./buynow9.page.scss'],
})
export class Buynow9Page implements OnInit {
  public users: Buymodule9Module;
  public premium: string;
  public loadProgress: number = 1;
  public name: string;
  public surname: string
  public pName: string;
  constructor(private _service: NovasonLifeService, private _storage: Storage, private _router: Router) { }
  member: number = 1;
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
    member: new FormControl(''),
  });

  buyNow() {
    this.users = {
      member: this.buynow.controls['member'].value,
    }
    let members = this.member;
    if (members > 0) {
      this._storage.set("members", members.toFixed(0));
      this._router.navigateByUrl("/buynow10")
    }
  }

  add() {
    if (this.member < 10) {
      this.member++;
    }
  }

  sub() {
    if (this.member > 1) {
      this.member--;
    }
  }
}
