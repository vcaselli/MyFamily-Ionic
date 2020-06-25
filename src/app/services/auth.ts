import { HttpClient } from '@angular/common/http';
import { CredencialsDTO } from '../models/credencialsDTO';
import { API_CONFIG } from '../config/api-config';
import { Injectable } from '@angular/core';
import { LocalUser } from '../models/localUser';
import { JwtHelperService } from '@auth0/angular-jwt';
import { StorageService } from './storageService';


@Injectable()
export class Auth {


    jwtHelper: JwtHelperService = new JwtHelperService();

    constructor(
        private http: HttpClient,
        public storage: StorageService

    ) { }


    login(cred: CredencialsDTO) {
        return this.http.post(
            `${API_CONFIG.baseUrl}/login`,
            cred, {
            observe: 'response',
            responseType: 'text'

            }
        )
    }


    successLogin(authorizationValue: string){ 
        let tok = authorizationValue.substring(7);
        let user: LocalUser = { 
            token:tok,
            email:this.jwtHelper.decodeToken(tok).sub
        }
        this.storage.setLocalUser(user)
    
    }


}