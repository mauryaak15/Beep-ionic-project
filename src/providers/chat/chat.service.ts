import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/observable/forkJoin';
import 'rxjs/add/operator/first';
import {
  AngularFireDatabase,
  FirebaseListObservable
} from "angularfire2/database-deprecated";
import { Channel } from "../../models/channel/channel.interface";
import { ChannelMessage } from "../../models/channel/channel-message.inetrface";
import { Message } from "../../models/messages/messages.interface";
import { AuthService } from '../auth/auth.service';
import { Observable } from "rxjs/Observable";

/*
  Generated class for the ChatProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ChatService {

  constructor(private database: AngularFireDatabase, private auth: AuthService) {
    
  }
  addChannel(channelName: string) {
    this.database.list(`/channel-names/`).push({name: channelName});
  }

  getChannelListRef(): FirebaseListObservable<Channel[]> {
    return this.database.list('channel-names');
  }

  getChannelChatRef(key: string) {
    return this.database.list(`/channels/${key}`);
  }

  async sendChannelChatMessage(channelKey: string, message: ChannelMessage) {
    await this.database.list(`/channels/${channelKey}`).push(message);
  }

  async sendChat(message: Message) {
    await this.database.list(`/messages`).push(message);
  }

  getchats(userTwoId: string) {
    return this.auth.getAuthenticatedUser()
      .map(auth => auth.uid)
      .mergeMap(uid => this.database.list(`/user-messages/${uid}/${userTwoId}`))
      .mergeMap(chats => {
        return Observable.forkJoin(
          chats.map(chat => this.database.object(`/messages/${chat.$key}`)
          .first()),
          (...vals: Message[]) => {
            console.log('helo');
            console.log(vals);
            return vals;
          }
        )
      })
  }

}


