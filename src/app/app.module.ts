import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SignInComponent } from './signIn.component';
import { SignUp } from './signUp.component';

@NgModule({
  declarations: [
    AppComponent,SignInComponent, SignUp ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
