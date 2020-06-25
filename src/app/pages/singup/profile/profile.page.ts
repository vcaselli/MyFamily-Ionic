import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  dataPage = []
  fullAccount: any = []
  profile = {
    fullName: "",
    birthDate: "",
    kinship: "",
    parentalControl: "",
    pin: ""
  }
  pinConfirmation: String = null
  passwordConfirmation: String = null

  constructor(
    private route: ActivatedRoute, 
    private router: Router

  ) { }

  ngOnInit() {
    //receiving data from other page called 'SingUp'
    this.route.queryParams.subscribe(params => {
      this.dataPage.push(params)

    })
    //this is the main variable to send to our server later
    this.fullAccount = [...this.dataPage]


  }

  //post method of main account
  finishFullAccount(){ 
    if(this.passComparetor() == true){ 
      this.router.navigate['/']

    }else{ 

    }
  

  }

  finishProfile(){ 

  }

  passComparetor(){ 
    if(this.fullAccount.password == this.passwordConfirmation && this.profile.pin == this.pinConfirmation){

      return true
    }
  }



}
