import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { LoginFormComponent } from './login-form/login-form.component';
import { RegisterFormComponent } from './register-form/register-form.component';
import { EditProfileFormComponent } from './edit-profile-form/edit-profile-form.component';
import { ProfileViewComponent } from './profile-view/profile-view.component';
import { ProfileSearchComponent } from './profile-search/profile-search.component';
import { SendMessageBoxComponent } from './send-message-box/send-message-box.component';
import { ChatMessageComponent } from './chat-message/chat-message.component';
import { OnlineUsersComponent } from './online-users/online-users.component';
@NgModule({
	declarations: [LoginFormComponent,
    RegisterFormComponent,
    EditProfileFormComponent,
    ProfileViewComponent,
    ProfileSearchComponent,
    SendMessageBoxComponent,
    ChatMessageComponent,
    OnlineUsersComponent],
	imports: [IonicModule],
	exports: [LoginFormComponent,
    RegisterFormComponent,
    EditProfileFormComponent,
    ProfileViewComponent,
    ProfileSearchComponent,
    SendMessageBoxComponent,
    ChatMessageComponent,
    OnlineUsersComponent]
})
export class ComponentsModule {}
