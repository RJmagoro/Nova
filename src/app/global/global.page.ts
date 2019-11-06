import { Storage } from '@ionic/storage';
import { Router } from '@angular/router';
import { Buynow4PageModule } from './../buynow4/buynow4.module';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-global',
  templateUrl: './global.page.html',
  styleUrls: ['./global.page.scss'],
})
export class GlobalPage implements OnInit {

  constructor(private _router: Router, private _storage: Storage) { }

  ngOnInit() {
  }

  cash() {
    let premium: Buynow4PageModule = {
      name: "Global Cover",
      premium_amount: 0,
      isactive: false
    }
    this._storage.set("premium", premium).then(val => this._router.navigateByUrl("/buynow2"));
  }
}
