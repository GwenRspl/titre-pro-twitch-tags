import {Component, OnInit} from '@angular/core';

import {Channel} from '../shared/models/channel';

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
    console.log("in contrusct");
  }

  ngOnInit() {
    this.getChannels();
    console.log("on init");
  }

  getChannels() {
    this.channelService.getChannels().subscribe(
      (channels: Channel[]) => {
        this.channels = channels;
      },
      error => console.error(error),
      () => console.log('done loading channels')
    );
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

  // onGet() {
  //   this.channelService.getChannels()
  //     .subscribe(
  //       (channels: any[]) => this.channels = channels,
  //       (error) => console.log(error)
  //     );
  // }


}
