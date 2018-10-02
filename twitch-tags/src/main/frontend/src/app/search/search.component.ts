import { Component, OnInit } from '@angular/core';
import {SearchService} from "../services/search.service";


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})

export class SearchComponent implements OnInit {

  private _searching = false;

  constructor(private service : SearchService) { }

  ngOnInit() {
    this.service.resultChanged.subscribe(
      () => {this._searching = true;}
    )
  }

  get searching(): boolean {
    return this._searching;
  }
}
