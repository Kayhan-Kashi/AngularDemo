import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsernameService {

  isUsernameTaken(username: string) {
    if(username === 'kayhan') {   
      console.log('inside username is taken')
      return true;
    }
    console.log('outside username is taken')
    return false;
  }
}
  