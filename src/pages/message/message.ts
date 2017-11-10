import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Profile } from "../../models/profile/profile.interface";
import { Message } from "../../models/messages/messages.interface";
import { AuthService } from '../../providers/auth/auth.service';
import { DataService } from '../../providers/data/data.service';
import { ChatService } from "../../providers/chat/chat.service";
import { Observable } from "rxjs/Observable";

/**
 * Generated class for the MessagePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-message',
  templateUrl: 'message.html',
})
export class MessagePage {

  selectedProfile: Profile;
  userProfile: Profile;

  messageList: Observable<Message[]>;
  userId: string;


  constructor(private navCtrl: NavController, private navParams: NavParams, private auth: AuthService, private data: DataService, private chat: ChatService) {
    
  }

  async sendMessage(content: string) {
    try {
      const message: Message = {
        content: content,
        userToId: this.selectedProfile.$key,
        userToProfile: {
          firstName: this.selectedProfile.firstName,
          lastName: this.selectedProfile.lastName
        },
        userFromId: this.userId,
        userFromProfile: {
          firstName: this.userProfile.firstName,
          lastName: this.userProfile.lastName
        }
      }
      if(message.content != undefined || message.content != '') {
        await this.chat.sendChat(message);        
      }

    } catch (e) {
      console.log(e);
    }
  }
  
  ionViewWillLoad() {
    this.selectedProfile = this.navParams.get('profile');
    this.data.getAuthenticatedUserprofile()
      .subscribe(profile => {
        this.userProfile = profile;
        this.userId = profile.$key;
      });

    this.messageList = this.chat.getchats(this.selectedProfile.$key);
  }

}
