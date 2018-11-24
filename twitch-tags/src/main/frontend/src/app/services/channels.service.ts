import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

import {Channel} from '../shared/models/channel.model';
import {TwitchChannel} from "../shared/models/twitch-channel.model";
import {catchError} from "rxjs/operators";
import {throwError} from "rxjs/internal/observable/throwError";

@Injectable({
  providedIn: 'root'
})
export class ChannelsService {

  private defaultPath = '/api/channels/';
  private createPath = this.defaultPath + 'create';
  private existencePath = this.defaultPath + 'is-present';
  private searchPath = this.defaultPath + 'search';
  private searchNamePath = this.defaultPath + 'search/name';
  private twitchApiPath = 'https://api.twitch.tv/kraken/channels/';
  private twitchApiHeaders = new HttpHeaders().set('Client-ID','wbgsc1jmwkz93veikuxudvjwh18d39');

  constructor(private http: HttpClient) {
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
    return this.http.post<Channel>(this.createPath, channel);
  }

  deleteChannel(channel: Channel) {
    const idPath = this.defaultPath + channel.id;
    return this.http.delete(idPath);
  }

  getDataFromTwitchApi(channel: string) {
    const path = this.twitchApiPath + channel;
    return this.http.get<TwitchChannel>(path,{
      headers: this.twitchApiHeaders
    }).pipe(catchError( err => throwError(err)));
  }

  alreadyExist(channelName: string) {
    return this.http.post(this.existencePath, channelName);
  }

  search(tags: string){
    return this.http.get(this.searchPath + '?tag=' + tags);
  }

  searchName(name: string){
    return this.http.get(this.searchNamePath + '?channel=' + name);
  }
}

