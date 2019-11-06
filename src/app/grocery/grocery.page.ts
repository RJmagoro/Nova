import { Customer } from './../class/customer';
import { Router } from '@angular/router';
import { Buynow4PageModule } from './../buynow4/buynow4.module';
import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';
import { NovasonLifeService } from '../novason-life.service';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-grocery',
  templateUrl: './grocery.page.html',
  styleUrls: ['./grocery.page.scss'],
})
export class GroceryPage implements OnInit {
  public cost: number = null;
  public user: Customer;
  constructor(private _router: Router, private _storage: Storage, private _service: NovasonLifeService, private toastController: ToastController) { }

  ngOnInit() {
    this._service.customerGetSession().then(val => {
      this.user = JSON.parse(val);
    })
  }

  cash() {
    let policy: boolean = false;
    if (!this.user) {
      this.presentToast("Please login to purchase this benefit!");
    } else {
      this._service.getAllPlans().subscribe(res => {
        let plans: any = res;
        for (let i = 0; i < Object.keys(plans).length; i++) {
          if (plans[i].name == "Cash Payout" && plans[i].customer_id == this.user.id) {
            let prem: Buynow4PageModule = {
              customer_id: this.user.id,
              name: "Grocery Benefit",
              isactive: true
            }
            this._service.postInsurancePlan(prem).subscribe(res => {
              this.presentToast2("Grocery benefit has been added to your benefits list");
              this._router.navigateByUrl("/profile");
            });
            policy = true;
            break;
          } else {
            if (plans[i].name == "Global Cover" && plans[i].customer_id == this.user.id) {
              let prem: Buynow4PageModule = {
                customer_id: this.user.id,
                name: "Grocery Benefit",
                isactive: true
              }
              this._service.postInsurancePlan(prem).subscribe(res => {
                this.presentToast2("Grocery benefit has been added to your benefits list");
                this._router.navigateByUrl("/profile");
              });
              policy = true;
              break;
            } else {
              if (plans[i].name == "Grocery Benefit" && plans[i].customer_id == this.user.id) {
                this.presentToast2("This benefit has already been added to your benefits list");
                this._router.navigateByUrl("/profile");
                policy = true;
                break;
              }
            }
          }
        }
        console.log(policy)
      })

      if (!policy) {
        if (this.cost == 5000 || this.cost == 10000) {
          let prem: Buynow4PageModule = {
            customer_id: this.user.id,
            name: "Grocery Benefit",
            isactive: true
          }
          this._service.postInsurancePlan(prem).subscribe(res => {
            let premium: Buynow4PageModule = {
              customer_id: this.user.id,
              name: "Cash Payout",
              premium_amount: this.cost,
              isactive: true
            }
            this._storage.set("premium", premium).then(val => this._router.navigateByUrl("/buynow2"));
          });
        } else {
          this.presentToast("Select an amount for your cash payout to purchase this benefit!");
        }
      }
    }
  }

  async presentToast(err: string) {
    const toast = await this.toastController.create({
      message: err,
      duration: 5000,
      showCloseButton: true,
      closeButtonText: "Close",
      color: "danger"
    });
    toast.present();
  }

  async presentToast2(err: string) {
    const toast = await this.toastController.create({
      message: err,
      duration: 5000,
      showCloseButton: true,
      closeButtonText: "Close",
      color: "primary"
    });
    toast.present();
  }
}
