import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

import { Channel } from '../shared/models/channel';


@Injectable({
  providedIn: 'root'
})
export class ChannelsService {
  // private channel: Channel;

  private path = 'https://my-json-server.typicode.com/gwenrspl/mock-json/channels/';

  constructor(private http: HttpClient) { }

  getChannels(): Observable<Channel[]> {
    return this.http.get<Channel[]>(this.path)
      .pipe();
  }

  getChannel(id: number): Observable<Channel> {
    const url = `${this.path}/${id}`;
    return this.http.get<Channel>(url).pipe();
  }

  // putChannel(channel: Channel){
  //   this.channel = channel;
  // }

  // retrieveChannel(): Channel {
  //   return this.channel;
  // }

}

