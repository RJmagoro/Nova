import { Component, OnInit } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Storage } from '@ionic/storage';
import { NovasonLifeService } from './novason-life.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent implements OnInit {
  public title: string = 'Login';
  public url: string = '/signin';
  public icon: string = 'log-in';

  ngOnInit() { }

  public appPages = [
    {
      title: 'Home',
      url: '/landing',
      icon: 'home'

    },
    {
      title: "Profile",
      url: '/profile',
      icon: 'person'
    },
    {
      title: "Logout",
      url: '/landing',
      icon: 'log-out'
    },
    {
      title: 'Products',
      url: '/products',
      icon: 'list'
    },
    // {
    //   title: 'Buy now',
    //   url: '/buynow2',
    //   icon: 'cart'
    // },
    {
      title: 'Claims',
      url: '/claims',
      icon: 'cash'
    },
    {
      title: 'Contacts',
      url: '/contacts',
      icon: 'call'
    },
    {
      title: 'Help',
      url: '/help',
      icon: 'help-circle'
    }
  ];
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private _storage: Storage,
    private _service: NovasonLifeService
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}
