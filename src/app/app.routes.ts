import { Routes } from '@angular/router';
import { Contact } from '../components/contact/contact';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'prefix',
    loadComponent: () => import('../components/home/home'),
    title: 'Home',
  },
  {
    path: 'about',
    loadComponent: () => import('../components/about/about'),
    loadChildren: () => import('../components/about/routes').then(m => m.routes),
    title: 'About'
  },
  {
    path: 'contact',
    component: Contact,
    title: 'Contact',
  },
  {
    path: 'posts/:id',
    loadComponent: () => import('../components/post/post'),
    title: 'Post Details'
  }
];
