import { AbstractControl, ValidationErrors } from "@angular/forms";

export class UsernameValidators {
    static cannotContainSpace(control: AbstractControl) : ValidationErrors | null {
        if((control.value as string).indexOf(' ') != -1) 
            return { cannotContainSpace: true};
        return null;       
    }
    static shouldBeUnique(control: AbstractControl) : Promise<ValidationErrors> | null {
        return new Promise((resolve, reject) => {
            setTimeout(() => {  // this is asynchronous operation and it does not block operation              
                if (control.value === 'mosh') 
                    resolve({ shouldBeUnique: true });                            
                else 
                    return resolve(null);
            }, 2000);
        });
    }
}