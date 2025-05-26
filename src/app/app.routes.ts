import { Routes } from '@angular/router';

export const routes: Routes = [
    { path:'', loadChildren: () => import('./module/dashboard/dashboard.module').then(o => o.DashboardModule)},
    { path:'dashboard', loadChildren: () => import('./module/dashboard/dashboard.module').then(o => o.DashboardModule)}
];
