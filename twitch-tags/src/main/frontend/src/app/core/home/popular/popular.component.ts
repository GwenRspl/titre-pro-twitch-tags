import { Component, OnInit } from '@angular/core';
import {ChannelsService} from '../../../services/channels.service';
import {Channel} from '../../../shared/models/channel.model';
import {TagItem} from '../../../shared/models/tag-item.model';
import {TagItemService} from '../../../services/tag-item.service';

@Component({
  selector: 'app-popular',
  templateUrl: './popular.component.html',
  styleUrls: ['./popular.component.css']
})
export class PopularComponent implements OnInit {
  channels: Channel[];
  array;

  constructor(private channelService: ChannelsService, private tagItemService: TagItemService) {
    this.channels = [];
  }

  ngOnInit() {
    this.getChannels();
  }

  updateChannelAndTags(event){
    this.getChannels();
  }

  getChannels() {
    this.channelService.getChannels().subscribe(
      (channels: Channel[]) => {
        this.channels = channels;
        this.array = [];
        for(let channel of channels) {
          let tagItems: TagItem[] = this.tagItemService.prepArrayTag(channel.channelTagUserLinks);
          let objectArray = [];
          objectArray.push(channel,tagItems);
          this.array.push(objectArray);
        }
      },
      error => console.error(error)
    );
  }

}
