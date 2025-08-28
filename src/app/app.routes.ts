import { Routes } from '@angular/router';
import { Contact } from '../components/contact/contact';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    loadComponent: () => import('../components/home/home').then(m => m.Home),
    title: 'Home',
  },
  {
    path: 'about',
    loadComponent: () => import('../components/about/about').then(m => m.About),
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
    loadComponent: () => import('../components/post/post').then(m => m.Post),
    title: 'Post Details'
  }
];
