import { Injectable } from '@angular/core';
import {Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HeaderService {
  private _updateNavBar = new Subject<string>();

  constructor() { }

  toggleNavBar(value: string) {
    this.updateNavBar.next(value);
  }

  get updateNavBar(): Subject<string> {
    return this._updateNavBar;
  }
}
