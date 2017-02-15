import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPage } from './components/landing-page/landing-page.component';
import { Gallery } from './components/gallery/gallery.component';

const routes: Routes = [
    { path: '', component: LandingPage },
    { path: 'gallery/:name', component: Gallery },
    { path: '**', redirectTo: '' }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
