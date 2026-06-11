import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Tutul } from './tutul/tutul';
import { Admin } from './admin/admin';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'tutul', component: Tutul },
  { path: 'admin', component: Admin },
];
