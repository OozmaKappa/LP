import { Component } from '@angular/core';

@Component({
    selector: 'landing-page',
    template: '<div><left-right [content]="content"></left-right></div>',
    styleUrls: ['./landing-page.component.css'],
})
export class LandingPage {
    content = [{
        title: '9 MONATE',
        imageUrl: '/static/9months1.jpg',
        description: `Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore
                    et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum`,
        route: '/gallery/9months'
    }, {
        title: 'WILLKOMMEN IM LEBEN',
        imageUrl: '/static/newborn1.jpg',
        description: `Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore
                    et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum`,
        route: '/gallery/9months'
    }, {
        title: 'KINDER',
        imageUrl: '/static/children1.jpg',
        description: `Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore
                    et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum`,
        route: '/gallery/9months'
    }]
    constructor() {
    }
};