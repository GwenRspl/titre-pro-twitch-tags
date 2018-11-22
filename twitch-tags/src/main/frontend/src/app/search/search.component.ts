import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Title} from '@angular/platform-browser';

import {SearchService} from './search.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})

export class SearchComponent implements OnInit {

  private _searching = false;
  private _searchName = false;

  constructor(private service : SearchService, private route: ActivatedRoute, private title: Title) { }

  ngOnInit() {
    this.title.setTitle('TwitchTags - Search');
    let path = this.route.snapshot['_routerState'].url;
    if(path == '/searchName') {
      this._searchName = true;
    }
    this.service.resultChanged.subscribe(
      (data) => {
        this._searching = data != null;
      }
    );
  }

  get searching(): boolean {
    return this._searching;
  }


  get searchName(): boolean {
    return this._searchName;
  }
}
