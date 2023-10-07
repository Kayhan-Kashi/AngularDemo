import { AbstractControl, FormGroup } from "@angular/forms";

export class PasswordValidators {
    static validOldPassword(control: AbstractControl) {
        return new Promise((resolve) => {
            if (control.value !== '123')
                return resolve({ invalidOldPassword: true});
            return resolve(null);
        });
    }

    static passwordsShouldMatch(control: AbstractControl) {
        console.log('checking password matching')
        let newPassword = control.get('newPassword');
        let confirmPassword = control.get('confirmPassword');

        if(newPassword.value !== confirmPassword.value) 
            return { passwordsShouldMatch : true};

        return null;
    }
}