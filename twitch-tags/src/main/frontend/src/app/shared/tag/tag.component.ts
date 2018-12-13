import {Component, OnInit, Input, EventEmitter, Output} from '@angular/core';
import {User} from '../models/user.model';
import {LinkTagChannelUserInfo} from '../../services/link-tag-channel-user-info';
import {TokenStorageService} from '../../auth/token-storage.service';
import {UsersService} from '../../services/users.service';
import {Channel} from '../models/channel.model';
import {Tag} from '../models/tag.model';
import {TagsService} from '../../services/tags.service';
import {TagItem} from '../models/tag-item.model';

@Component({
  selector: 'app-tag',
  templateUrl: './tag.component.html',
  styleUrls: ['./tag.component.css']
})
export class TagComponent implements OnInit {
  @Input() arr: TagItem[];
  @Input() limit: number;
  @Input() channel: Channel;
  @Output() updateNeeded = new EventEmitter<boolean>();

  constructor(private tokenStorage: TokenStorageService,
              private userService: UsersService,
              private tagService: TagsService) {}

  ngOnInit() {
  }

  onTagClicked(linkName: string) {
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
                this.updateNeeded.emit(true);
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
