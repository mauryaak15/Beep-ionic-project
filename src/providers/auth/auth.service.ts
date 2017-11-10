import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { Account } from "../../models/account/account.interface";
import { LoginResponse } from "../../models/login/login-response.interface";

/*
  Generated class for the AuthProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AuthService {

  constructor(private afAuth: AngularFireAuth) {
    
  }

  getAuthenticatedUser() {
    return this.afAuth.authState;
  }

  signOut() {
    this.afAuth.auth.signOut();
  }


  async signInWithEmailAndPassword(account: Account) {
    try{
      return <LoginResponse> {
        result: await this.afAuth.auth.signInWithEmailAndPassword(account.email, account.password)
      };
    }catch(e) {
      return <LoginResponse> {
        error: e
      };
    }
  }

  async createUserWithEmailAndPassword(account: Account) {
    try{
      return <LoginResponse> {
        result: await this.afAuth.auth.createUserWithEmailAndPassword(account.email, account.password)
      };
    }catch(e) {
      return <LoginResponse> {
        error: e
      };
    }
  }

}
