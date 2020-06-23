import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

firstPartAccount: any
fullAccount = {
  familyName: "", 
  email: "", 
  password: ""
}


  constructor(
    private route: ActivatedRoute
    
  ) { }

  ngOnInit() {
    this.firstPartAccount = this.route.queryParams.subscribe(params =>{ 
      this.fullAccount.familyName = params.familyName
      this.fullAccount.email = params.email
      console.log(this.fullAccount)

    })

 
  
  }




}
