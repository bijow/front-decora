import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPage } from './pages/login/login.page';
import { DashboardPage } from './pages/dashboard/dashboard.page';

export const RoutingComponents = [
  LoginPage,
  DashboardPage
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
    path: '**',
    redirectTo: '/dashboard'
  }
];

export const RoutingModule: ModuleWithProviders = RouterModule.forRoot(ROUTES);
