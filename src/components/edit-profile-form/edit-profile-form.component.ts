import {
  Component,
  OnDestroy,
  Output,
  EventEmitter,
  Input,
  OnInit
} from "@angular/core";
import { Profile } from "../../models/profile/profile.interface";
import { DataService } from "../../providers/data/data.service";
import { AuthService } from "../../providers/auth/auth.service";
import { Subscription } from "rxjs/Subscription";
import { User } from "firebase/app";


@Component({
  selector: "app-edit-profile-form",
  templateUrl: "edit-profile-form.component.html"
})
export class EditProfileFormComponent implements OnDestroy, OnInit {
  
  @Input() profile: Profile;
  private authenticatedUser$: Subscription;
  private authenticatedUser: User;
  @Output() saveProfileResult: EventEmitter<Boolean>;

  constructor(private data: DataService, private auth: AuthService) {
    this.authenticatedUser$ = this.auth
      .getAuthenticatedUser()
      .subscribe((user: User) => {
        this.authenticatedUser = user;
      });
    this.saveProfileResult = new EventEmitter<Boolean>();
  }
  async saveProfile() {
    if (this.authenticatedUser) {
      this.profile.email = this.authenticatedUser.email;
      const result: Boolean = await this.data.saveProfile(
        this.authenticatedUser,
        this.profile
      );
      this.saveProfileResult.emit(result);
    }
  }

  ngOnDestroy(): void {
    this.authenticatedUser$.unsubscribe();
  }

  ngOnInit(): void {
    if(!this.profile){
      this.profile = {} as Profile;
    }
  }
}
