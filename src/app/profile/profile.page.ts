import { Customer } from './../class/customer';
import { Component, OnInit, Input } from '@angular/core';
import { NovasonLifeService } from '../novason-life.service';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
  public name: string;
  public policy: string = "No";
  public user: Customer;
  @Input() pic: string = "/assets/images/Profile/_ionicons_svg_md-contact.svg";

  constructor(private _service: NovasonLifeService, private _storage: Storage) { }

  ngOnInit() {
    this.getUser();
  }

  getUser() {
    this._service.customerGetSession().then(val => {
      this.user = JSON.parse(val);
      if (JSON.parse(val).name != null) {
        this.name = JSON.parse(val).name + " " + JSON.parse(val).surname;
      } else {
        this.name = JSON.parse(val).email;
      }

      if (JSON.parse(val).profilePhoto != null) {
        this.pic = "data:image/png;base64," + JSON.parse(val).profilePhoto;
      }

      this._service.getAllPlans().subscribe(res => {
        this._storage.get("policy").then(val => {
          if (val) {
            this.policy = val;
          }
        });
        for (let i = 0; i < Object.keys(res).length; i++) {
          if (res[i].customer_id == JSON.parse(val).id) {
            this.policy = "1";
            break;
          }
        }
      })
    });
  }

  uploadFile(event) {
    let file = event.target.files[0];
    let fr = new FileReader();
    fr.onload = (event: any) => {
      let base64 = event.target.result;
      this.user.profilePhoto = base64.split(',')[1];
      this._service.putCustomer(this.user.id, this.user).subscribe(res => {
        this._service.customerSetSession(this.user);
        this.pic = base64;
      });
    }
    fr.readAsDataURL(file);
  }
}