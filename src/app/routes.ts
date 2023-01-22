import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AccountListComponent } from './components/account-list/account-list.component';
import { HomeComponent } from './components/home/home.component';

export const routes: Routes = [
    { path: 'home', component: HomeComponent },
    {
        path: 'account', children: [
            { path: 'list', component: AccountListComponent },
            { path: '**', redirectTo: 'list' }
        ]
    },
    { path: '**', redirectTo: 'home' }
];