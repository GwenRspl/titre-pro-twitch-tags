import {Component, OnInit} from '@angular/core';

import {Channel} from '../../shared/models/channel.model';
import {SearchService} from '../search.service';
import {TagItem} from '../../shared/models/tag-item.model';
import {TagItemService} from '../../services/tag-item.service';


@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {
  channels: Channel[];
  array;

  constructor(private service: SearchService, private tagItemService: TagItemService) {
    this.channels = [];
  }

  ngOnInit() {
    this.channels = this.service.searchResult;
    this.putChannelsInArray();
    this.service.resultChanged.subscribe(
      (channels : Channel[]) => {
        this.channels = channels;
        this.putChannelsInArray();
      }
    )
  }
  updateChannelAndTags(event) {
    this.channels = this.service.searchResult;
    this.putChannelsInArray();
  }

  putChannelsInArray() {
    this.array = [];
    for(let channel of this.channels) {
      let tagItems: TagItem[] = this.tagItemService.prepArrayTag(channel.channelTagUserLinks);
      let objectArray = [];
      objectArray.push(channel,tagItems);
      this.array.push(objectArray);
    }
  }


}
