import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { StorageService } from 'src/app/services/storageService';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit {

  constructor(
    private navCtrl: NavController,
    private storage: StorageService
  ) { }

  ngOnInit() {
  }

  async exit() {
    await this.storage.setLocalUser(null)
    this.navCtrl.navigateBack('/login')
  }

}
