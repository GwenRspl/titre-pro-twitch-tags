import { Component, OnInit, Input } from '@angular/core';
import {ChannelTagUserLink} from "../models/channel-tag-user-link.model";
import {TagItemService} from "../../services/tag-item.service";
import {User} from '../models/user.model';
import {LinkTagChannelUserInfo} from '../../services/link-tag-channel-user-info';
import {TokenStorageService} from '../../auth/token-storage.service';
import {UsersService} from '../../services/users.service';
import {Channel} from '../models/channel.model';
import {Tag} from '../models/tag.model';
import {TagsService} from '../../services/tags.service';
import {ActivatedRoute, Router} from '@angular/router';
import {TagItem} from '../models/tag-item.model';

@Component({
  selector: 'app-tag',
  templateUrl: './tag.component.html',
  styleUrls: ['./tag.component.css']
})
export class TagComponent implements OnInit {
  @Input() links: ChannelTagUserLink[];
  @Input() limit: number;
  @Input() channel: Channel;
  arr : TagItem[];

  constructor(private service: TagItemService,
              private tokenStorage: TokenStorageService,
              private userService: UsersService,
              private tagService: TagsService,
              private route: ActivatedRoute,
              private router: Router) {}

  ngOnInit() {
    this.arr = this.service.prepArrayTag(this.links);
  }

  onTagClicked(linkName: string) {
    console.log(linkName);
    let username = this.tokenStorage.getUsername();
    let user: User;
    this.userService.getUserByUsername(username).subscribe(
      data => {
        user = data;
        let tagToAdd: Tag;
        this.tagService.getTag(linkName).subscribe(
          data => {
            tagToAdd = data;
            let link = new LinkTagChannelUserInfo(this.channel.id, tagToAdd.id, user.id);
            this.tagService.addTagToChannel(link).subscribe(
              () => {
                let str = this.route.snapshot['_routerState'].url;
                this.router.navigate(['/app/submittag/']).then(()=> this.router.navigate([str]));
              },
              error => {
                console.log(error);
              }
            )
          }
        );
      },
      error => {
        console.log(error);
      }
    );
  }

}
