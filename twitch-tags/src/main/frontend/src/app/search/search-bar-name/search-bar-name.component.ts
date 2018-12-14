import { Component, OnInit } from '@angular/core';
import {Channel} from '../../shared/models/channel.model';
import {ChannelsService} from '../../services/channels.service';
import {SearchService} from '../search.service';

@Component({
  selector: 'app-search-bar-name',
  templateUrl: './search-bar-name.component.html',
  styleUrls: ['./search-bar-name.component.css']
})
export class SearchBarNameComponent implements OnInit {
  submittedName='';
  error = false;
  message = '';

  constructor(private channelService: ChannelsService, private searchService:SearchService) { }

  ngOnInit() {
  }

  search() {
    this.error = false;
    this.channelService.searchName(this.submittedName).subscribe((data: Channel[]) => {
      if(data.length == 0){
        this.error = true;
        this.message = 'No channels found !';
      } else {
        this.searchService.searchResult = data;
      }
    })
  }

}
