import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPage } from './pages/login/login.page';
import { DashboardPage } from './pages/dashboard/dashboard.page';
import { UserFormPage } from './pages/user/user.form.page';

export const RoutingComponents = [
  LoginPage,
  DashboardPage,
  UserFormPage
];

const ROUTES: Routes = [
  {
    path: 'login',
    component: LoginPage
  },
  {
    path: 'dashboard',
    component: DashboardPage
  },
  {
    path: 'user',
    component: UserFormPage
  },
  {
    path: '**',
    redirectTo: '/dashboard'
  }
];

export const RoutingModule: ModuleWithProviders = RouterModule.forRoot(ROUTES);
