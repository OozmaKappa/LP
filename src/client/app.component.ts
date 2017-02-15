import { Component, ViewContainerRef } from '@angular/core';

@Component({
    selector: 'my-app',
    template: `
    <div id="root-container">
        <header-bar></header-bar>

        <router-outlet></router-outlet>
    </div>
    `,
})
export class AppComponent {

    private viewContainerRef: ViewContainerRef;

    public constructor(viewContainerRef: ViewContainerRef) {
        // ng2-bootstrap modal hack
        this.viewContainerRef = viewContainerRef;
    }

};