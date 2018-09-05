import { Injectable } from '@angular/core';
import {Channel} from "../shared/models/channel.model";

@Injectable({
  providedIn: 'root'
})
export class TagItemService {
  channel: Channel;

  constructor() { }

  prepArray(links) : Array<[string, number]> {
    if(links==null) console.log('null');
    let arr: Array<[string, number]> = [];
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
      arr.push([name, count]);
    }
    return arr;
  }

}
