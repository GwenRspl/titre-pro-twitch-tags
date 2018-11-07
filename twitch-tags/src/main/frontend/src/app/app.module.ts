import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {library} from '@fortawesome/fontawesome-svg-core';
import {fas} from '@fortawesome/free-solid-svg-icons';
import {AppComponent} from './app.component';
import {HeaderComponent} from './shared/header/header.component';
import {FooterComponent} from './shared/footer/footer.component';
import {ContentComponent} from './shared/content/content.component';
import {SearchComponent} from './search/search.component';
import {ResultComponent} from './search/result/result.component';
import {ChannelProfileComponent} from './channel-profile/channel-profile.component';
import {SigninComponent} from './auth/signin/signin.component';
import {SignupComponent} from './auth/signup/signup.component';
import {AccountComponent} from './auth/account/account.component';
import {SubmitTagComponent} from './submit-tag/submit-tag.component';
import {SubmitChannelComponent} from './submit-channel/submit-channel.component';

import {LimitPipe} from './shared/pipes/limit.pipe';

import {ChannelsService} from './services/channels.service';

import {TagComponent} from './shared/tag/tag.component';
import {ForgotPasswordComponent} from './auth/forgot-password/forgot-password.component';
import {AppRoutingModule} from './app-routing.module';
import {ChannelResolver} from "./services/channel-resolver.service";
import {TagItemService} from "./services/tag-item.service";
import { SearchBarComponent } from './search/search-bar/search-bar.component';
import {TagsService} from "./services/tags.service";
import { PopularComponent } from './home/popular/popular.component';
import {SearchService} from "./services/search.service";
import { HomeComponent } from './home/home.component';
import {UsersService} from "./services/users.service";
import { ChangePasswordComponent } from './auth/change-password/change-password.component';
import {HttpInterceptorProviders} from "./auth/auth-interceptor";
import { AdminComponent } from './auth/admin/admin.component';
import { ChannelsDashboardComponent } from './auth/admin/channels-dashboard/channels-dashboard.component';
import { TagsDashboardComponent } from './auth/admin/tags-dashboard/tags-dashboard.component';
import { UsersDashboardComponent } from './auth/admin/users-dashboard/users-dashboard.component';
import { SearchBarNameComponent } from './search/search-bar-name/search-bar-name.component';

library.add(fas);

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ContentComponent,
    SearchComponent,
    ResultComponent,
    ChannelProfileComponent,
    SigninComponent,
    SignupComponent,
    AccountComponent,
    SubmitTagComponent,
    SubmitChannelComponent,
    TagComponent,
    LimitPipe,
    ForgotPasswordComponent,
    SearchBarComponent,
    PopularComponent,
    HomeComponent,
    ChangePasswordComponent,
    AdminComponent,
    ChannelsDashboardComponent,
    TagsDashboardComponent,
    UsersDashboardComponent,
    SearchBarNameComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    FontAwesomeModule,
    ReactiveFormsModule
  ],
  providers: [
    ChannelsService,
    ChannelResolver,
    TagItemService,
    TagsService,
    SearchService,
    UsersService,
    HttpInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule {
}
