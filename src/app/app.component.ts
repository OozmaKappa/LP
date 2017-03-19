import { Component, ViewContainerRef } from '@angular/core';

@Component({
    selector: 'my-app',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {

    private viewContainerRef: ViewContainerRef;

    public constructor(viewContainerRef: ViewContainerRef) {
        // ng2-bootstrap modal hack
        this.viewContainerRef = viewContainerRef;
    }

};