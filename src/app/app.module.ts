import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';
import { routing } from './app.routes';
import { TooltipModule, AlertModule, ButtonsModule, BsDropdownModule, setTheme } from 'ngx-bootstrap';

// components
import { AppComponent } from './app.component';
import { AboutComponent } from './components/about/about.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { HeaderBarComponent } from './components/header-bar/header-bar.component';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { LeftRightComponent } from './components/left-right/left-right.component';
import { ModalComponent } from './components/modal/modal.component';
import { MouseWheelDirective } from './directives/mousewheel.directive';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ContactComponent } from './components/contact/contact.component';

@NgModule({
    declarations: [
        AboutComponent,
        AppComponent,
        HeaderBarComponent,
        LandingPageComponent,
        LeftRightComponent,
        GalleryComponent,
        ModalComponent,
        MouseWheelDirective,
        NavbarComponent,
        ContactComponent,
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        HttpModule,
        JsonpModule,
        FormsModule,
        ReactiveFormsModule,
        routing,
        TooltipModule,
        AlertModule,
        ButtonsModule,
        BsDropdownModule.forRoot(),
    ],
    providers: [
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
    bootstrap: [AppComponent],
})
export class AppModule {
    constructor() {
        setTheme('bs4'); // or 'bs4'
    }
}
