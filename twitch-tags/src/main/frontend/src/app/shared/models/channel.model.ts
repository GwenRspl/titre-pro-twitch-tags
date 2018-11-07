import { Tag } from './tag.model';
import {ChannelTagUserLink} from "./channel-tag-user-link.model";

export class Channel {
    id: number;
    name: string;
    url: string;
    language: string;
    avatar: string;
    followers: number;
    partner: boolean;
    affiliate: boolean;
    status: string;
    channelTagUserLinks: ChannelTagUserLink[];


  constructor(name: string, url: string, language: string, avatar: string, followers: number, partner: boolean, status: string, channelTagUserLinks?: ChannelTagUserLink[]) {
    this.name = name;
    this.url = url;
    this.language = language;
    this.avatar = avatar;
    this.followers = followers;
    this.partner = partner;
    this.status = status;
    this.affiliate = false;
    if(channelTagUserLinks){
      this.channelTagUserLinks = channelTagUserLinks;
    }
    this.channelTagUserLinks = [];
  }


}
