import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import { DataService } from "../../providers/data/data.service";
import { AuthService } from "../../providers/auth/auth.service";
import { User } from "firebase/app";
import { Profile } from "../../models/profile/profile.interface";
import { LoadingController, Loading } from "ionic-angular";

/**
 * Generated class for the ProfileViewComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: "app-profile-view",
  templateUrl: "profile-view.component.html"
})
export class ProfileViewComponent implements OnInit {
  userProfile: Profile;
  private loader: Loading;
  @Output() existingProfile: EventEmitter<Profile>;

  ngOnInit(): void {
    this.loader.present();    
    this.data.getAuthenticatedUserprofile().subscribe(profile => {
      this.userProfile = profile;
      this.existingProfile.emit(this.userProfile);
      this.loader.dismiss();
    });
  }
  constructor(private data: DataService, private auth: AuthService, private loading: LoadingController) {
    this.existingProfile = new EventEmitter<Profile>();
    this.loader = this.loading.create({
      content: 'Loading Profile...'
    });
    
  }
}
