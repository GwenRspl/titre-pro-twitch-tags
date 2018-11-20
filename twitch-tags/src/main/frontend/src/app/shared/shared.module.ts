import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {TagComponent} from './tag/tag.component';
import {LimitPipe} from './pipes/limit.pipe';


@NgModule({
  declarations: [
    TagComponent,
    LimitPipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    TagComponent,
    LimitPipe
  ]
})
export class SharedModule {
}
