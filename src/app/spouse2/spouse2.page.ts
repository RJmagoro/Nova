import { Component, OnInit } from '@angular/core';
import { Buymodule9Module } from '../buymodule9/buymodule9.module';
import { FormGroup, FormControl } from '@angular/forms';
import { Storage } from '@ionic/storage';
import { Router } from '@angular/router';
import { NovasonLifeService } from '../novason-life.service';

@Component({
  selector: 'app-spouse2',
  templateUrl: './spouse2.page.html',
  styleUrls: ['./spouse2.page.scss'],
})
export class Spouse2Page implements OnInit {

  public premium: number;
  public name: string;
  public surname: string
  public pName: string;
  public spouse: number = 1;

  constructor(private _service: NovasonLifeService, private _storage: Storage, private _router: Router) { }

  ngOnInit() {
    this._service.customerGetSession().then(val => {
      this.name = JSON.parse(val).name
      this.surname = JSON.parse(val).surname
    });

    this._storage.get("premium").then(val => {
      this.pName = val.name
      this.premium = val.premium_amount.toFixed(2)
    });
  }
  buynow = new FormGroup({
    spouse: new FormControl(''),
  });

  buyNow() {
    let spouses = this.spouse;
    if (spouses > 0) {
      this._storage.set("spouses", spouses.toFixed(0));
      this._router.navigateByUrl("/spouse3")
    }
  }

  add() {
    if (this.spouse < 10) {
      this.spouse++;
    }
  }

  sub() {
    if (this.spouse > 1) {
      this.spouse--;
    }
  }
}
