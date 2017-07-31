import { Component, ViewContainerRef } from '@angular/core';

@Component({
    selector: 'app-lp',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {

    private viewContainerRef: ViewContainerRef;
    host: string;

    public constructor(viewContainerRef: ViewContainerRef) {
        // ng2-bootstrap modal hack
        this.viewContainerRef = viewContainerRef;
        this.host = window.location.hostname;
    }
};
