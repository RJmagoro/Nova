import { ValidateCell } from './../class/validate-cell';
import { VerifyId } from './../class/verifyid';
import { Storage } from '@ionic/storage';
import { Customer } from './../class/customer';
import { Component, OnInit, DoCheck } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NovasonLifeService } from '../novason-life.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-buynow2',
  templateUrl: './buynow2.page.html',
  styleUrls: ['./buynow2.page.scss'],
})
export class Buynow2Page implements OnInit, DoCheck {
  public user: Customer;
  constructor(private _service: NovasonLifeService, private _router: Router, private _storage: Storage) { }
  ngOnInit() {
    this._storage.remove("buynow")
    this._service.customerGetSession().then(val => {
      this.user = JSON.parse(val);
      if (!val) {
        this._storage.set("buynow", "/buynow2");
        this._router.navigateByUrl("/signin")
      }
    });
  }

  emailErr: string = "";
  nameErr: string = "";
  surnameErr: string = "";
  titleErr: string = "";
  phoneErr: string = "";
  ageErr: string = "";
  idnumErr: string = "";
  verify = new VerifyId();
  validateCell = new ValidateCell();
  nationality: string;

  ngDoCheck(): void {
    this.emailErr = "";
    this.nameErr = "";
    this.surnameErr = "";
    this.titleErr = "";
    this.phoneErr = "";
    this.ageErr = "";
    this.idnumErr = "";

    this.nationality = this.buynow.controls["nationality"].value;

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

    //Cell Number errors
    if (this.buynow.controls["phone"].touched && !this.buynow.controls["phone"].value) {
      this.phoneErr = "Please fill in your phone number!";
    } else if (this.buynow.controls["phone"].touched && !this.validateCell.validateCell(this.buynow.controls["phone"].value)) {
      this.phoneErr = "Invalid phone Number!";
    }

    // title errors
    if (this.buynow.controls["title"].touched && !this.buynow.controls["title"].value) {
      this.titleErr = "Please select your title!";
    }

    // email errors
    if (this.buynow.controls["email"].touched && !this.buynow.controls["email"].value) {
      this.emailErr = "Please enter your email!";
      // }else if(this.buynow.controls["email"].touched && !this.buynow.controls["email"] ){
      //     this.emailErr="invalid email format"
    }

    // age  errors
    if (this.buynow.controls["age"].touched && !this.buynow.controls["age"].value) {
      this.ageErr = "Please select your age range!";
    }
  }

  buynow = new FormGroup({
    email: new FormControl('', Validators.compose([Validators.required])),
    name: new FormControl(''),
    surname: new FormControl(''),
    title: new FormControl(''),
    idNum: new FormControl(''),
    phone: new FormControl(''),
    age: new FormControl(''),
    nationality: new FormControl('RSA'),
    passport: new FormControl,
  });

  buyNow() {
    let user: Customer = {
      id: this.user.id,
      name: this.buynow.controls['name'].value,
      surname: this.buynow.controls['surname'].value,
      title: this.buynow.controls['title'].value,
      email: this.buynow.controls['email'].value,
      customerContact: this.buynow.controls['phone'].value,
      profilePicId: this.user.profilePicId,
      profilePhoto: this.user.profilePhoto,
      postalAddress: this.user.postalAddress,
      surburb: this.user.surburb,
      town_city: this.user.town_city,
      postalCode: this.user.postalCode,
      monthlyPayment: this.user.monthlyPayment,
      cardHolder: this.user.cardHolder,
      cardNumber: this.user.cardNumber,
      expiryDate: this.user.expiryDate,
      cVV: this.user.cVV,
      isActive: true,
      password: this.user.password,
      ageRange: this.buynow.controls['age'].value,
      nationality: this.buynow.controls['nationality'].value
    };

    if (this.buynow.controls['passport'].value != "") {
      user.idNumber = this.buynow.controls['passport'].value;
    }

    if (this.buynow.controls['idNum'].value != "") {
      user.idNumber = this.buynow.controls['idNum'].value;
    }
    this.user.name = this.buynow.controls['name'].value;
    this.user.surname = this.buynow.controls['surname'].value;
    this.user.title = this.buynow.controls['title'].value;
    this.user.idNumber = this.buynow.controls['idNum'].value;
    this.user.email = this.buynow.controls['email'].value;
    this.user.customerContact = this.buynow.controls['phone'].value;
    this.user.ageRange = this.buynow.controls['age'].value;
    this.user.nationality = this.buynow.controls['nationality'].value;

    if (user.name != "" && user.surname != "" && user.title != "" && user.email != "" && user.customerContact != "" && user.ageRange != "") {
      this._service.customerSetSession(this.user);
      this._service.putCustomer(user.id, user).subscribe((res) => {
        this._router.navigateByUrl("/buynow3");
      });
    }
  }
}
