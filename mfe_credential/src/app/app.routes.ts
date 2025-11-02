import { Routes } from '@angular/router';
import { title } from 'process';
import { LoginComponent } from './solucion/login/login.component';

export const routes: Routes = [
    {
        path: 'Login',
        component: LoginComponent,
        data: { title: 'Login' },
    },
    {
        path: '',
        redirectTo: 'Login',
        pathMatch: 'full',
    }
];
