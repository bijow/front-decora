import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPage } from './pages/login/login.page';

export const RoutingComponents = [
  LoginPage
];

const ROUTES: Routes = [
  {
    path: 'login',
    component: LoginPage
  },
  {
    path: '**',
    redirectTo: '/'
  }
];

export const RoutingModule: ModuleWithProviders = RouterModule.forRoot(ROUTES);
