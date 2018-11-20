import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {SearchComponent} from './search.component';

const routes: Routes = [
  {path: 'search', component: SearchComponent},
  {path: 'searchName', component: SearchComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class SearchRoutingModule {
}

