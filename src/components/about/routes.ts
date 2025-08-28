import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'me'
      },
      {
        path: 'me',
        loadComponent: () => import('./me/me'),
        title: 'Me',
      },
      {
        path: 'angular',
        loadComponent: () => import('./angular/angular'),
        title: 'Angular'
      },
    ]
  }
];
