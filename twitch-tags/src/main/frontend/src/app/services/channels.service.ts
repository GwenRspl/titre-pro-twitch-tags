import {Injectable, OnInit} from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

import { Channel } from '../shared/models/channel';

@Injectable({
  providedIn: 'root'
})
export class ChannelsService implements OnInit{
  private _channels: Channel[];

  private path = '/api/channels';

  constructor(private http: HttpClient) { }

  getChannelsFromApi() {
    this.http.get<Channel[]>(this.path).pipe().subscribe(
      (channels: Channel[]) => {
        this.setChannels(channels);
        return
      }
    );
  }

  getChannel(id: number):Channel {
    let foundChannel: Channel = null;
    for(let channel of this._channels) {
      if(channel.id === id){
        foundChannel = channel;
      }
    }
    return foundChannel;

  }

  getChannels(): Channel[] {
    return this._channels;
  }

  setChannels(channels: Channel[]) {
    this._channels = channels;
  }

  ngOnInit(): void {
    this.getChannelsFromApi();
  }
}

