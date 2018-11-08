import { Component, OnInit } from '@angular/core';
import {Channel} from "../../../shared/models/channel.model";
import {ChannelsService} from "../../../services/channels.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-channels-dashboard',
  templateUrl: './channels-dashboard.component.html',
  styleUrls: ['./channels-dashboard.component.css']
})
export class ChannelsDashboardComponent implements OnInit {
  channels: Channel[];
  submittedChannel: string;

  constructor(private channelService: ChannelsService, private router: Router) { }

  ngOnInit() {
    this.channelService.getChannels().subscribe(
      (channels: Channel[]) => {
        this.channels = channels;
        this.channels.sort((n1,n2) => {
          if (n1.id > n2.id) {
            return 1;
          }
          if (n1.id < n2.id) {
            return -1;
          }
          return 0;
        });
      },
      error => console.error(error)
    );
  }

  syncAllChannels(){
    let channelProcessed = 0;
    this.channels.forEach(channel => {
      this.channelService.getDataFromTwitchApi(channel.name).subscribe(data => {
        if(data.status == '404') {
          console.log('channel does not exist');
        } else {
          let status = 'NONE';
          if (data.partner) status = 'PARTNER';
          let updatedChannel: Channel = new Channel(data.display_name, data.url, data.broadcaster_language, data.logo, data.followers, data.partner, status );
          updatedChannel.id = channel.id;
          this.channelService.updateChannel(updatedChannel).subscribe(data => {
            channelProcessed++;
            if(channelProcessed === this.channels.length) {
              this.ngOnInit();
            }
          })
        }
      }, error1 => console.log("An error occured: " + error1.toString()))
    });
  }

  syncOneChannel(channel: Channel) {
    this.channelService.getDataFromTwitchApi(channel.name).subscribe(data => {
      if(data.status == '404') {
        console.log('channel does not exist');
      } else {
        let status = 'NONE';
        if (data.partner) status = 'PARTNER';
        let updatedChannel: Channel = new Channel(data.display_name, data.url, data.broadcaster_language, data.logo, data.followers, data.partner, status );
        updatedChannel.id = channel.id;
        this.channelService.updateChannel(updatedChannel).subscribe(() => {
          this.ngOnInit();
        })
      }
    }, error1 => console.log("An error occured: " + error1.toString()))
  }

  deleteOneChannel(channel: Channel) {
    this.channelService.deleteChannel(channel).subscribe(
      () => {
        this.ngOnInit();
      },
      error => {
        console.log(error);
      }
    )
  }

  addNewChannel(){
    this.channelService.alreadyExist(this.submittedChannel).subscribe((data: boolean) => {
      if(data) {
        console.log("this channel already exist in database")
      } else {
        this.channelService.getDataFromTwitchApi(this.submittedChannel).subscribe(data => {
          if(data.status == '404') {
            console.log('channel does not exist');
          } else {
            let status = 'NONE';
            if (data.partner) status = 'PARTNER';
            let channel: Channel = new Channel(data.display_name, data.url, data.broadcaster_language, data.logo, data.followers, data.partner, status );
            this.channelService.saveChannel(channel).subscribe(data => {
              this.ngOnInit();
            })
          }
        }, error1 => console.log("Channel not found " + error1.toString()))
      }
    });
  }

}
