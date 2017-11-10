import { Component, OnInit } from "@angular/core";
import { DataService } from "../../providers/data/data.service";
import { Profile } from '../../models/profile/profile.interface';
import { FirebaseListObservable } from "angularfire2/database-deprecated";
import { NavController } from "ionic-angular";
import { AuthService } from "../../providers/auth/auth.service";

/**
 * Generated class for the OnlineUsersComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: "app-online-users",
  templateUrl: "online-users.component.html"
})
export class OnlineUsersComponent implements OnInit {
  userList: FirebaseListObservable<Profile[]>;
  profileId: string;

  ngOnInit(): void {
    this.setUsersOnline();
    this.getOnlineUsers();
  }
  constructor(private data: DataService, private navCtrl: NavController, private auth: AuthService) {}

  setUsersOnline() {
    this.data.getAuthenticatedUserprofile().subscribe((profile: Profile) => {
      this.data.setUserOnline(profile);
      this.profileId = profile.$key;
    });
  }

  getOnlineUsers() {
    this.userList = this.data.getOnlineUsers();
    console.log('profile');
    this.data.getOnlineUsers()
    .subscribe(user => console.log(user));
  }

  openChat(profile: Profile) {
    this.navCtrl.push('MessagePage', {profile});
  }
}
