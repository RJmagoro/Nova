import { NovasonLifeService } from './../novason-life.service';
import { Customer } from './../class/customer';
import { Buynow4PageModule } from './../buynow4/buynow4.module';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-burial',
  templateUrl: './burial.page.html',
  styleUrls: ['./burial.page.scss'],
})
export class BurialPage implements OnInit {
  public cost: number = null;
  public user: Customer;
  constructor(private _router: Router, private _storage: Storage, private _service: NovasonLifeService) { }

  ngOnInit() {
    this._service.customerGetSession().then(val => {
      this.user = JSON.parse(val);
    })
  }

  cash() {
    if (!this.user) {
      console.log("Please login to purchase this cover!")
    } else {
      let premium: Buynow4PageModule = {
        customer_id: this.user.id,
        name: "Burial Cover",
        premium_amount: 0,
        isactive: true
      }
      this._service.postInsurancePlan(premium).subscribe(res => {
        this._router.navigateByUrl("/profile")
      });
    }
  }
}
