import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Profile } from "../../models/profile/profile.interface";

/**
 * Generated class for the EditProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-edit-profile',
  templateUrl: 'edit-profile.html',
})
export class EditProfilePage {

  profile: Profile;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.profile = this.navParams.get('existingProfile');
  }

  saveProfileResult(event) {
    if(event){
      this.navCtrl.setRoot('TabsPage');
    }else{
      console.log('Not aunthenticated or saved');
    }
  }
}
