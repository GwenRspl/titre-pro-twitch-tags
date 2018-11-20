import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {SigninComponent} from './signin/signin.component';
import {SignupComponent} from './signup/signup.component';
import {AccountComponent} from './account/account.component';
import {AdminComponent} from './admin/admin.component';
import {ForgotPasswordComponent} from './forgot-password/forgot-password.component';
import {ChangePasswordComponent} from './change-password/change-password.component';

import {AuthGuard} from './auth-guard.service';
import {AuthAdminGuard} from './admin/auth-admin-guard.service';

const authRoutes: Routes = [
  {path: 'signin', component: SigninComponent},
  {path: 'signup', component: SignupComponent},
  {path: 'account', component: AccountComponent, canActivate: [AuthGuard]},
  {path: 'admin', component: AdminComponent, canActivate: [AuthAdminGuard]},
  {path: 'fpswrd', component: ForgotPasswordComponent},
  {path: 'chgpswrd', component: ChangePasswordComponent}
];

@NgModule({
  imports: [RouterModule.forChild(authRoutes)],
  exports: [RouterModule],
  providers: [AuthGuard, AuthAdminGuard]
})
export class AuthRoutingModule {
}

