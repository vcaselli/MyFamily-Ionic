import { Injectable } from '@angular/core';
import { MemberDTO } from 'src/app/models/memberDTO';
import { HttpClient } from '@angular/common/http';
import { API_CONFIG } from 'src/app/config/api-config';

@Injectable()
export class MemberService{ 

    constructor(
        private http: HttpClient
    ){ }
    
    post(data: MemberDTO){
        this.http.post(
            `${API_CONFIG.baseUrl}/membros`,
            data, { 
                observe: 'response',
                responseType: 'text'
            }
        )

    }

}