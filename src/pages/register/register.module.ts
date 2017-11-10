import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AngularFireAuthModule } from "angularfire2/auth";

import { RegisterPage } from './register';
import { ComponentsModule } from "../../components/components.module";

@NgModule({
  declarations: [
    RegisterPage,
  ],
  imports: [
    IonicPageModule.forChild(RegisterPage),
    ComponentsModule,
    AngularFireAuthModule
  ],
})
export class RegisterPageModule {}
