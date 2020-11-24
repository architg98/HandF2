import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginCompComponent } from './login-comp/login-comp.component';
import { SignupCompComponent } from './signup-comp/signup-comp.component';
import { ProfileComponent } from './profile/profile.component';
import { TasksComponent } from './profile/tasks/tasks.component';
import { FoodComponent } from './profile/food/food.component';

const routes: Routes = [
  { path: '', component: LoginCompComponent },
  { path: 'signup', component: SignupCompComponent },
  { path: 'profile', component: ProfileComponent},
  { path: 'tasks', component: TasksComponent},
  { path: 'food', component: FoodComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
