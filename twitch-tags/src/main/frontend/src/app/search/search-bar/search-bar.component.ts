import {Component, ElementRef, HostListener, OnInit} from '@angular/core';
import {Tag} from "../../shared/models/tag.model";
import {TagsService} from "../../services/tags.service";
import {ChannelsService} from "../../services/channels.service";
import {SearchService} from "../../services/search.service";
import {Channel} from "../../shared/models/channel.model";

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {

  @HostListener('document:click',['$event.target']) onClick(target) {
    this.handleClick(target);
  }

  userInput='';
  private tags: Tag[] = [];
  private _filteredList = [];
  private _selected = [];

  constructor(private elementRef: ElementRef, private tagservice: TagsService, private channelsService: ChannelsService, private searchService : SearchService) { }

  ngOnInit() {
    this.tagservice.getTags().subscribe(data => {
      this.tags = data;
    })
  }

  filter() {
    this._filteredList = this.tags.filter(tag => {
      return tag.name.toLowerCase().indexOf(this.userInput.toLowerCase()) > -1;
    })
  }

  select(item) {
    this._selected.push(item);
    this.userInput = '';
    this._filteredList = [];
    this.tags.splice(this.tags.indexOf(item),1);
  }

  remove(item){
    this._selected.splice(this._selected.indexOf(item),1);
    this.tags.push(item);
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

  search(){
    let tagNames : string = '';
    for(let tag of this._selected){
      tagNames = tagNames + tag.name + ",";
    }
    console.log(tagNames);
    tagNames = tagNames.slice(0,-1);
    console.log(tagNames);
    this.channelsService.search(tagNames).subscribe((data: Channel[]) => {
      this.searchService.searchResult = data;
    })
  }

  get filteredList(): any[] {
    return this._filteredList;
  }

  get selected(): any[] {
    return this._selected;
  }
}