import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { LandingPage } from './components/landing-page/landing-page.component';
import { Gallery } from './components/gallery/gallery.component';

const routes: Routes = [
    { path: '', component: LandingPage },
    { path: 'about', component: AboutComponent },
    { path: 'gallery/:name', component: Gallery },
    { path: '**', redirectTo: '' }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
