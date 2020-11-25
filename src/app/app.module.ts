import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginCompComponent } from './login-comp/login-comp.component';
import { SignupCompComponent } from './signup-comp/signup-comp.component';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { HttpClientModule } from '@angular/common/http';
import { TasksComponent } from './profile/tasks/tasks.component';
import { FoodComponent } from './profile/food/food.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    LoginCompComponent,
    SignupCompComponent,
    HeaderComponent,
    TasksComponent,
    FoodComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
