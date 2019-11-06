import { Router } from '@angular/router';
import { Storage } from '@ionic/storage';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add',
  templateUrl: './add.page.html',
  styleUrls: ['./add.page.scss'],
})
export class AddPage implements OnInit {

  constructor(private _storage: Storage, private _router: Router) { }

  ngOnInit() {
  }

  spouse() {
    this._storage.set("addSpouse", true).then(res => {
      this._router.navigateByUrl("/spouse3");
    });
  }
  extended() {
    this._storage.set("addExtended", true).then(res => {
      this._router.navigateByUrl("/buynow10");
    });
  }
  children() {
    this._storage.set("addChildren", true).then(res => {
      this._router.navigateByUrl("/buynow7");
    });
  }
  beneficiary() {
    this._storage.set("addBeneficiary", true).then(res => {
      this._router.navigateByUrl("/beneficiary");
    });
  }
}
