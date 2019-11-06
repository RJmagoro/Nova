import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.page.html',
  styleUrls: ['./logout.page.scss'],
})
export class LogoutPage implements OnInit {

  constructor(private _storage: Storage, private router: Router) { }

  ngOnInit() {
    this._storage.clear().then(res => {
      this.router.navigateByUrl("home");
    });
  }

}
