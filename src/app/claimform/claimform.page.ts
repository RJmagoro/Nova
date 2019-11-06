import { ClaimformPageModule } from './claimform.module';
import { Component, OnInit, DoCheck } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { NovasonLifeService } from '../novason-life.service';
import { ClaimsmoduleModule } from '../claimsmodule/claimsmodule.module';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-claimform',
  templateUrl: './claimform.page.html',
  styleUrls: ['./claimform.page.scss'],
})

export class ClaimformPage implements OnInit, DoCheck {
  public user: ClaimsmoduleModule;
  public image: Blob;
  public image2: Blob;
  public death: string = null;
  
  ngDoCheck() {
    this.death = this.buynow.controls['type'].value;
  }

  constructor(private _service: NovasonLifeService, private _alertController: AlertController, private _router: Router) { }

  ngOnInit() { }

  buynow = new FormGroup({
    type: new FormControl(''),
    bname: new FormControl(''),
    bsurname: new FormControl(''),
    altenative: new FormControl(''),
    certificate: new FormControl(''),
    id: new FormControl(''),
    phone: new FormControl(''),
    report: new FormControl(''),
  });

  uploadFile(event) {
    let file = event.target.files[0];
    let fr = new FileReader();
    fr.onload = (event: any) => {
      let base64 = event.target.result;
      this.image = base64.split(',')[1];
    }
    fr.readAsDataURL(file);
  }
  
  uploadFile2(event) {
    let file = event.target.files[0];
    let fr = new FileReader();
    fr.onload = (event: any) => {
      let base64 = event.target.result;
      this.image2 = base64.split(',')[1];
    }
    fr.readAsDataURL(file);
  }

  buyNow() {
    let claim: ClaimformPageModule;
    let cust: boolean = false;
    this._service.getClaims().subscribe((ref) => {
      for (let i = 0; i < Object.keys(ref).length; i++) {
        if (ref[i].placeholder_id_no == this.buynow.controls['id'].value) {
          this.presentAlert(this.buynow.controls['id'].value, "Claim for this policy holder has already been lodged!");
          this.buynow.reset();
          cust = true;
          break;
        }
      }
    })
    if (!cust) {
      if (this.buynow.controls['type'].value && this.buynow.controls['id'].value &&
        this.buynow.controls['bname'].value && this.image && this.buynow.controls['bsurname'].value &&
        this.buynow.controls['phone'].value && this.buynow.controls['altenative'].value &&
        this.buynow.controls['certificate'].value) {
        this._service.getCustomers().subscribe(val => {
          for (let i = 0; i < Object.keys(val).length; i++) {
            if (val[i].idNumber == this.buynow.controls['id'].value) {
              claim = {
                customer_id: val[i].id,
                type: this.buynow.controls['type'].value,
                placeholder_id_no: this.buynow.controls['id'].value,
                name: this.buynow.controls['bname'].value,
                surname: this.buynow.controls['bsurname'].value,
                contact_no: this.buynow.controls['phone'].value,
                alternative_contact: this.buynow.controls['altenative'].value,
                death_certificate: this.image,
                police_report: this.image2,
                completed: true,
                isactive: true
              }
              this._service.postClaim(claim).subscribe((val) => {
                this.buynow.reset();
                this.presentAlert("Claim successfuly", "Your claim has been successfuly lodged!").then(() =>
                  this._router.navigateByUrl("/home")
                );
              }, (err) => {
                this.presentAlert(this.buynow.controls['id'].value, "Claim for this policy holder has already been lodged!");
                this.buynow.reset();
              });
              break;
            } else if (i + 1 == Object.keys(val).length) {
              this.presentAlert(this.buynow.controls['id'].value, "Policy holder does not exist in our database!");
            }
          }
        })
      } else {
        this.presentAlert("Empty Fields", "Please fill in the missing fields!");
      }
    }
  }

  async presentAlert(idNum: string, message: string) {
    const alert = await this._alertController.create({
      header: 'Claim',
      subHeader: idNum,
      message: message,
      buttons: ['OK']
    });
    await alert.present();
  }
}