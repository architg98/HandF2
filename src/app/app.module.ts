import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginCompComponent } from './login-comp/login-comp.component';
import { SignupCompComponent } from './login-comp/signup-comp/signup-comp.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [AppComponent, LoginCompComponent, SignupCompComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
