import { Customer } from './../class/customer';
import { Router } from '@angular/router';
import { Buynow4PageModule } from './../buynow4/buynow4.module';
import { Component, OnInit } from '@angular/core';
import { NovasonLifeService } from '../novason-life.service';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-buynow',
  templateUrl: './buynow.page.html',
  styleUrls: ['./buynow.page.scss'],
})
export class BuynowPage implements OnInit {

  public user: Customer;
  constructor(private _storage: Storage, private _service: NovasonLifeService, private _router: Router) { }

  ngOnInit() {
    let numChildren: number = 0;
    let members: number = null;
    let spouse: number = null;

    this._service.customerGetSession().then(val => {
      this.user = JSON.parse(val)

      this._storage.get("numChildren").then(val => {
        if (val > 0) {
          numChildren = val;
          if (numChildren) {
            this._storage.get("children").then(res => {
              for (let i = 0; i < numChildren; i++) {
                this._service.postChildren(res[i]).subscribe(res => { });
              }
            });
          }
        }
      });
      this._storage.get("members").then(val => {
        if (val > 0) {
          members = val;
          if (members) {
            this._storage.get("member").then(res => {
              for (let i = 0; i < members; i++) {
                this._service.postExtended(res[i]).subscribe(res => { });
              }
            });
          }
        }
      });

      this._storage.get("spouses").then(val => {
        if (val > 0) {
          spouse = val;
          if (spouse) {
            this._storage.get("spouse").then(res => {
              for (let i = 0; i < spouse; i++) {
                this._service.postSpouse(res[i]).subscribe(res => { });
              }
            });
          }
        }
      });

      this._storage.get("beneficiary").then(val => {
        this._service.postBeneficiary(val).subscribe(res => { });
      })

      if (members || spouse) {
        this._storage.get("premium").then(val => {
          let insurancePlan: Buynow4PageModule = {
            name: val.name,
            customer_id: this.user.id,
            premium_amount: val.premium_amount,
            isactive: true,
            type: "Family"
          }
          this._service.postInsurancePlan(insurancePlan).subscribe(res => { });
        });
      } else {
        this._storage.get("premium").then(val => {
          let insurancePlan: Buynow4PageModule = {
            name: val.name,
            customer_id: this.user.id,
            premium_amount: val.premium_amount,
            isactive: true,
            type: "Single"
          }
          this._service.postInsurancePlan(insurancePlan).subscribe(res => { });
        });
      }
      this._storage.set("policy", 1);
      this._router.navigateByUrl("/profile");
    });
  }
}
