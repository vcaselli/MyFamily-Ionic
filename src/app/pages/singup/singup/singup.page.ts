import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { PolicyPage } from '../../modal/policy/policy.page';
import { ModalController } from '@ionic/angular';
import { AccountDTO } from 'src/app/models/accountDTO';

@Component({
  selector: 'app-singup',
  templateUrl: './singup.page.html',
  styleUrls: ['./singup.page.scss'],
})
export class SingupPage implements OnInit {

  account: AccountDTO = {
    id: null,
    familyName: "",
    email: "",
    password: "56",
    state: "",
    city: "",
    profiles: null
  }

  privacyPolicy: boolean = false
  msg: string = ""

  constructor(
    private router: Router,
    private modalCtrl: ModalController
  ) { }

  ngOnInit() {

  }


  //this method stores data information about the first step of registration account and send to next page
  next() {
    if (this.privacyPolicy == true) {
      let navigationExtras: NavigationExtras = {
        queryParams: this.account

      }


      this.router.navigate(['/profile'], navigationExtras)
    } else {
      this.msg = "Você não aceitou os termos"
    }

  }

  async modalTermos() {

    const modaltermos = await this.modalCtrl.create({
      component: PolicyPage
    });

    modaltermos.present();


  }


}