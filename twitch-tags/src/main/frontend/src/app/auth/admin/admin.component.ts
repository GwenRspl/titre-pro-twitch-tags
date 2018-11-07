import { Component, OnInit } from '@angular/core';
import {TokenStorageService} from "../token-storage.service";
import {Channel} from "../../shared/models/channel.model";
import {ChannelsService} from "../../services/channels.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  currentTab: string = 'channels';

  constructor(private tokenStorage: TokenStorageService) { }

  ngOnInit() {
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
