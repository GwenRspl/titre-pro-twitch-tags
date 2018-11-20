import { Component, OnInit } from '@angular/core';
import {ChannelsService} from "../../../services/channels.service";
import {Channel} from "../../../shared/models/channel.model";

@Component({
  selector: 'app-popular',
  templateUrl: './popular.component.html',
  styleUrls: ['./popular.component.css']
})
export class PopularComponent implements OnInit {
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
      },
      error => console.error(error)
    );
  }

}
