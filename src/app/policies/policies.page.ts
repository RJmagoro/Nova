import { Buynow4PageModule } from './../buynow4/buynow4.module';
import { Storage } from '@ionic/storage';
import { Customer } from './../class/customer';
import { Component, OnInit } from '@angular/core';
import { NovasonLifeService } from '../novason-life.service';

@Component({
  selector: 'app-policies',
  templateUrl: './policies.page.html',
  styleUrls: ['./policies.page.scss'],
})
export class PoliciesPage implements OnInit {
  public policy: string = "No";
  public benefits: number = 0;
  public spouse: number = 0;
  public children: number = 0;
  public beneficiary: number = 0;
  public extended: number = 0;
  public user: Customer;
  constructor(private _service: NovasonLifeService, private _storage: Storage) { }

  ngOnInit() {
    this._service.customerGetSession().then(val => {
      this.user = JSON.parse(val);
      this._service.getAllPlans().subscribe(res => {
        this._storage.get("policy").then(vals => {
          for (let i = 0; i < Object.keys(res).length; i++) {
            if (res[i].isactive) {
              if (res[i].customer_id == JSON.parse(val).id) {
                if (res[i].name == "Cash Payout" || res[i].name == "Global Cover") {
                  this.policy = res[i];
                } else {
                  this.benefits++;
                }
              }
            }
          }
          this.getSpouse(JSON.parse(val).id);
          this.getChildren(JSON.parse(val).id);
          this.getBeneficiary(JSON.parse(val).id);
          this.getExtended(JSON.parse(val).id);
        });
      })
    });
  }

  getChildren(userId: string) {
    this.children = 0;
    this._service.getChildren().subscribe(res => {
      if (res) {
        for (let i = 0; i < Object.keys(res).length; i++) {
          if (res[i].customer_id == userId) {
            this.children++;
          }
        }
      }
    });
  }

  getSpouse(userId: string) {
    this.spouse = 0;
    this._service.getSpouse().subscribe(res => {
      if (res) {
        for (let i = 0; i < Object.keys(res).length; i++) {
          if (res[i].customer_id == userId) {
            this.spouse++;
          }
        }
      }
    });
  }

  getBeneficiary(userId: string) {
    this.beneficiary = 0;
    this._service.getBeneficiary().subscribe(res => {
      if (res) {
        for (let i = 0; i < Object.keys(res).length; i++) {
          if (res[i].customer_id == userId) {
            this.beneficiary++;
          }
        }
      }
    });
  }

  getExtended(userId: string) {
    this.extended = 0;
    this._service.getExtended().subscribe(res => {
      if (res) {
        for (let i = 0; i < Object.keys(res).length; i++) {
          if (res[i].customer_id == userId) {
            this.extended++;
          }
        }
      }
    });
  }

  cancel(policy: Buynow4PageModule) {
    policy.isactive = false;
    this._service.putInsurancePlan(policy).subscribe(res => {
    });
  }
}
