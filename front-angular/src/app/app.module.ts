import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
library.add(fas);

import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { ContentComponent } from './shared/content/content.component';
import { SearchComponent } from './search/search.component';
import { ResultComponent } from './result/result.component';
import { ChannelProfileComponent } from './channel-profile/channel-profile.component';
import { SigninComponent } from './account/signin/signin.component';
import { SignupComponent } from './account/signup/signup.component';
import { AccountComponent } from './account/account.component';
import { SubmitTagComponent } from './submit-tag/submit-tag.component';
import { SubmitChannelComponent } from './submit-channel/submit-channel.component';

import { LimitPipe } from './shared/pipes/limit.pipe';

import { ChannelsService } from './services/channels.service';

import { TagComponent } from './channel-profile/tag/tag.component';
import { ForgotPasswordComponent } from './account/forgot-password/forgot-password.component';
import { AppRoutingModule } from './app-routing.module';

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
    ForgotPasswordComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    FontAwesomeModule
  ],
  providers: [ChannelsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
