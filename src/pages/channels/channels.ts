import { Component } from "@angular/core";
import {
  IonicPage,
  NavController,
  NavParams,
  AlertController,
  LoadingController,
  Loading
} from "ionic-angular";
import { ChatService } from "../../providers/chat/chat.service";
import { Channel } from "../../models/channel/channel.interface";
import { Observable } from "rxjs/Observable";

/**
 * Generated class for the ChannelsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-channels",
  templateUrl: "channels.html"
})
export class ChannelsPage{
  
  channelList: Observable<Channel[]>;
  loader: Loading;

  constructor(
    private chat: ChatService,
    private navCtrl: NavController,
    private navParams: NavParams,
    private aletrCtrl: AlertController,
    private loading: LoadingController
  ) {
    this.loader = this.loading.create({
      content: 'Loading...'
    });
  }

  getChannels() {
    this.loader.present();
    this.channelList = this.chat.getChannelListRef();
    this.loader.dismiss();
  }
  showAddChannelDialog() {
    this.aletrCtrl
      .create({
        title: "Add Channel",
        inputs: [
          {
            name: "channelName"
          }
        ],
        buttons: [
          {
            text: "Cancel",
            role: "cancel"
          },
          {
            text: "Add",
            handler: data => {
              this.chat.addChannel(data.channelName);
            }
          }
        ]
      })
      .present();
  }

  selectChannel(channel: Channel) {
    this.navCtrl.push('ChannelChatPage', {'channel': channel});
  }

  ionViewWillLoad() {
    console.log('hello channels');
    this.getChannels();    
  }
  
}
