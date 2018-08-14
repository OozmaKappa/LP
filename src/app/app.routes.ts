import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { GalleryComponent } from './components/gallery/gallery.component';

const routes: Routes = [
    { path: '', component: LandingPageComponent },
    { path: 'about', component: AboutComponent },
    { path: 'contact', component: ContactComponent },
    { path: 'gallery/:name', component: GalleryComponent },
    { path: '**', redirectTo: '' }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
