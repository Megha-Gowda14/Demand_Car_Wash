import { Route } from '@angular/router';

import { HomeComponent } from './home.component';

export const HOME_ROUTE: Route = {
  path: '',
  component: HomeComponent,
  children: [
    {
      path: 'home',
      loadChildren: () => import('./home.component').then(m => m.HomeComponent)
    },
    {
      path: 'aboutus',
      loadChildren: () => import('../aboutus/aboutus.component').then(m => m.AboutusComponent)
    },
    {
      path: 'contactus',
      loadChildren: () => import('../contactus/contactus.component').then(m => m.ContactusComponent)
    },
    {
        path: 'login',
        loadChildren: () => import('../signup-login/signup-login.component').then(m => m.SignupLoginComponent)
      }
  ]
};