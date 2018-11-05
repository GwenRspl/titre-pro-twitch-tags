import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {SigninComponent} from './auth/signin/signin.component';
import {SignupComponent} from './auth/signup/signup.component';
import {AccountComponent} from './auth/account/account.component';
import {SubmitTagComponent} from './submit-tag/submit-tag.component';
import {SubmitChannelComponent} from './submit-channel/submit-channel.component';
import {ChannelProfileComponent} from './channel-profile/channel-profile.component';
import {ForgotPasswordComponent} from './auth/forgot-password/forgot-password.component';
import {SearchComponent} from './search/search.component';
import {ChannelResolver} from "./services/channel-resolver.service";
import {HomeComponent} from "./home/home.component";
import {ChangePasswordComponent} from "./auth/change-password/change-password.component";
import {AuthGuard} from "./auth/auth-guard.service";

export const routes: Routes = [
  {path: '', redirectTo: 'index', pathMatch: 'full'},
  {path: 'index', component: HomeComponent},
  {path: 'search', component: SearchComponent},
  {path: 'signin', component: SigninComponent},
  {path: 'signup', component: SignupComponent},
  {path: 'account', component: AccountComponent, canActivate: [AuthGuard]},
  {path: 'submitchannel', component: SubmitChannelComponent},
  {path: 'submittag', component: SubmitTagComponent},
  {path: 'profile/:id', component: ChannelProfileComponent, resolve: {channel: ChannelResolver}},
  {path: 'fpswrd', component: ForgotPasswordComponent},
  {path: 'chgpswrd', component: ChangePasswordComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGuard]
})
export class AppRoutingModule {
}

