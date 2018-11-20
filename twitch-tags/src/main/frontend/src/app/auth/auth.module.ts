import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {AuthRoutingModule} from './auth-routing.module';

import {AccountComponent} from './account/account.component';
import {SigninComponent} from './signin/signin.component';
import {SignupComponent} from './signup/signup.component';
import {ChangePasswordComponent} from './change-password/change-password.component';
import {ForgotPasswordComponent} from './forgot-password/forgot-password.component';
import {AdminComponent} from './admin/admin.component';
import {ChannelsDashboardComponent} from './admin/channels-dashboard/channels-dashboard.component';
import {TagsDashboardComponent} from './admin/tags-dashboard/tags-dashboard.component';
import {UsersDashboardComponent} from './admin/users-dashboard/users-dashboard.component';


@NgModule({
  declarations: [
    SigninComponent,
    SignupComponent,
    AccountComponent,
    ChangePasswordComponent,
    ForgotPasswordComponent,
    AdminComponent,
    ChannelsDashboardComponent,
    TagsDashboardComponent,
    UsersDashboardComponent
  ],
  imports: [
    AuthRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule
  ]
})
export class AuthModule {
}
