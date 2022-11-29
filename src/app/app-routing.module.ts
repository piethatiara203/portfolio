import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { PlaygroundComponent } from './pages/playground/playground.component';
import { RegisterComponent } from './pages/register/register.component';
import { CalculateGasolineComponent } from './pages/calculate-gasoline/calculate-gasoline.component';
import { UsersComponent } from './pages/users/users.component';
import { AdminGuard } from './guards/admin.guard';
import { UsersGuard } from './guards/users.guard';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'playground',
    component: PlaygroundComponent,
  },
  {
    path: 'register',
    component: RegisterComponent,
  },
  {
    path: 'calculate',
    component: CalculateGasolineComponent,
  },
  {
    path: 'users',
    component: UsersComponent,
    canActivate: [UsersGuard],
  },
  {
    path: 'admin',
    loadChildren: () =>
      import('./pages/admin/admin.module').then((m) => m.AdminModule),
    canLoad: [AdminGuard],
  },
  {
    path: '',
    redirectTo: 'register',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
