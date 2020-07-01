import { Component, OnInit } from '@angular/core';
import { NavController, ModalController, AlertController } from '@ionic/angular';
import { StorageService } from 'src/app/services/storageService';
import { AccountService } from 'src/app/services/domain/accountService';
import { AccountDTO } from 'src/app/models/accountDTO';
import { Router } from '@angular/router';
import { PinComponent } from 'src/app/components/modal/pin/pin.component';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit {

  user;
  profiles;
 

  constructor(
    private navCtrl: NavController,
    private storage: StorageService,
    private as: AccountService,
    private router: Router,
    private modalController: ModalController,
    private alertCtrl: AlertController
  ) { 
    
  }

  ngOnInit() {
    this.load()

  }

  async exit() {
    await this.storage.setLocalUser(null)
    this.navCtrl.navigateBack('/login')
  }

  //this method returns all information from main account
  load() {
    let localUser = this.storage.getLocalUser()
    if (localUser && localUser.email) {
      this.as.findByEmail(localUser.email)
        .subscribe(response => {
          this.user = response as AccountDTO
          this.profiles = this.user.profiles;


        }, error => {
          this.router.navigate(['/'])

        })
    }
  }


  async pin(id: string) {
    let name = "victor"
    const modal = await this.modalController.create({
      component: PinComponent,
      cssClass: 'Pin-component.scss', 
      componentProps: { 
        'id': id
      }
    });
    return await modal.present();
  }


newProfile(){ 
  if(this.profiles.length < 5){ 
   return this.router.navigate(['/new-profile'])
  }
  return this.alert()
}  

async alert(){ 
  const alert = await this.alertCtrl.create({ 
    header: "Máximo de perfis", 
    message: "Sua família atingiu o máximo de perfis permitidos",
    buttons: [{
      text: "Fechar", 
      role: "Fechar"
    }]
  })
  alert.present()
}



}
