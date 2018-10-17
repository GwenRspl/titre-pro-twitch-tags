import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Channel} from "../shared/models/channel.model";
import {Tag} from "../shared/models/tag.model";

@Injectable({
  providedIn: 'root'
})
export class TagsService {

  private defaultPath = 'http://localhost:8080/api/tags/';
  private existencePath = this.defaultPath + 'is-present/';
  private createPath = this.defaultPath + 'create/';

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

}
