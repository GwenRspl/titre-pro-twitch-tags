import {Component, OnInit} from '@angular/core';

import {Channel} from '../shared/models/channel.model';

import {ChannelsService} from '../services/channels.service';


@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {
  channels: Channel[];

  constructor(private channelService: ChannelsService) {
    this.channels = [];
  }

  ngOnInit() {
    this.getChannels();
  }

  getChannels() {
    this.channelService.getChannels().subscribe(
      (channels: Channel[]) => {
        this.channels = channels;
        console.log(channels);
      },
      error => console.error(error),
      () => console.log('done loading channels')
    );
  }

  goToProfile(id: number) {

  }
}
