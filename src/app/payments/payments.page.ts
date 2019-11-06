import { Component, OnInit } from '@angular/core';
import { PaymentmoduleModule } from '../paymentmodule/paymentmodule.module';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-payments',
  templateUrl: './payments.page.html',
  styleUrls: ['./payments.page.scss'],
})
export class PaymentsPage implements OnInit {
public user: PaymentmoduleModule;
  constructor() { }

  ngOnInit() {
  }
  buynow=new FormGroup({
    holder: new FormControl(''),
    number: new FormControl(''),
    date: new FormControl(''),
    cvv: new FormControl('')
  });
  buyNow(){
    this.user={
      holder:this.buynow.controls['holder'].value,
      number:this.buynow.controls['number'].value,
      date:this.buynow.controls['date'].value,
      cvv:this.buynow.controls['cvv'].value
    }
  }
  // // buyNow() {
  //   this.users = { name: this.buynow.controls['name'].value,
  //   surname: this.buynow.controls['surname'].value,
  //   idNum: this.buynow.controls['town'].value,
    
  

}
