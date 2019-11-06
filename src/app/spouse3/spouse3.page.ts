import { VerifyId } from './../class/verifyid';
import { Customer } from './../class/customer';
import { Component, OnInit, DoCheck } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { NovasonLifeService } from '../novason-life.service';
import { Storage } from '@ionic/storage';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { Spouse3PageModule } from './spouse3.module';

@Component({
  selector: 'app-spouse3',
  templateUrl: './spouse3.page.html',
  styleUrls: ['./spouse3.page.scss'],
})
export class Spouse3Page implements OnInit, DoCheck {
  nameErr: string = "";
  surnameErr: string = "";
  idnumErr: string = "";
  verify = new VerifyId();
  ageErr: string = "";

  ngDoCheck(): void {

    this.nameErr = "";
    this.surnameErr = "";
    this.idnumErr = "";
    this.ageErr = "";

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

    // age  errors
    if (this.buynow.controls["age"].touched && !this.buynow.controls["age"].value) {
      this.ageErr = "Please select your age range!";
    }
  }

  public user: Customer;
  public users: any[] = [];
  public spouses: number;

  constructor(private _service: NovasonLifeService, private _storage: Storage, private _router: Router, private toastController: ToastController) { }

  ngOnInit() {
    this._storage.get("spouses").then(val => {
      this.spouses = val;
    });
    this._service.customerGetSession().then(val => {
      this.user = JSON.parse(val)
    });
  }

  buynow = new FormGroup({
    name: new FormControl(''),
    surname: new FormControl(''),
    idNum: new FormControl(''),
    age: new FormControl(''),
  });

  buyNow() {
    let user: Spouse3PageModule = {
      name: this.buynow.controls['name'].value,
      surname: this.buynow.controls['surname'].value,
      id_no: this.buynow.controls['idNum'].value,
      customer_id: this.user.id,
      age_range: this.buynow.controls['age'].value,
      is_active: true
    };

    if (this.buynow.value.name != "" || this.buynow.value.surname != "" || this.buynow.value.idNum != "") {
      this.users.push(user)
      if (this._storage.get("addSpouse")) {
        this._service.postSpouse(user).subscribe(res => {
          this._storage.set("addSpouse", false).then(res => {
            this.buynow.reset();
            this.presentToast(user.name + " has been added!");
            this._router.navigateByUrl("/add");
          });
        });
      } else {
        this._storage.set("spouse", this.users).then(val => {
          this.buynow.reset();
          this.presentToast(user.name + " has been added!");
          this._router.navigateByUrl("/buynow8");
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
