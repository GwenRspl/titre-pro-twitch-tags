import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';

import {CoreModule} from './core/core.module';
import {SharedModule} from './shared/shared.module';
import {AuthModule} from './auth/auth.module';
import {SubmitModule} from './submit/submit.module';
import {SearchModule} from './search/search.module';

import {AppComponent} from './app.component';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FontAwesomeModule,
    CoreModule,
    SharedModule,
    AuthModule,
    SubmitModule,
    SearchModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
