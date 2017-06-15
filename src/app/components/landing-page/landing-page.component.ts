import { Component } from '@angular/core';

@Component({
    selector: 'landing-page',
    template: '<div><left-right [content]="content"></left-right></div>',
    styleUrls: ['./landing-page.component.css'],
})
export class LandingPage {
    content = [{
        title: '9 Months',
        imageUrl: 'assets/9months1.jpg',
        description: `„A grand adventure is about to begin...“`,
        route: '/gallery/9months'
    }, {
        title: 'Newborn',
        imageUrl: 'assets/newborn1.jpg',
        description: `We take photos as a return ticket to a moment otherwise gone. Katie Thurmes`,
        route: '/gallery/9months'
    }, {
        title: 'Children',
        imageUrl: 'assets/children1.jpg',
        description: `Photography is the memory of our lives.`,
        route: '/gallery/9months'
    }, {
        title: 'Portrait',
        imageUrl: 'assets/children1.jpg',
        description: `Photography is about capturing souls, not smiles.`,
        route: '/gallery/9months'
    }]
    constructor() {
    }
};