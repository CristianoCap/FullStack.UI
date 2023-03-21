import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor() { }

  authenticate (username: string, password: string) {
    // console.log('Before set Username in SessionStorage, isUserLoggedIn? ' + this.isUserLoggedIn());
    if(username === 'criacap' && password === 'test') {
      sessionStorage.setItem('authenticatedUser', username);
      // console.log('After set Username in SessionStorage, isUserLoggedIn? ' + this.isUserLoggedIn())
      return true;
    }
    return false;
  }

  isUserLoggedIn() {
    let username = sessionStorage.getItem('authenticatedUser');
    return !(username === null);
  }

  logout() {
    sessionStorage.removeItem('authenticatedUser')
  }
}
