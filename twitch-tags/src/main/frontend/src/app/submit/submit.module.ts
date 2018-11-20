import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

import {SubmitRoutingModule} from './submit-routing.module';

import {SubmitChannelComponent} from './submit-channel/submit-channel.component';
import {SubmitTagComponent} from './submit-tag/submit-tag.component';

@NgModule({
  declarations: [
    SubmitChannelComponent,
    SubmitTagComponent
  ],
  imports: [
    SubmitRoutingModule,
    CommonModule,
    FormsModule
  ]
})
export class SubmitModule {
}
