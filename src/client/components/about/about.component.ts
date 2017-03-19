import { Component } from '@angular/core';

@Component({
    selector: 'about',
    template: '<div><left-right [content]="content"></left-right></div>'
})
export class AboutComponent {
    content = [{
        title: 'ABOUT ME',
        imageUrl: '/static/about1.jpg',
        description: `“When people look at my pictures I want them to feel the way they do when they want to read a line of a poem twice.” Robert Frank`,
        navigate: 1
    }, {
        title: 'MORE ABOUT ME',
        imageUrl: '/static/about2.jpg',
        description: `Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore
                    et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum`
    }]
    constructor() {
    }
};