import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Location } from '@angular/common';

import { Channel } from '../shared/models/channel';
import { ChannelsService } from '../services/channels.service';
import { Tag } from '../shared/models/tag';

@Component({
  selector: 'app-channel-profile',
  templateUrl: './channel-profile.component.html',
  styleUrls: ['./channel-profile.component.css']
})

export class ChannelProfileComponent implements OnInit {
  channel: Channel;
  tags: Tag[];
  seeMoreTags = false;

  constructor(private route: Router,
    private activatedRoute: ActivatedRoute,
    private location: Location,
    private service: ChannelsService) { }

  ngOnInit() {
    this.getChannelAndTags();
  }

  getChannelAndTags(): void {
    // if (this.service.retrieveChannel() === null) {
    //   this.activatedRoute.params.subscribe((params: Params) => {
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
    this.activatedRoute.params.subscribe((params: Params) => {
      const id = params['id'];
      this.service.getChannel(id).subscribe(channel => {
        this.channel = channel;
        this.tags = this.channel.tags;
      });
    });

  }

  toggleTags() {
    this.seeMoreTags = !this.seeMoreTags;
  }

  goToSubmitTag() {
    this.route.navigate(['/submittag']);
  }

}
