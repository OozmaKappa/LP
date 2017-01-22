import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MomentModule } from 'angular2-moment';
import { HttpModule, JsonpModule } from '@angular/http';
import { routing } from './app.routes';
import { TooltipModule, AlertModule, ButtonsModule, DropdownModule } from 'ng2-bootstrap/ng2-bootstrap';
import { Ng2PaginationModule } from 'ng2-pagination';
import { Ng2PageScrollModule } from 'ng2-page-scroll';

// components
import { AppComponent } from './app.component';
import { HeaderBar } from './components/header-bar/header-bar.component';
import { LandingPage } from './components/landing-page/landing-page.component';
import { ModalComponent } from './components/modal/modal.component';

@NgModule({
    declarations: [
        AppComponent,
        HeaderBar,
        LandingPage,
        ModalComponent
    ],
    imports: [
        BrowserModule,
        HttpModule,
        JsonpModule,
        MomentModule,
        FormsModule,
        ReactiveFormsModule,
        routing,
        TooltipModule,
        Ng2PaginationModule,
        AlertModule,
        ButtonsModule,
        DropdownModule,
        Ng2PageScrollModule.forRoot()
    ],
    providers: [
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
    bootstrap: [AppComponent],
})
export class AppModule { }
