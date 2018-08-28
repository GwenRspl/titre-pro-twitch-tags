import {Channel} from "./channel.model";
import {Tag} from "./tag.model";
import {User} from "./user.model";

export interface ChannelTagUserLink {
  id: number;
  channel: Channel;
  tag: Tag;
  user: User;

}
