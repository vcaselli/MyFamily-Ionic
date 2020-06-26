import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { StorageService } from 'src/app/services/storageService';
import { AccountService } from 'src/app/services/domain/accountService';
import { AccountDTO } from 'src/app/models/accountDTO';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit {

  constructor(
    private navCtrl: NavController,
    private storage: StorageService, 
    private as: AccountService
  ) { }

  ngOnInit() {
    this.as.load()
   
  }

  async exit() {
    await this.storage.setLocalUser(null)
    this.navCtrl.navigateBack('/login')
  }

  
  

}
