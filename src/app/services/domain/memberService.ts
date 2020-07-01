import { Injectable } from '@angular/core';
import { MemberDTO } from 'src/app/models/memberDTO';
import { HttpClient } from '@angular/common/http';
import { API_CONFIG } from 'src/app/config/api-config';

@Injectable()
export class MemberService{ 

    constructor(
        private http: HttpClient
    ){ }
    
    post(data: MemberDTO, id: String){
      return  this.http.post(
            `${API_CONFIG.baseUrl}/profiles/${id}`,
            data, { 
                observe: 'response',
                responseType: 'text'
            }
        )

    }

}