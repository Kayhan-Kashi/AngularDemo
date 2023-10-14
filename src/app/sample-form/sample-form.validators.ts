import { AbstractControl, ValidationErrors } from "@angular/forms";
import { UsernameService } from "../services/username.service";
import { Injectable } from '@angular/core';
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class sampleFormValidators {

    constructor(private _usernameService: UsernameService) {

    }


    static cannotContainSpace(control: AbstractControl) : ValidationErrors | null {
        if((control.value as string).indexOf(' ') != -1) {
            console.log("username contain space");
            return { cannotContainSpace: true };
        }
        return null;
    }

    static passwordIsnotConfirmed(control: AbstractControl) : ValidationErrors | null {
      
        let password = control.get('password');
        let confirmPassword = control.get('confirmPassword');
  
        if(password.value !== confirmPassword.value) {
            console.log("passwordIsnotConfirmed is true");
            return { passwordIsnotConfirmed : true };
        }
        console.log(password.value);
        console.log("passwordIsnotConfirmed is false");
        return null;
    }

     isUsernameTaken(username: string) : Promise<boolean> {
        return new Promise((resolve) => {         
            var res = this._usernameService.isUsernameTaken(username);
            return resolve(res);
        });  
    }
}