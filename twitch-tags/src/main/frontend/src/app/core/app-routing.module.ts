import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {ChannelProfileComponent} from './channel-profile/channel-profile.component';
import {HomeComponent} from "./home/home.component";
import {ErrorComponent} from "./error/error.component";

import {ChannelResolver} from "../services/channel-resolver.service";

const routes: Routes = [
  {path: '', redirectTo: 'index', pathMatch: 'full'},
  {path: 'index', component: HomeComponent},
  {path: 'profile/:id', component: ChannelProfileComponent, resolve: {channel: ChannelResolver}},
  //{path: '**', component: ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule {
}

