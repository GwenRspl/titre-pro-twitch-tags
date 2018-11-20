import {Component, OnInit} from '@angular/core';

import {Channel} from '../../shared/models/channel.model';
import {SearchService} from "../search.service";


@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {
  channels: Channel[];

  constructor(private service: SearchService) {
    this.channels = [];
  }

  ngOnInit() {
    this.channels = this.service.searchResult;
    this.service.resultChanged.subscribe(
      (channels : Channel[]) => {
        this.channels = channels;
      }
    )
  }


}
