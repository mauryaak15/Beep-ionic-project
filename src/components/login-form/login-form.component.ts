import { Component, Output, EventEmitter } from '@angular/core';
import { NavController, NavParams, LoadingController, Loading } from "ionic-angular";
import { Account } from '../../models/account/account.interface';
import { LoginResponse } from "../../models/login/login-response.interface";
import { AuthService } from "../../providers/auth/auth.service";

/**
 * Generated class for the LoginFormComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'app-login-form',
  templateUrl: 'login-form.component.html'
})
export class LoginFormComponent {

  account = {} as Account;  
  @Output() loginStatus: EventEmitter<LoginResponse>;

  constructor(private navCtrl: NavController, private loading: LoadingController, private auth: AuthService) {
    this.loginStatus = new EventEmitter<LoginResponse>();
  }

  async login() {
    let loader: Loading;
    if(!loader){
      loader = this.loading.create({
        content: 'Loading...'
      });
      loader.present();
    }
    const loginResponse: LoginResponse = await this.auth.signInWithEmailAndPassword(this.account);  
    if(loader){
      loader.dismiss();
    }   
    this.loginStatus.emit(loginResponse);
  }

  navigateToRegisterPage() {
    this.navCtrl.push('RegisterPage');
  }


}
