import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AccountService } from 'src/app/services/domain/accountService';
import { MemberService } from 'src/app/services/domain/memberService';
import { MemberDTO } from 'src/app/models/memberDTO';
import { Auth } from 'src/app/services/auth';
import { AccountDTO } from 'src/app/models/accountDTO';
import { CredencialsDTO } from 'src/app/models/credencialsDTO';
import { ThrowStmt } from '@angular/compiler';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  dataPage = []
  fullAccount;

  profile: MemberDTO = {
    fullName: "",
    birthDate: "",
    gender: "",
    points: null,
    familyRelationship: "",
    parentalControl: 0,
    pin: null
  }

  pinConfirmation: number = null
  passwordConfirmation: String = null

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private as: AccountService, 
    private ms: MemberService, 
    private auth: Auth

  ) { }

  ngOnInit() {
    //receiving data from other page called 'SingUp'
    this.route.queryParams.subscribe(params => {
      this.dataPage.push(params)

    })
    //this is the main variable to send to our server later
    this.fullAccount = [...this.dataPage] as unknown as AccountDTO   
  }

  //post method of main account
  finishFullAccount() {
    if (this.passComparetor() == true) {
      this.as.post(this.fullAccount[0])
      .subscribe(response => { 
        let body = response.body
        this.finishProfile(body.charAt(6))
      
      })


    } else {

    }
  }

  //post method of member profile
  finishProfile(id) {
    this.ms.post(this.profile, id)
    .subscribe(response => { 
      console.log(this.profile)
      this.loginAfterAccountRegistration(this.fullAccount[0])
      console.log(response)
    
    }) 
    
  }

  passComparetor() {
    if (this.fullAccount.password == this.passwordConfirmation && this.profile.pin == this.pinConfirmation) {

      return true
    }
  }


loginAfterAccountRegistration({email, password}){ 
  let creds: CredencialsDTO = {email, password}
  this.auth.login(creds).subscribe(response =>{
    this.router.navigate(['/perfil'])
 
  })
}

}