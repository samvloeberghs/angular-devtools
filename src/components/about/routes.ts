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
        loadComponent: () => import('./me'),
        title: 'Me',
      },
      {
        path: 'angular',
        loadComponent: () => import('./angular'),
        title: 'Angular'
      },
    ]
  }
];
