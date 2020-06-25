
import { Injectable } from "@angular/core";
import { StorageKeys } from './storageKeys';
import { LocalUser } from '../models/localUser';



@Injectable()
export class StorageService{ 
    
    getLocalUser(): LocalUser{ 
        let usr = localStorage.getItem(StorageKeys.localUser)
        if(usr == null){ 
            return null
        }else{
            return JSON.parse(usr)
        }
    }

    setLocalUser(obj: LocalUser){ 
        if(obj == null){
            localStorage.removeItem(StorageKeys.localUser)
        }else{
            localStorage.setItem(StorageKeys.localUser, JSON.stringify(obj))
        }

    }

   

    
    
}