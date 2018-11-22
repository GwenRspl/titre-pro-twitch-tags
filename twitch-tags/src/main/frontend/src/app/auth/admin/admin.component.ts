import { Component, OnInit } from '@angular/core';
import {Title} from '@angular/platform-browser';
import {TokenStorageService} from "../token-storage.service";


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  currentTab: string = 'channels';

  constructor(private tokenStorage: TokenStorageService, private title:Title) { }

  ngOnInit() {
    this.title.setTitle('TwitchTags - Admin');
    this.tokenStorage.isAdmin();
  }

  channelsTab(){
    this.currentTab = 'channels';
  }

  tagsTab(){
    this.currentTab = 'tags';
  }

  usersTab(){
    this.currentTab = 'users';
  }

}
