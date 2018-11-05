export class LinkTagChannelUserInfo {
  channelId: number;
  tagId: number;
  userId: number;


  constructor(channelId: number, tagId: number, userId: number) {
    this.channelId = channelId;
    this.tagId = tagId;
    this.userId = userId;
  }
}
