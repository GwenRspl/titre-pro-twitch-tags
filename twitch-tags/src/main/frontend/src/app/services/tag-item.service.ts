import { Injectable } from '@angular/core';
import {Channel} from '../shared/models/channel.model';
import {TagItem} from '../shared/models/tag-item.model';

@Injectable({
  providedIn: 'root'
})
export class TagItemService {
  channel: Channel;

  constructor() { }

  prepArrayTag(links) : TagItem[] {
    if(links==null) console.log('null');
    let arr: TagItem[] = [];
    let tagNames : string[] = [];
    for(let link of links) {
      if(!tagNames.includes(link.tagName)){
        tagNames.push(link.tagName);
      }
    }
    for(let name of tagNames) {
      let count = 0;
      for(let link of links) {
        if(name == link.tagName) {
          count++;
        }
      }
      let item = new TagItem();
      item.name = name;
      item.count = count;
      arr.push(item);
    }
    return arr;
  }

}
