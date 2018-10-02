import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {SigninComponent} from './account/signin/signin.component';
import {SignupComponent} from './account/signup/signup.component';
import {AccountComponent} from './account/account.component';
import {SubmitTagComponent} from './submit-tag/submit-tag.component';
import {SubmitChannelComponent} from './submit-channel/submit-channel.component';
import {ChannelProfileComponent} from './channel-profile/channel-profile.component';
import {ForgotPasswordComponent} from './account/forgot-password/forgot-password.component';
import {SearchComponent} from './search/search.component';
import {ChannelResolver} from "./services/channel-resolver.service";
import {HomeComponent} from "./home/home.component";

export const routes: Routes = [
  {path: '', redirectTo: 'index', pathMatch: 'full'},
  {path: 'index', component: HomeComponent},
  {path: 'search', component: SearchComponent},
  {path: 'signin', component: SigninComponent},
  {path: 'signup', component: SignupComponent},
  {path: 'account', component: AccountComponent},
  {path: 'submitchannel', component: SubmitChannelComponent},
  {path: 'submittag', component: SubmitTagComponent},
  {path: 'profile/:id', component: ChannelProfileComponent, resolve: {channel: ChannelResolver}},
  {path: 'fpswrd', component: ForgotPasswordComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

