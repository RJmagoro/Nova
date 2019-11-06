import { Router } from '@angular/router';
import { Buynow10PageModule } from './../buynow10/buynow10.module';
import { BeneficiaryPageModule } from './../beneficiary/beneficiary.module';
import { Spouse3PageModule } from './../spouse3/spouse3.module';
import { Buynow7PageModule } from './../buynow7/buynow7.module';
import { Component, OnInit } from '@angular/core';
import { NovasonLifeService } from '../novason-life.service';

@Component({
  selector: 'app-remove',
  templateUrl: './remove.page.html',
  styleUrls: ['./remove.page.scss'],
})
export class RemovePage implements OnInit {
  children: any = [];
  spouse: any = [];
  beneficiary: any = [];
  extended: any = [];
  user: any;
  constructor(private _service: NovasonLifeService, private _router: Router) { }

  ngOnInit() {
    this._service.customerGetSession().then(val => {
      this.user = JSON.parse(val);
      this.getBeneficiary(this.user.id);
      this.getChildren(this.user.id);
      this.getExtended(this.user.id);
      this.getSpouse(this.user.id);
    });
  }

  getChildren(userId: string) {
    this._service.getChildren().subscribe(res => {
      if (res) {
        for (let i = 0; i < Object.keys(res).length; i++) {
          if (res[i].customer_id == userId) {
            this.children.push(res[i]);
          }
        }
      }
    });
  }

  getSpouse(userId: string) {
    this._service.getSpouse().subscribe(res => {
      if (res) {
        for (let i = 0; i < Object.keys(res).length; i++) {
          if (res[i].customer_id == userId) {
            this.spouse.push(res[i]);
          }
        }
      }
    });
  }

  getBeneficiary(userId: string) {
    this._service.getBeneficiary().subscribe(res => {
      if (res) {
        for (let i = 0; i < Object.keys(res).length; i++) {
          if (res[i].customer_id == userId) {
            this.beneficiary.push(res[i]);
          }
        }
      }
    });
  }

  getExtended(userId: string) {
    this._service.getExtended().subscribe(res => {
      if (res) {
        for (let i = 0; i < Object.keys(res).length; i++) {
          if (res[i].customer_id == userId) {
            this.extended.push(res[i]);
          }
        }
      }
    });
  }

  removeChildren(children: Buynow7PageModule) {
    this._service.deleteChildren(children.id).subscribe(res => {
      this.children = [];
      this.getChildren(this.user.id);
    });
  }

  removeSpouse(spouse: Spouse3PageModule) {
    this._service.deleteSpouse(spouse.id).subscribe(res => {
      this.spouse = [];
      this.getSpouse(this.user.id);
    });
  }

  removeBeneficiary(beneficiary: BeneficiaryPageModule) {
    this._service.deleteBeneficiary(beneficiary.id).subscribe(res => {
      this.beneficiary = [];
      this.getBeneficiary(this.user.id);
    });
  }

  removeExtended(extended: Buynow10PageModule) {
    this._service.deleteExtended(extended.id).subscribe(res => {
      this.extended = [];
      this.getExtended(this.user.id);
    });
  }
}
