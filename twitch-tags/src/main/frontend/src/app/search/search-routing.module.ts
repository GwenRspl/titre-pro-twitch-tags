import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {SearchComponent} from './search.component';

const routes: Routes = [
  {path: 'app/search', component: SearchComponent},
  {path: 'app/searchName', component: SearchComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class SearchRoutingModule {
}

