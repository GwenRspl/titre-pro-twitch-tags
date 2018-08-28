import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Data, Params, Router} from '@angular/router';
import {Location} from '@angular/common';

import {Channel} from '../shared/models/channel';
import {ChannelsService} from '../services/channels.service';

@Component({
  selector: 'app-channel-profile',
  templateUrl: './channel-profile.component.html',
  styleUrls: ['./channel-profile.component.css']
})

export class ChannelProfileComponent implements OnInit {
  channel: Channel;
  //tags: Tag[];
  seeMoreTags = false;

  constructor(private router: Router,
              private route: ActivatedRoute,
              private location: Location,
              private service: ChannelsService) {
  }

  ngOnInit() {
    this.getChannelAndTags();
  }

  getChannelAndTags(): void {
    // if (this.service.retrieveChannel() === null) {
    //   this.route.params.subscribe((params: Params) => {
    //     const id = params['id'];
    //     this.service.getChannel(id).subscribe(channel => {
    //       this.channel = channel;
    //       this.tags = this.channel.tags;
    //     });
    //   });
    // } else {
    //   this.channel = this.service.retrieveChannel();
    //   this.tags = this.channel.tags;
    // }
    this.route.data.subscribe(
      (data: Data) => {
        this.channel = data['channel']
      }
    );
    // this.route.params.subscribe((params: Params) => {
    //   const id = params['id'];
    //   this.service.getChannel(id).subscribe(
    //     (channel: Channel) => {
    //       this.channel = channel;
    //       console.log('finished loading');
    //     }
    //   );
    // });

  }

  toggleTags() {
    this.seeMoreTags = !this.seeMoreTags;
  }

  goToSubmitTag() {
    this.router.navigate(['/submittag']);
  }

}
