import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { PolicyPage } from '../../modal/policy/policy.page';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-singup',
  templateUrl: './singup.page.html',
  styleUrls: ['./singup.page.scss'],
})
export class SingupPage implements OnInit {

  account: any = {
    familyName: "",
    email: ""
  }

privacyPolicy: boolean = false
msg: string = ""

  constructor(
    private router: Router,
    private modalCtrl: ModalController
  ) { }

  ngOnInit() {
    
  }



  next() {
    if(this.privacyPolicy == true){
    let navigationExtras: NavigationExtras = {
      queryParams: this.account
    
    }
   
    
    this.router.navigate(['/profile'], navigationExtras)
  }else{ 
    this.msg = "You did not accept our policy terms"
  }
    
  }

  async modalTermos() {

    const modaltermos = await this.modalCtrl.create({
      component: PolicyPage
    });

    modaltermos.present();


  }


}