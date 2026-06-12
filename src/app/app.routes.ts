import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Admin } from './pages/admin/admin';
import { About } from './pages/about/about';
import { Courses } from './pages/courses/courses';


export const routes: Routes = [
  { path: '', component: Home },
  { path: 'about', component: About },
  { path: 'admin', component: Admin },
  { path: 'courses', component: Courses },
];
