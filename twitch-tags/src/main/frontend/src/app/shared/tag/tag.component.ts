import { Component, OnInit, Input } from '@angular/core';
import {ChannelTagUserLink} from "../models/channel-tag-user-link.model";
import {TagItemService} from "../../services/tag-item.service";

@Component({
  selector: 'app-tag',
  templateUrl: './tag.component.html',
  styleUrls: ['./tag.component.css']
})
export class TagComponent implements OnInit {
  @Input() links: ChannelTagUserLink[];
  @Input() limit: number;
  arr : Array<[string, number]>;

  constructor(private service: TagItemService) { }

  ngOnInit() {
    this.arr = this.service.prepArray(this.links);
  }

}
