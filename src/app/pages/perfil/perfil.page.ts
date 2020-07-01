import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { StorageService } from 'src/app/services/storageService';
import { AccountService } from 'src/app/services/domain/accountService';
import { AccountDTO } from 'src/app/models/accountDTO';
import { Router } from '@angular/router';

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
    private router: Router
  ) { }

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

  

}
