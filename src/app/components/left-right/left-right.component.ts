import { Component, Input, HostListener, Inject } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { ActivatedRoute, NavigationStart, Router, Params } from '@angular/router';
import { DOCUMENT } from '@angular/platform-browser';

// function fadeInOut() {
//     return trigger('fadeInOut', [
//         state('void', style({ opacity: 0 })),
//         state('*', style({ opacity: 1.0 })),
//         transition(':leave', [  // before 2.1: transition('* => void', [
//             style({ opacity: 1.0 }),
//             animate('0.8s ease-out', style({ opacity: 0 }))
//         ]),
//         transition(':enter', [  // before 2.1: transition('void => *', [
//             style({ opacity: 0 }),
//             animate('0.8s ease-in-out', style({ opacity: 1.0 }))
//         ]),
//     ]);
// }
@Component({
    selector: 'left-right',
    templateUrl: './left-right.component.html',
    styleUrls: ['./left-right.component.css'],
    animations: [trigger('fadeInOut', [
        state('void', style({ opacity: 0 })),
        state('*', style({ opacity: 1.0 })),
        transition(':leave', [  // before 2.1: transition('* => void', [
            style({ opacity: 1.0 }),
            animate('0.8s ease-out', style({ opacity: 0 }))
        ]),
        transition(':enter', [  // before 2.1: transition('void => *', [
            style({ opacity: 0 }),
            animate('0.8s ease-in-out', style({ opacity: 1.0 }))
        ]),
    ])]
    // animations: [fadeInOut()]
})
export class LeftRightComponent {
    @Input() content

    scrollDirection: string = '';
    activeContent: number = 0;
    constructor( @Inject(DOCUMENT) private document: Document, private route: ActivatedRoute, private router: Router) {
    }

    ngOnChanges() {
        console.log(this.route);
    }

    getImage(content) {
        return `url(${content.imageUrl})`;
    }
    // ngOnInit() {
    //     this.router.events.subscribe(event => {
    //         if (event instanceof NavigationStart) {
    //             console.log('path = ', event.url);
    //         }
    //     });
    // }

    @HostListener("window:scroll", [])
    onWindowScroll(event) {
        let number = this.document.body.scrollTop;
        if (number > 100) {
            // this.navIsFixed = true;
            // } else if (this.navIsFixed && number < 10) {
            //     this.navIsFixed = false;
        }
        console.log(event);
    }

    onMouseWheel(direction) {
        console.log(direction);
        if (!this.scrollDirection) {
            this.scrollDirection = this.scrollDirection ? this.scrollDirection : direction;
            this.activeContent = direction == 'up' ? Math.min(this.activeContent + 1, this.content.length - 1) : Math.max(this.activeContent - 1, 0);
            setTimeout(() => {
                this.scrollDirection = '';
            }, 1500);
        }
    }
};