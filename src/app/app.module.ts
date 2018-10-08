import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { SignInComponent } from './signIn/signIn.component';
import { SignUpComponent } from './signUp/signUp.component';



import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,SignInComponent, SignUpComponent ],
  imports: [
    BrowserModule,AppRoutingModule,ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
