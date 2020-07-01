import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MemberService } from 'src/app/services/domain/memberService';
import { AccountService } from 'src/app/services/domain/accountService';
import { StorageService } from 'src/app/services/storageService';
import { MemberDTO } from 'src/app/models/memberDTO';
import { iif } from 'rxjs';

@Component({
  selector: 'app-new-profile',
  templateUrl: './new-profile.page.html',
  styleUrls: ['./new-profile.page.scss'],
})
export class NewProfilePage implements OnInit {

  id;
  pin
  errorMsg


  data: MemberDTO = {
    firstName: "",
    birthDate: "",
    gender: "",
    familyRelationship: "",
    parentalControl: [4],
    pin: null,
    points: 0
  }

  constructor(
    private router: Router,
    private service: MemberService,
    private account: AccountService,
    private storage: StorageService
  ) { }

  ngOnInit() {
    this.findId()
  }


  findId() {
    this.account.findByEmail(
      this.storage.getLocalUser().email
    ).subscribe(response => {
      this.id = response.id
    })
  }


  new() {
    this.service.post(this.data, this.id).subscribe(response => {
      this.router.navigate(['/perfil']).then(response => {
        location.reload()
      })

    })

  }


pinComparator(){ 
  if(this.pin == this.data.pin && this.pin != null && this.data.pin
    != null){ 
    return true
  }
  return false
}


add(){ 
  if(this.pinComparator() == true){ 
   return  this.new()
  }
  return this.errorMsg = "confirmação de pin diferente ou pins vazios"
}


}



