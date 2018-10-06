import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SignIn } from './signIn.component';
import { SignUp } from './signUp.component';

@NgModule({
  declarations: [
    AppComponent,SignIn, SignUp ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
