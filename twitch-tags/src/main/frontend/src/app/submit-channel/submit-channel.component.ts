import { Component, OnInit } from '@angular/core';
import {ChannelsService} from "../services/channels.service";
import {Channel} from "../shared/models/channel.model";
import {Router} from "@angular/router";

@Component({
  selector: 'app-submit-channel',
  templateUrl: './submit-channel.component.html',
  styleUrls: ['./submit-channel.component.css']
})
export class SubmitChannelComponent implements OnInit {

  submittedChannel: string;

  constructor(private service: ChannelsService, private router: Router) { }

  ngOnInit() {
  }

  submitChannel(){
    console.log('Tag ' + this.submittedChannel + ' submitted !');
    this.service.alreadyExist(this.submittedChannel).subscribe((data: boolean) => {
      if(data) {
        console.log("this channel already exist in database")
      } else {
        this.service.getDataFromTwitchApi(this.submittedChannel).subscribe(data => {
          console.log(data);
          if(data.status == '404') {
            console.log('channel does not exist');
          } else {
            let status = 'NONE';
            if (data.partner) status = 'PARTNER';

            let channel: Channel = new Channel(data.display_name, data.url, data.broadcaster_language, data.logo, data.followers, data.partner, status );
            console.log(channel);
            this.service.saveChannel(channel).subscribe(data => {
              console.log(data);
              this.router.navigate(['/profile/' + data.id]);
            })
          }
        }, error1 => console.log("Channel not found " + error1.toString()))
      }
    });
  }

}
