import { VerifyId } from './../class/verifyid';
import { Customer } from './../class/customer';
import { Component, OnInit, DoCheck } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { NovasonLifeService } from '../novason-life.service';
import { Storage } from '@ionic/storage';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { Buynow7PageModule } from './buynow7.module';

@Component({
  selector: 'app-buynow7',
  templateUrl: './buynow7.page.html',
  styleUrls: ['./buynow7.page.scss'],
})
export class Buynow7Page implements OnInit, DoCheck {
  nameErr: string = "";
  surnameErr: string = "";
  idnumErr: string = "";
  verify = new VerifyId();

  ngDoCheck(): void {

    this.nameErr = "";
    this.surnameErr = "";
    this.idnumErr = "";

    // name errors
    if (this.buynow.controls["name"].touched && !this.buynow.controls["name"].value) {
      this.nameErr = "Please enter your name!";
    } else if (this.buynow.controls["name"].touched && parseInt(this.buynow.controls["name"].value)) {
      this.nameErr = "Name should contain letters only!";
    }

    // surname errors
    if (this.buynow.controls["surname"].touched && !this.buynow.controls["surname"].value) {
      this.surnameErr = "Please enter your surname!";
    } else if (this.buynow.controls["surname"].touched && parseInt(this.buynow.controls["surname"].value)) {
      this.nameErr = "Surname should contain letters only!";
    }

    //ID Number errors
    if (this.buynow.controls["idNum"].touched && !this.buynow.controls["idNum"].value) {
      this.idnumErr = "Please fill in your ID Number!";
    } else if (this.buynow.controls["idNum"].touched && !this.verify.verifyID(parseInt(this.buynow.controls["idNum"].value))) {
      this.idnumErr = "Invalid id Number!";
    }
  }

  public user: Customer;
  public users: any[] = [];
  public numChildren: number;

  constructor(private _service: NovasonLifeService, private _storage: Storage, private _router: Router, private toastController: ToastController) { }

  ngOnInit() {
    this._storage.get("numChildren").then(val => {
      this.numChildren = val;
    });
    this._service.customerGetSession().then(val => {
      this.user = JSON.parse(val)
    });
  }

  buynow = new FormGroup({
    name: new FormControl(''),
    surname: new FormControl(''),
    idNum: new FormControl(''),
    passport: new FormControl(''),
    nationality: new FormControl('RSA')
  });

  buyNow() {
    let user: Buynow7PageModule = {
      name: this.buynow.controls['name'].value,
      surname: this.buynow.controls['surname'].value,
      customer_id: this.user.id,
      is_active: true, 
      nationality: this.buynow.controls['nationality'].value,
    };

    if (this.buynow.controls['idNum'].value) {
      user.id_no = this.buynow.controls['idNum'].value;
    } else {
      user.id_no = this.buynow.controls['passport'].value;
    }

    if (this.buynow.value.name != "" || this.buynow.value.surname != "" || this.buynow.value.idNum != "" ) {
      this.users.push(user)
      if (this._storage.get("addChildren")) {
        this._service.postChildren(user).subscribe(res => {
          this._storage.set("addChildren", false).then(res => {
            this.buynow.reset();
            this.presentToast(user.name + " has been added!");
            this._router.navigateByUrl("/add");
          });
        });
      } else {
      this._storage.set("children", this.users).then(val => {
        this.buynow.reset();
        this.presentToast(user.name + " has been added!");
        if (this.numChildren == Object.keys(this.users).length) {
          this._router.navigateByUrl("/spouse1")
        }
      })
    }
    } else {
      this.presentToast("Please fill in the missing fields!");
    }
  }

  async presentToast(name: string) {
    const toast = await this.toastController.create({
      message: name,
      duration: 10000,
      showCloseButton: true,
      closeButtonText: "Close",
      color: "primary"
    });
    toast.present();
  }
}
