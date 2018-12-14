import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Tag} from '../shared/models/tag.model';
import {LinkTagChannelUserInfo} from './link-tag-channel-user-info';

@Injectable({
  providedIn: 'root'
})
export class TagsService {

  private defaultPath = '/api/tags/';
  private getByNamePath = '/api/tags/search-by-name/';
  private existencePath = this.defaultPath + 'is-present/';
  private createPath = this.defaultPath + 'create/';
  private linkTagChannelPath = '/api/channel-tag-user-link/create';

  constructor(private http: HttpClient) {
  }

  getTags() {
    return this.http.get<Tag[]>(this.defaultPath);
  }

  createTag(tag: Tag){
    return this.http.post<Tag>(this.createPath, tag);
  }

  tagExists(tagName: string){
    const path = this.existencePath + tagName;
    return this.http.get<boolean>(path);
  }

  addTagToChannel(link: LinkTagChannelUserInfo) {
    return this.http.post<string>(this.linkTagChannelPath, link);
  }

  updateTag(tag: Tag){
    let updatePath = this.defaultPath + tag.id;
    return this.http.put<Tag>(updatePath, tag);
  }
  deleteTag(tag: Tag){
    let deletePath = this.defaultPath + tag.id;
    return this.http.delete<Tag>(deletePath);
  }

  getTag(name: string) {
    let path = this.getByNamePath + name;
    return this.http.get<Tag>(path);
  }

}
