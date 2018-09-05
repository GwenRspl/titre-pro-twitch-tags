import { Tag } from './tag.model';

export class Channel {
    id: number;
    name: string;
    url: string;
    avatar: string;
    followers: number;
    partner: boolean;
    affiliate: boolean;
    //tags: Tag[];


  constructor(name: string, url: string, avatar: string, followers: number, partner: boolean) {
    this.name = name;
    this.url = url;
    this.avatar = avatar;
    this.followers = followers;
    this.partner = partner;
    this.affiliate = false;
  }
}
