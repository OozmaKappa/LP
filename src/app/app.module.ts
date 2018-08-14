import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// import { MomentModule } from 'angular2-moment';
import { HttpModule, JsonpModule } from '@angular/http';
import { routing } from './app.routes';
import { TooltipModule, AlertModule, ButtonsModule, BsDropdownModule } from 'ng2-bootstrap';
// import { Ng2PaginationModule } from 'ng2-pagination';
// import { Ng2PageScrollModule } from 'ng2-page-scroll';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { environment } from '../environments/environment';

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
        // MomentModule,
        FormsModule,
        ReactiveFormsModule,
        routing,
        TooltipModule,
        // Ng2PaginationModule,
        AlertModule,
        ButtonsModule,
        BsDropdownModule.forRoot(),
        // Ng2PageScrollModule.forRoot()
        AngularFireModule.initializeApp(environment.firebase),
        AngularFireDatabaseModule,
    ],
    providers: [
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
    bootstrap: [AppComponent],
})
export class AppModule { }
