import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { NovasonLifeService } from '../novason-life.service';

@Component({
  selector: 'app-password',
  templateUrl: './password.page.html',
  styleUrls: ['./password.page.scss'],
})
export class PasswordPage implements OnInit {

  users: any;
  error: string = "";

  constructor(private _router: Router, private _service: NovasonLifeService) { }

  ngOnInit() {
    this._service.getCustomers().subscribe((res) => {
      this.users = res;
    });
  }

  user = new FormGroup({
    email: new FormControl
  });

  resetPassword() {
    // let cell = false;
    // for (let i = 0; i < Object.keys(this.users).length; i++) {
    //   let inNum = this.user.value.cell;
    //   let outNum = this.users[i].customerContact;

    //   if (outNum.substr(0, 1) == 0) {
    //     outNum = outNum.replace("0", "+27");
    //   }

    //   if (inNum.substr(0, 1) == 0) {
    //     inNum = inNum.replace("0", "+27");
    //   }
    //   if (outNum == inNum) {
    //     this._service.customerResetPass(outNum).subscribe(() => {
    //       console.log("SMS Sent!");
    //     });
    //     cell = true;
    //     break;
    //   }
    // }
    // if (!cell) {
    //   console.log("SMS not Sent!");
    // }
    this._service.customerResetPass(this.user.controls["email"].value).subscribe(res => {
      console.log("Email sent!")
    this._router.navigateByUrl("/signin")
    })
  }
}