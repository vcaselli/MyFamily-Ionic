import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { stringify } from 'querystring';
import { StorageService } from 'src/app/services/storageService';
import { Router } from '@angular/router';
import { AccountService } from 'src/app/services/domain/accountService';


@Component({
  selector: 'app-pin',
  templateUrl: './pin.component.html',
  styleUrls: ['./pin.component.scss'],
})
export class PinComponent implements OnInit {

  @Input() id: string;

  profilePin
  pin
  errorMsg

  constructor(
    private modalCtrl: ModalController,
    private storage: StorageService,
    private router: Router,
    private as: AccountService
  ) { }

  ngOnInit() {

    this.load()
  }


  load() {
    let localUser = this.storage.getLocalUser()
    if (localUser && localUser.email) {
      this.as.findByEmail(localUser.email)
        .subscribe(response => {
          let profiles = []
          profiles = response.profiles

          profiles.map(element => {
            if (element.id == this.id) {
              this.profilePin = element.pin


            }
          })

        }, error => {
          this.router.navigate(['/'])

        })
    }
  }

pinController(){ 

  if(this.profilePin == this.pin){ 
    return this.close()
  }
  return this.errorMsg = "Pin Incorreto"
}

  close() {
    this.modalCtrl.dismiss()
  }

}
