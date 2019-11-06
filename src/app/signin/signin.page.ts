import { EmailValidator } from './../signup/signup.page';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit, DoCheck } from '@angular/core';
import { NovasonLifeService } from '../novason-life.service';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage';
import { LoadingController,ToastController,AlertController,NavController } from '@ionic/angular';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.page.html',
  styleUrls: ['./signin.page.scss'],
})
export class SigninPage implements OnInit, DoCheck {
  formErr: string = "";
  btn: boolean = false;
  message: string =" ";
  constructor(public toastController: ToastController,private nav: NavController,public _alertController: AlertController,public loadingController: LoadingController,private _service: NovasonLifeService, private _router: Router, private _storage: Storage) { }

  
  ngDoCheck() {
    this.formErr = "";
    if (this.user.controls["email"].touched && !this.user.controls["email"].value) {
      this.formErr = "Please fill in your email address!";
    } else if (this.user.controls["email"].touched && !this.user.controls["email"].valid) {
      this.formErr = "Please provide a valid email address!";
    }

    if (this.user.controls["pin"].touched && !this.user.controls["pin"].value) {
      this.formErr = "Enter your pin!";
    } else if (this.user.controls["pin"].touched && !this.user.controls["pin"].valid) {
      this.formErr = "Invalid Pin!";
    }

    if (this.user.controls["pin"].touched && !this.user.controls["pin"].value &&
      this.user.controls["email"].touched && !this.user.controls["email"].value) {
      this.formErr = "Provide your pin and email address!";
    }

    if (this.formErr.length > 0 || !this.user.controls["pin"].value || !this.user.controls["email"].value)
      this.btn = false;

    if (this.formErr.length == 0 && this.user.controls["pin"].value && this.user.controls["email"].value)
      this.btn = true;
  }

  ngOnInit() { }

  user = new FormGroup({
    email: new FormControl('', [
      EmailValidator.isValidMailFormat,
      Validators.required]),
    pin: new FormControl("", Validators.pattern("[0-9]{5}"))
  });

  signIn() {
    
    this.loadingController.create({
      message: "Please wait..."
    }).then((loading) => {
      loading.present();
      setTimeout(() => {
        loading.dismiss();
      }, 5000)
    })
    
    
    let id = this.user.value.email;
    let pin = this.user.value.pin;
    let err = false;
    

    if (this.formErr.length == 0) {
      this._storage.get("buynow").then(val => {
        this.message= 'successful logged in as ' + this.user.controls['email'].value;
          // this.presentToast();
        
        if (val) {
        
          this._storage.clear();
          this._service.getSignInCustomer(id, pin).subscribe(res => {
                                  
            
            if (res) {
              
              this.presentToast();
              
              this._service.customerSetSession(res);
              this.user.reset();
              
              this._router.navigateByUrl(val);
            } else {  
             
              console.log("User does not exist!")
            }
          })
        }
      })

      if (!err) {
        
        // this.presentToast1("unsuccessful logged  Check Your email/Password & Try Again!");
        this._storage.clear();
        this._service.getSignInCustomer(id, pin).subscribe(res => {
          if (res) {
             this.presentToast1(this.message, "primary");
            this._service.customerSetSession(res);
            this.user.reset();
            this._router.navigateByUrl("/profile");
          } else {
            this.presentToast1("unsuccessful logged  Check Your email/Password & Try Again!", "danger");
            console.log("User does not exist!")
          }
        })
      }
    }
  }
  // async presentAlert(message: string)  {
  //   const alert = await this._alertController.create({
  //     header: 'Signin',
  //    message: message,
     
     
     
// buttons: ['OK']
// });

//    await alert.present();
//   }
  async presentAlert()  {
    const alert = await this._alertController.create({
      
     message: 'unsuccessfuly! Check Your email/Password & Try Again!',
     
     
     
buttons: ['OK']
});

   await alert.present();
  }
  async presentToast() {
    const toast = await this.toastController.create({
      message: this.message,
      duration: 6000,
      position: 'middle'
    });
    toast.present();
  }
 
  async presentToast1(err: string, color: string) {
    const toast = await this.toastController.create({
      message: err,
      duration: 5000,
      showCloseButton: true,
      closeButtonText: "Close",
      color: color
    });
    toast.present();
  }
  
 
}
