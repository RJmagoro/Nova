import { Component, OnInit } from '@angular/core';
import { NovasonLifeService } from '../novason-life.service';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.page.html',
  styleUrls: ['./landing.page.scss'],
})
export class LandingPage implements OnInit {
  user: any = false;
  constructor(private _service: NovasonLifeService) { }

  ngOnInit() {
    this._service.customerGetSession().then(val => {
      this.user = JSON.parse(val);
    });
  }

}
