import { ValidateCell } from './../class/validate-cell';
import { Customer } from './../class/customer';
import { Component, OnInit, DoCheck } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { NovasonLifeService } from '../novason-life.service';
import { formatDate } from '@angular/common';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { AlertController,LoadingController,NavController } from '@ionic/angular';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit, DoCheck {
  emailErr: string = "";
  numbErr: string = "";
  pinErr: string = "";
  rePinErr: string = "";
  validateCell = new ValidateCell();
  checkedbtn: boolean = false;
  error: string = "";
  message: string = "";

  constructor(private loadingCtrl: LoadingController,private nav: NavController,public _alertController: AlertController,public toastController: ToastController,private _service: NovasonLifeService, private _router: Router) { }

  // async presentToast() {
  //   const toast = await this.toastController.create({
  //     message: 'Email address already exist please try to login!',
  //     duration: 2000
  //   });
  //   toast.present();
  // }

  ngDoCheck() {
    this.emailErr = "";
    this.numbErr = "";
    this.pinErr = "";
    this.rePinErr = "";
    this.checkedbtn = false;
    //ID Number errors
    if (this.user.controls["email"].touched && !this.user.controls["email"].value) {
      this.emailErr = "Please fill in your email address!";
    } else if (this.user.controls["email"].touched && !this.user.controls["email"].valid) {
      this.emailErr = "Please provide a valid email address!";
    }
    //Cell Number errors
    if (this.user.controls["mobile"].touched && !this.user.controls["mobile"].value) {
      this.numbErr = "Please fill in your mobile number!";
    } else if (this.user.controls["mobile"].touched && !this.validateCell.validateCell(this.user.controls["mobile"].value)) {
      this.numbErr = "Invalid Mobile Number!";
    }
    //Pin Errors
    if (this.user.controls["pin"].touched && !this.user.controls["pin"].value) {
      this.pinErr = "Please enter a pin for your account!";
    } else if (this.user.controls["pin"].touched && !parseInt(this.user.controls["pin"].value)) {
      this.pinErr = "Pin should contain numbers only!";
    } else if (this.user.controls["pin"].touched && this.user.controls["pin"].value.length < 5) {
      this.pinErr = "Pin should be 5 digits!";
    }
    //Retyped Pin
    if (this.user.controls["rePin"].touched && this.user.controls["pin"].value != this.user.controls["rePin"].value) {
      this.rePinErr = "Pin don't match!";
    }
    //enable button
    if (this.user.controls["terms"].value && this.numbErr.length == 0 && this.emailErr.length == 0 && this.pinErr.length == 0 && this.rePinErr.length == 0 &&
      this.user.value.pin && this.user.value.rePin && this.user.value.mobile && this.user.value.email) {
      this.checkedbtn = this.user.controls["terms"].value;
    }
  }

  ngOnInit() { }

  user = new FormGroup({
    email: new FormControl('', [
      EmailValidator.isValidMailFormat,
      Validators.required]),
    mobile: new FormControl,
    pin: new FormControl("", Validators.pattern("[0-9]{5}")),
    rePin: new FormControl("", Validators.pattern("[0-9]{5}")),
    terms: new FormControl
  });

  signUp() {
    this.error = "";
    let customerContact: string = "";

    if (this.user.value.mobile) {
      for (let i = 0; i < (this.user.value.mobile.length); i++) {
        if (this.user.value.mobile[i] != " ") {
          customerContact += this.user.value.mobile[i];
        }
      }
      if (!this.validateCell.validateCell(customerContact)) {
        this.numbErr = "Invalid Mobile number!";
      }
    }
    if (this.numbErr.length == 0 && this.emailErr.length == 0 && this.pinErr.length == 0 && this.rePinErr.length == 0 &&
      this.user.value.pin && this.user.value.rePin && this.user.value.mobile && this.user.value.email) {
      let customer: Customer = {
        id: formatDate(Date(), "yyMMddmmss", "en_ZA") + (Math.round((Math.random() * 99999) + 1000)).toString(),
        email: this.user.value.email,
        customerContact: customerContact,
        password: this.user.value.pin,
        isActive: true
      }
      this._service.postCustomer(customer).subscribe(res => {
        this._router.navigateByUrl("/signin");
      }, err => {
        if (err.status == 500) {
          // this.presentToast1("Email address already exist please try to login!.");
        this.error = "Email address already exist please try to login!";
        //  this.presentAlert("Email address already exist please try to login!");
          
        }
      });
    }
  }
}

export class EmailValidator {
  static isValidMailFormat(control: FormControl) {
    var EMAIL_REGEXP = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (control.value != "" && (!EMAIL_REGEXP.test(control.value))) {
      return { "Please provide a valid email": true };
    }

    return null;
  }
//   async presentAlert()  {
//     const alert = await this._alertController.create({
//       header: 'Warning!',
//      message: 'Email address already exist please try to login!',
     
// buttons: ['OK']
// });

//    await alert.present();
//   }
}