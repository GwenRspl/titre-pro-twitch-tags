import {Injectable} from '@angular/core';
import {Channel} from '../shared/models/channel.model';
import {Subject} from 'rxjs/internal/Subject';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  private _resultChanged = new Subject<Channel[]>();

  private _searchResult: Channel[] = [];

  constructor() {
  }

  get searchResult(): Channel[] {
    return this._searchResult;
  }

  set searchResult(value: Channel[]) {
    this._searchResult = value;
    this._resultChanged.next(this.searchResult);
  }


  get resultChanged(): Subject<Channel[]> {
    return this._resultChanged;
  }
}

