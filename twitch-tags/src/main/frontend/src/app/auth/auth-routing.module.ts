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
  {path: 'app/signin', component: SigninComponent},
  {path: 'app/signup', component: SignupComponent},
  {path: 'app/account', component: AccountComponent, canActivate: [AuthGuard]},
  {path: 'app/admin', component: AdminComponent, canActivate: [AuthAdminGuard]},
  {path: 'app/fpswrd', component: ForgotPasswordComponent},
  {path: 'app/chgpswrd', component: ChangePasswordComponent}
];

@NgModule({
  imports: [RouterModule.forChild(authRoutes)],
  exports: [RouterModule],
  providers: [AuthGuard, AuthAdminGuard]
})
export class AuthRoutingModule {
}

