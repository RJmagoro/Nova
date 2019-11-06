import { Buynow4PageModule } from './../buynow4/buynow4.module';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-cash-payout',
  templateUrl: './cash-payout.page.html',
  styleUrls: ['./cash-payout.page.scss'],
})
export class CashPayoutPage implements OnInit {
  constructor(private _router: Router, private _storage: Storage) { }

  ngOnInit() {
  }

  cash() {
    let premium: Buynow4PageModule = {
      name: "Cash Payout",
      premium_amount: 0,
      isactive: false 
    }
    this._storage.set("premium", premium).then(val => this._router.navigateByUrl("/buynow2"));
  }
}
