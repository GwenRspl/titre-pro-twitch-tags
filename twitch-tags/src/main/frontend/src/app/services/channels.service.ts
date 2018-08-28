import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

import {Channel} from '../shared/models/channel';

@Injectable({
  providedIn: 'root'
})
export class ChannelsService {

  private path = '/api/channels';

  constructor(private http: HttpClient) {
    this.getChannels();
    console.log("contructor of service");
  }

  getChannels() {
    return this.http.get<Channel[]>(this.path);
  }

  getChannel(id: number) {
    const getPath = this.path + "/" + id;
    return this.http.get<Channel>(getPath);
  }

  updateChannel(channel: Channel) {
    const updatePath = this.path + "/" + channel.id;
    this.http.put<Channel[]>(updatePath, channel);
  }


}

