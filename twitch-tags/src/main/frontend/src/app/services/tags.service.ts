import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Channel} from "../shared/models/channel.model";

@Injectable({
  providedIn: 'root'
})
export class TagsService {

  private defaultPath = 'http://localhost:8080/api/tags/';

  constructor(private http: HttpClient) {
  }

  getTags() {
    return this.http.get<Channel[]>(this.defaultPath);
  }
}
