import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

import {Channel} from '../shared/models/channel.model';

@Injectable({
  providedIn: 'root'
})
export class ChannelsService {

  private defaultPath = '/api/channels/';
  private createPath = this.defaultPath + '/create';


  constructor(private http: HttpClient) {
    this.getChannels();
  }

  getChannels() {
    return this.http.get<Channel[]>(this.defaultPath);
  }

  getChannel(id: number) {
    const idPath = this.defaultPath + id;
    return this.http.get<Channel>(idPath);
  }

  updateChannel(channel: Channel) {
    const idPath = this.defaultPath + channel.id;
    return this.http.put<Channel[]>(idPath, channel);
  }

  saveChannel(channel: Channel) {
    return this.http.post<Channel>(this.createPath, channel.id);
  }

  deleteChannel(channel: Channel) {
    const idPath = this.defaultPath + channel.id;
    return this.http.delete(idPath);
  }


}

