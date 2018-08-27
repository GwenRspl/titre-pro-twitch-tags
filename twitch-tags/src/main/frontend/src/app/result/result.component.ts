import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http';

import { Channel } from '../shared/models/channel';

import { ChannelsService } from '../services/channels.service';


@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {
  channels: Channel[];

  constructor(private channelService: ChannelsService) {
  }

  ngOnInit() {
    this.channels = this.channelService.getChannels();
  }

  goToProfile(id: number) {
    // let channelToGoTo: Channel;
    // this.channels.forEach(channel => {
    //   if (channel.id === id) {
    //     channelToGoTo = channel;
    //   }
    // });
    // this.channelService.putChannel(channelToGoTo);
  }

  onGet() {
    this.channelService.getChannelsFromApi()
      .subscribe(
        (channels: any[]) => this.channels = channels,
        (error) => console.log(error)
      );
  }


}
