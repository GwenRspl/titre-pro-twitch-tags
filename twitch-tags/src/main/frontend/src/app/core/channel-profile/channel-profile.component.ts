import {Component, ElementRef, HostListener, OnInit} from '@angular/core';
import {ActivatedRoute, Data, Router} from '@angular/router';
import {Title} from '@angular/platform-browser';

import {Channel} from '../../shared/models/channel.model';
import {Tag} from "../../shared/models/tag.model";
import {TagsService} from "../../services/tags.service";
import {LinkTagChannelUserInfo} from "../../services/link-tag-channel-user-info";
import {User} from "../../shared/models/user.model";
import {TokenStorageService} from "../../auth/token-storage.service";
import {UsersService} from "../../services/users.service";

@Component({
  selector: 'app-channel-profile',
  templateUrl: './channel-profile.component.html',
  styleUrls: ['./channel-profile.component.css']
})

export class ChannelProfileComponent implements OnInit {

  @HostListener('document:click',['$event.target']) onClick(target) {
    this.handleClick(target);
  }

  private _authenticated = false;
  private _channel: Channel;
  private _seeMoreTags = false;
  private _seeMoreTagsString = 'See more';
  userInput='';
  private _tags: Tag[] = [];
  private _filteredList = [];
  private _tagToAdd: Tag;

  constructor(private router: Router,
              private route: ActivatedRoute,
              private tagService: TagsService,
              private elementRef: ElementRef,
              private tokenStorage: TokenStorageService,
              private userService:UsersService,
              private title: Title) {
  }

  ngOnInit() {
    this._authenticated = this.tokenStorage.isAuthenticated();
    this.getChannelAndTags();
    this.tagService.getTags().subscribe(data => {
      this._tags = data;
    })
  }

  getChannelAndTags(): void {
    this.route.data.subscribe(
      (data: Data) => {
        this._channel = data['channel'];
        this.title.setTitle('TwitchTags - ' + this.channel.name);
      }
    );
  }

  toggleTags() {
    if(this._seeMoreTags == true ){
      this._seeMoreTags = false;
      this._seeMoreTagsString = 'See more';
    } else {
      this._seeMoreTags = true;
      this._seeMoreTagsString = 'See less';
    }
  }

  goToSubmitTag() {
    this.router.navigate(['/app/submittag']);
  }

  filter() {
    this._filteredList = this._tags.filter(tag => {
      return tag.name.toLowerCase().indexOf(this.userInput.toLowerCase()) > -1;
    })
  }

  select(item) {
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
    let username = this.tokenStorage.getUsername();
    let user: User;
    this.userService.getUserByUsername(username).subscribe(
      data => {
        user = data;
        let link = new LinkTagChannelUserInfo(this._channel.id, this.tagToAdd.id, user.id);
        this.tagService.addTagToChannel(link).subscribe(
          () => {
            let str = this.route.snapshot['_routerState'].url;
            this.router.navigate(['/app/']).then(()=> this.router.navigate([str]));
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


  get authenticated(): boolean {
    return this._authenticated;
  }


  get channel(): Channel {
    return this._channel;
  }

  get seeMoreTags(): boolean {
    return this._seeMoreTags;
  }

  get seeMoreTagsString(): string {
    return this._seeMoreTagsString;
  }


  get tags(): Tag[] {
    return this._tags;
  }
}
