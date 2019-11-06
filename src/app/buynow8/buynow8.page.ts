import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Buymodule8Module } from '../buymodule8/buymodule8.module';
import { Storage } from '@ionic/storage';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { NovasonLifeService } from '../novason-life.service';

@Component({
  selector: 'app-buynow8',
  templateUrl: './buynow8.page.html',
  styleUrls: ['./buynow8.page.scss'],
})
export class Buynow8Page implements OnInit {

  public user: Buymodule8Module;
  constructor(private _service: NovasonLifeService, private _storage: Storage, private _router: Router, private _toast: ToastController) { }
  premium: string;
  public name: string;
  public surname: string;
  public pName: string;

  ngOnInit() {
    this._service.customerGetSession().then(val => {
      this.name = JSON.parse(val).name
      this.surname = JSON.parse(val).surname
    });

    this._storage.get("premium").then(val => {
    this.pName = val.name
      this.premium = parseInt(val.premium_amount, 10).toFixed(2);
    });
  }

  buynow = new FormGroup({
    extendedYes: new FormControl(''),
    extendedNo: new FormControl(''),
  });

  buyNow() {
    // this.user = {
    //   extended: this.buynow.controls['extended'].value
    // };

    if (this.buynow.value.extendedYes && this.buynow.value.extendedNo) {
      this.presentToast("Please Select one box!");
    } else if (this.buynow.value.extendedYes) {
      this._router.navigateByUrl("buynow9");
    } else if (this.buynow.value.extendedNo) {
      this._router.navigateByUrl("buynow");
    } else {
      this.presentToast("Please Select one box!");
    }
  }

  async presentToast(message: string) {
    const toast = await this._toast.create({
      message: message,
      duration: 2000,
      showCloseButton: true,
      closeButtonText: "Close",
      color: "primary"
    });
    toast.present();
  }
}