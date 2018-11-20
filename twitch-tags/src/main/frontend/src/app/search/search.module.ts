import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

import {SharedModule} from '../shared/shared.module';
import {SearchRoutingModule} from './search-routing.module';

import {SearchComponent} from './search.component';
import {ResultComponent} from './result/result.component';
import {SearchBarComponent} from './search-bar/search-bar.component';
import {SearchBarNameComponent} from './search-bar-name/search-bar-name.component';
import {SearchService} from './search.service';

@NgModule({
  declarations: [
    SearchComponent,
    ResultComponent,
    SearchBarComponent,
    SearchBarNameComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    SearchRoutingModule
  ],
  providers: [SearchService]
})
export class SearchModule {
}
