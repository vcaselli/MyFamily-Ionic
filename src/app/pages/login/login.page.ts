import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CredencialsDTO } from 'src/app/models/credencialsDTO';
import { Auth } from 'src/app/services/auth';
import { getMaxListeners } from 'process';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  cred: CredencialsDTO = {
    email: "",
    password: ""
  }
  errorMsg: String = null

  constructor(
    private router: Router,
    private auth: Auth
  ) { }

  ngOnInit() {
  }

  login() {
    this.auth.login(this.cred).subscribe(response => {
      this.auth.successLogin(response.headers.get('Authorization')) //stores our token in localStorage of html5
      this.router.navigate(['/perfil'])
    }, error => {
      this.errorMsg = "Email ou Senha incorretos"
    })

  }

  singup() {
    this.router.navigate(['/parental'])
  }


}
