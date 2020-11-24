import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginCompComponent } from './login-comp/login-comp.component';
import { SignupCompComponent } from './signup-comp/signup-comp.component';

const routes: Routes = [
  { path: '', component: LoginCompComponent },
  { path: 'signup', component: SignupCompComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
