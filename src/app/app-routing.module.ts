import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SignInComponent }   from './signIn/signIn.component';
import { SignUpComponent }   from './signUp/signUp.component';




const routes: Routes = [
      { path: 'signIn', component: SignInComponent },
      { path: 'signUp', component: SignUpComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}