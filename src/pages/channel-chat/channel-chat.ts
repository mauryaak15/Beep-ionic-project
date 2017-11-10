import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Channel } from "../../models/channel/channel.interface";
import { ChatService } from "../../providers/chat/chat.service";
import { FirebaseListObservable } from "angularfire2/database-deprecated";
import { ChannelMessage } from "../../models/channel/channel-message.inetrface";

/**
 * Generated class for the ChannelChatPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-channel-chat',
  templateUrl: 'channel-chat.html',
})
export class ChannelChatPage {

  channel: Channel;
  channelMessages: FirebaseListObservable<ChannelMessage[]>;
  content: string;

  constructor(private navCtrl: NavController, private navParams: NavParams, private chat: ChatService) {
  }

  sendMessage(content: string) {
    if(content){
      let channelMessage: ChannelMessage = {
        'content': content,
        'date': new Date().toString()
      }
      this.chat.sendChannelChatMessage(this.channel.$key, channelMessage);
    }
  }

  ionViewWillLoad() {
    this.channel = this.navParams.get('channel');
    this.channelMessages = this.chat.getChannelChatRef(this.channel.$key);
  }

}
