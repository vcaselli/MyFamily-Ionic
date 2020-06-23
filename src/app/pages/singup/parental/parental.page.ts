import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-parental',
  templateUrl: './parental.page.html',
  styleUrls: ['./parental.page.scss'],
})
export class ParentalPage implements OnInit {

  constructor(
    private router: Router,
    private navCtrl: NavController
  ) { }

  ngOnInit() {
  }

  exit(){ 
this.navCtrl.navigateBack('/login')
  }

}
