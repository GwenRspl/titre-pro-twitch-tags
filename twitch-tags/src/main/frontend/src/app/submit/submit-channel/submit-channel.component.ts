import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {Title} from '@angular/platform-browser';

import {ChannelsService} from "../../services/channels.service";
import {Channel} from "../../shared/models/channel.model";

@Component({
  selector: 'app-submit-channel',
  templateUrl: './submit-channel.component.html',
  styleUrls: ['./submit-channel.component.css']
})
export class SubmitChannelComponent implements OnInit {

  private _error = false;
  private _message = '';
  submittedChannel: string;

  constructor(private service: ChannelsService, private router: Router, private title: Title) { }

  ngOnInit() {
    this.title.setTitle('TwitchTags - Submit channel');
  }

  submitChannel(){
    this.service.alreadyExist(this.submittedChannel).subscribe((data: boolean) => {
      if(data) {
        this._error = true;
        this._message = 'This channel already exist in database.';
      } else {
        this.service.getDataFromTwitchApi(this.submittedChannel).subscribe(data => {
          if(data.status == '404') {
            this._error = true;
            this._message = 'This channel does not exist.';
          } else {
            let status = 'NONE';
            if (data.partner) status = 'PARTNER';

            let channel: Channel = new Channel(data.display_name, data.url, data.broadcaster_language, data.logo, data.followers, data.partner, status );
            this.service.saveChannel(channel).subscribe(data => {
              this.router.navigate(['/app/profile/' + data.id]);
            })
          }
        }, error1 => {
          console.log("Channel not found " + error1);
          this._error = true;
          this._message = 'This channel does not exist.';
        })
      }
    });
  }


  get error(): boolean {
    return this._error;
  }

  get message(): string {
    return this._message;
  }
}
