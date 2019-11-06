import { Component, OnInit } from '@angular/core';
import { Buymodule5Module } from '../buymodule5/buymodule5.module';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage';
import { ToastController } from '@ionic/angular';
import { NovasonLifeService } from '../novason-life.service';

@Component({
  selector: 'app-buynow5',
  templateUrl: './buynow5.page.html',
  styleUrls: ['./buynow5.page.scss'],
})
export class Buynow5Page implements OnInit {

  public user: Buymodule5Module;
  public premium: string = "";
  public name: string;
  public surname: string
  public pName: string;
  constructor(private _service: NovasonLifeService, private _router: Router, private _storage: Storage, private toastController: ToastController) { }

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
    yesChild: new FormControl(''),
    noChild: new FormControl(''),
  });

  buyNow() {
    let yes = this.buynow.value.yesChild;
    let no = this.buynow.value.noChild;
    if (yes && no) {
      this.presentToast("Please check one box!")
    } else if (yes || no) {
      if (yes) {
        this._router.navigateByUrl("/buynow6");
      } else {
        this._router.navigateByUrl("/spouse1");
      }
    } else {
      this.presentToast("Please check atleast one box!")
    }
  }

  async presentToast(message: string) {
    const toast = await this.toastController.create({
      message: message,
      duration: 10000,
      showCloseButton: true,
      closeButtonText: "Close",
      color: "primary"
    });
    toast.present();
  }
}
