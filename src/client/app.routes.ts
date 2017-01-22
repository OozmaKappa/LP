import { ModuleWithProviders }  from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPage } from './components/landing-page/landing-page.component';

const routes: Routes = [
    { path: '', component: LandingPage },
    { path: '**', redirectTo: ''}
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
