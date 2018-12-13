import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

import {AppRoutingModule} from './app-routing.module';
import {SharedModule} from '../shared/shared.module';

import {ContentComponent} from './content/content.component';
import {FooterComponent} from './footer/footer.component';
import {HeaderComponent} from './header/header.component';
import {HomeComponent} from './home/home.component';
import {ErrorComponent} from './error/error.component';
import {PopularComponent} from './home/popular/popular.component';
import {ChannelProfileComponent} from './channel-profile/channel-profile.component';

import {ChannelsService} from '../services/channels.service';
import {TagItemService} from '../services/tag-item.service';
import {TagsService} from '../services/tags.service';
import {UsersService} from '../services/users.service';
import {HttpInterceptorProviders} from '../auth/auth-interceptor';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    ContentComponent,
    FooterComponent,
    HeaderComponent,
    HomeComponent,
    ErrorComponent,
    PopularComponent,
    ChannelProfileComponent
  ],
  imports: [
    AppRoutingModule,
    FormsModule,
    CommonModule,
    SharedModule,
    HttpClientModule
  ],
  exports: [
    AppRoutingModule,
    HeaderComponent,
    ContentComponent,
    FooterComponent
  ],
  providers: [
    ChannelsService,
    TagItemService,
    TagsService,
    UsersService,
    HttpInterceptorProviders
  ]
})
export class CoreModule {
}
