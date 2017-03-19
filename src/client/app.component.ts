import { Component, ViewContainerRef } from '@angular/core';

@Component({
    selector: 'my-app',
    template: `
    <div id="root-container">
        <div class="header">
            <header-bar></header-bar>
        </div>
        <div class="main-content">
            <router-outlet></router-outlet>
        </div>

    </div>
    `,
    styleUrls: ['./app.component.css']
})
export class AppComponent {

    private viewContainerRef: ViewContainerRef;

    public constructor(viewContainerRef: ViewContainerRef) {
        // ng2-bootstrap modal hack
        this.viewContainerRef = viewContainerRef;
    }

};