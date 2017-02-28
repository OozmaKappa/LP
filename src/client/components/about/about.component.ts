import { Component } from '@angular/core';

@Component({
    selector: 'about',
    template: '<div><left-right [content]="content"></left-right></div>'
})
export class AboutComponent {
    content = [{
        title: 'ABOUT ME',
        imageUrl: '/static/about1.jpg',
        description: `Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore
                    et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum`,
        route: '/gallery/9months'
    }, {
        title: 'MORE ABOUT ME',
        imageUrl: '/static/about2.jpg',
        description: `Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore
                    et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum`
    }]
    constructor() {
    }
};