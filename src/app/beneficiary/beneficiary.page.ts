import { BeneficiaryPageModule } from './beneficiary.module';
import { ValidateCell } from './../class/validate-cell';
import { Customer } from './../class/customer';
import { NovasonLifeService } from './../novason-life.service';
import { Component, OnInit, DoCheck } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { VerifyId } from '../class/verifyid';

@Component({
  selector: 'app-beneficiary',
  templateUrl: './beneficiary.page.html',
  styleUrls: ['./beneficiary.page.scss'],
})
export class BeneficiaryPage implements OnInit, DoCheck {
  nameErr: string = "";
  surnameErr: string = "";
  ageErr: string = "";
  idnumErr: string = "";
  verify = new VerifyId();
  validateCell = new ValidateCell();
  nationality: string;

  ngDoCheck(): void {
    this.nameErr = "";
    this.surnameErr = "";
    this.ageErr = "";
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
    // if (this.buynow.controls["idNum"].touched && !this.buynow.controls["idNum"].value) {
    //   this.idnumErr = "Please fill in your ID Number!";
    // } else if (this.buynow.controls["idNum"].touched && !this.verify.verifyID(parseInt(this.buynow.controls["idNum"].value))) {
    //   this.idnumErr = "Invalid id Number!";
    // }

    // age  errors
    if (this.buynow.controls["age"].touched && !this.buynow.controls["age"].value) {
      this.ageErr = "Please select your age range!";
    }

    this.nationality = this.buynow.controls["nationality"].value;
  }
  public user: Customer;

  constructor(private _service: NovasonLifeService, private _storage: Storage, private _router: Router, private toastController: ToastController) { }

  ngOnInit() {
    this._service.customerGetSession().then(val => {
      this.user = JSON.parse(val)
    });
  }

  buynow = new FormGroup({
    name: new FormControl(''),
    surname: new FormControl(''),
    idNum: new FormControl(''),
    age: new FormControl(''),
    nationality: new FormControl('RSA'),
    passport: new FormControl,
  });

  buyNow() {
    let users: BeneficiaryPageModule = {
      name: this.buynow.controls['name'].value,
      surname: this.buynow.controls['surname'].value,
      id_no: this.buynow.controls['idNum'].value,
      customer_id: this.user.id,
      age_range: this.buynow.controls['age'].value,
      is_active: true,
      nationality: this.buynow.controls['nationality'].value
    }

    if (this.buynow.controls['idNum'].value != "") {
      users.id_no = this.buynow.controls['passport'].value;
    }

    if (this.buynow.controls['idNum'].value != "") {
      users.id_no = this.buynow.controls['idNum'].value;
    }

    if (this.nameErr == "" && this.surnameErr == "" && this.ageErr == "" && this.idnumErr == "") {
      if (this._storage.get("addBeneficiary")) {
        this._service.postBeneficiary(users).subscribe(res => {
          this._storage.set("addBeneficiary", false).then(res => {
            this.buynow.reset();
            this.presentToast(users.name + " has been added as a beneficiary!");
            this._router.navigateByUrl("/add");
          });
        });
      } else {
        this._storage.set("beneficiary", users).then(val => {
          this.buynow.reset();
          this.presentToast(users.name + " has been added as a beneficiary!");
          this._router.navigateByUrl("/buynow4");
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