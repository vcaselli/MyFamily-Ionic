import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { API_CONFIG } from 'src/app/config/api-config';
import { AccountDTO } from 'src/app/models/accountDTO';
import { Observable } from 'rxjs';
import { StorageService } from '../storageService';
import { Router } from '@angular/router';

@Injectable()
export class AccountService {

    constructor(
        private http: HttpClient,
        private storage: StorageService,
        private router: Router

    ) {

    }

    //this method returns the email account of client and add new parameters to local storage
    findByEmail(email: string): Observable<AccountDTO> {
        let token = this.storage.getLocalUser().token;
        let authHeader = new HttpHeaders({ 'Authorization': 'Bearer ' + token });

        return this.http.get<AccountDTO>(
            `${API_CONFIG.baseUrl}/account/email?value=${email}`,
            { 'headers': authHeader });


    }

    //this method returns all information from main account
    load() {
        let localUser = this.storage.getLocalUser()
        if (localUser && localUser.email) {
            this.findByEmail(localUser.email)
                .subscribe(response => {
                    //console.log(response)

                }, error => {
                    this.router.navigate(['/'])

                })
        }
    }

    //insert a new account 
    post(data: AccountDTO) {
        return this.http.post(
            `${API_CONFIG.baseUrl}/account`,
            data, {
            observe: 'response',
            responseType: 'text'
        }
        )
    }
}