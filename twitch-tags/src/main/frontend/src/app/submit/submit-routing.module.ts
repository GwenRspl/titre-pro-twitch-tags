import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {SubmitTagComponent} from './submit-tag/submit-tag.component';
import {SubmitChannelComponent} from './submit-channel/submit-channel.component';

const routes: Routes = [
  {path: 'app/submitchannel', component: SubmitChannelComponent},
  {path: 'app/submittag', component: SubmitTagComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class SubmitRoutingModule {
}

