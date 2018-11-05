import {Component, ElementRef, HostListener, OnInit} from '@angular/core';
import {ActivatedRoute, Data, Router} from '@angular/router';

import {Channel} from '../shared/models/channel.model';
import {Tag} from "../shared/models/tag.model";
import {TagsService} from "../services/tags.service";
import {LinkTagChannelUserInfo} from "../services/link-tag-channel-user-info";
import {User} from "../shared/models/user.model";
import {TokenStorageService} from "../auth/token-storage.service";
import {UsersService} from "../services/users.service";
import {forEach} from "@angular/router/src/utils/collection";

@Component({
  selector: 'app-channel-profile',
  templateUrl: './channel-profile.component.html',
  styleUrls: ['./channel-profile.component.css']
})

export class ChannelProfileComponent implements OnInit {

  @HostListener('document:click',['$event.target']) onClick(target) {
    this.handleClick(target);
  }

  channel: Channel;
  seeMoreTags = false;
  seeMoreTagsString = 'See more';
  userInput='';
  private tags: Tag[] = [];
  private _filteredList = [];
  private _tagToAdd: Tag;

  constructor(private router: Router,
              private route: ActivatedRoute,
              private tagService: TagsService,
              private elementRef: ElementRef,
              private tokenStorage: TokenStorageService,
              private userService:UsersService) {
  }

  ngOnInit() {
    this.getChannelAndTags();
    this.tagService.getTags().subscribe(data => {
      this.tags = data;
      let channelTags = this.channel.channelTagUserLinks;
      console.log(channelTags);

      // this.tags.forEach(tag => {
      //   channelTags.forEach(link => {
      //     if(tag.id == link.tag.id){
      //       this.tags.splice(this.tags.indexOf(tag),1)
      //     }
      //   })
      // })
    })
  }

  getChannelAndTags(): void {
    this.route.data.subscribe(
      (data: Data) => {
        this.channel = data['channel']
      }
    );
  }

  toggleTags() {
    if(this.seeMoreTags == true ){
      this.seeMoreTags = false;
      this.seeMoreTagsString = 'See more';
    } else {
      this.seeMoreTags = true;
      this.seeMoreTagsString = 'See less';
    }
  }

  goToSubmitTag() {
    this.router.navigate(['/submittag']);
  }

  filter() {
    this._filteredList = this.tags.filter(tag => {
      return tag.name.toLowerCase().indexOf(this.userInput.toLowerCase()) > -1;
    })
  }

  select(item) {
    console.log(item);
    this.userInput = item.name;
    this._tagToAdd = item;
    this._filteredList = [];
  }

  handleClick(eventTarget){
    let inside = false;
    do {
      if(eventTarget === this.elementRef.nativeElement) {
        inside = true;
      }
      eventTarget = eventTarget.parentNode;
    } while (eventTarget);
    if(!inside) this._filteredList = [];
  }

  addTag(){
    console.log("adding tag");

    let username = this.tokenStorage.getUsername();
    let user: User;
    this.userService.getUserByUsername(username).subscribe(
      data => {
        user = data;
        let link = new LinkTagChannelUserInfo(this.channel.id, this.tagToAdd.id, user.id);
        this.tagService.addTagToChannel(link).subscribe(
          data => {
            console.log(data);
            let str = this.route.snapshot['_routerState'].url;
            this.router.navigate(['/']).then(()=> this.router.navigate([str]));
          },
          error => {
            console.log(error);
          }
        )
      },
      error => {
        console.log(error);
      }
    );
  }

  get filteredList(): any[] {
    return this._filteredList;
  }

  get tagToAdd(): Tag {
    return this._tagToAdd;
  }
}
