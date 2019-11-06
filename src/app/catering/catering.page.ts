import { Customer } from './../class/customer';
import { Buynow4PageModule } from './../buynow4/buynow4.module';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';
import { NovasonLifeService } from '../novason-life.service';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-catering',
  templateUrl: './catering.page.html',
  styleUrls: ['./catering.page.scss'],
})
export class CateringPage implements OnInit {
  public user: Customer;
  constructor(private _router: Router, private _storage: Storage, private _service: NovasonLifeService, private toastController: ToastController) { }

  ngOnInit() {
    this._service.customerGetSession().then(val => {
      this.user = JSON.parse(val);
    });
  }

  cash() {
    let policy: boolean = false;
    if (!this.user) {
      console.log("Please login to purchase this benefit!")
    } else {
      this._service.getAllPlans().subscribe(res => {
        let plans: any = res;
        for (let i = 0; i < Object.keys(plans).length; i++) {
          if (plans[i].name == "Catering Benefit" && plans[i].customer_id == this.user.id) {
            this.presentToast2("This benefit has already been added to your benefits list");
            this._router.navigateByUrl("/profile");
            policy = true;
            break;
          }
        }
        if (!policy) {
          let premium: Buynow4PageModule = {
            customer_id: this.user.id,
            name: "Catering Benefit",
            premium_amount: 7000,
            isactive: true
          }
          this._service.postInsurancePlan(premium).subscribe(res => {
            this._router.navigateByUrl("/profile")
          });
        }
      });
    }
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
