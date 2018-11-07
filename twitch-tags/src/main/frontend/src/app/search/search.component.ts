import { Component, OnInit } from '@angular/core';
import {SearchService} from "../services/search.service";
import {ActivatedRoute} from "@angular/router";


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})

export class SearchComponent implements OnInit {

  private _searching = false;
  private _searchName = false;

  constructor(private service : SearchService, private route: ActivatedRoute) { }

  ngOnInit() {
    let path = this.route.snapshot['_routerState'].url;
    if(path == '/searchName') {
      this._searchName = true;
    }
    this.service.resultChanged.subscribe(
      () => {this._searching = true;}
    );
  }

  get searching(): boolean {
    return this._searching;
  }


  get searchName(): boolean {
    return this._searchName;
  }
}
