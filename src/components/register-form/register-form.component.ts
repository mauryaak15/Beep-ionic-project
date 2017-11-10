import { Component, Output, EventEmitter } from '@angular/core';
import { AuthService } from "../../providers/auth/auth.service";
import { Account } from '../../models/account/account.interface';
import { LoginResponse } from "../../models/login/login-response.interface";
import { LoadingController, Loading } from "ionic-angular";


/**
 * Generated class for the RegisterFormComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'app-register-form',
  templateUrl: 'register-form.component.html'
})
export class RegisterFormComponent {

  account = {} as Account;
  @Output() registerStatus: EventEmitter<LoginResponse>;

  constructor(private auth: AuthService, private loading: LoadingController) {
    this.registerStatus = new EventEmitter<LoginResponse>();
  }

  async register() {
    let loader: Loading;
    if(!loader){
      loader = this.loading.create({
        content: 'Loading...'
      });
      loader.present();
    }
    const registerResponse: LoginResponse = await this.auth.createUserWithEmailAndPassword(this.account);
    if(loader){
      loader.dismiss();
    }
    this.registerStatus.emit(registerResponse);
  }
}
