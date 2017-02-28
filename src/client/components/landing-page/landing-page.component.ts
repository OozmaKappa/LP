import { Component, Output, HostListener, Inject, trigger, state, style, transition, animate } from '@angular/core';
import { ActivatedRoute, NavigationStart, Router, Params } from '@angular/router';
import { DOCUMENT } from '@angular/platform-browser';

// function delayTransition() {
//     return trigger('delay', [
//         state('void', style({ opacity: 0 })),
//         state('*', style({ opacity: 1.0 })),
//         transition(':leave', [
//             style({ opacity: 1.0 }),
//             animate('1.5s 2s ease-in-out', style({ opacity: 0 }))
//         ])
//     ]);
// }
function fadeInOut() {
    return trigger('fadeInOut', [
        state('void', style({ opacity: 0 })),
        state('*', style({ opacity: 1.0 })),
        transition(':leave', [  // before 2.1: transition('* => void', [
            style({ opacity: 1.0 }),
            animate('0.5s ease-out', style({ opacity: 0 }))
        ]),
        transition(':enter', [  // before 2.1: transition('void => *', [
            style({ opacity: 0 }),
            animate('0.5s ease-in-out', style({ opacity: 1.0 }))
        ]),
    ]);
}
function slideToLeft() {
    return trigger('leftTransition', [
        state('void', style({})),
        state('*', style({})),
        transition(':enter', [
            style({ transform: 'translateX(-100%)' }),
            animate('1.5s ease-in-out', style({ transform: 'translateX(0%)' }))
        ]),
        transition(':leave', [
            style({ transform: 'translateX(0%)' }),
            animate('1.5s ease-in-out', style({ transform: 'translateX(-100%)' }))
        ])
    ]);
}
function slideToRight() {
    return trigger('rightTransition', [
        state('void', style({})),
        state('*', style({})),
        transition(':enter', [
            style({ transform: 'translateX(100%)' }),
            animate('1.5s ease-in-out', style({ transform: 'translateX(0%)' }))
        ]),
        transition(':leave', [
            style({ transform: 'translateX(0%)' }),
            animate('1.5s ease-in-out', style({ transform: 'translateX(100%)' }))
        ])
    ]);
}
@Component({
    selector: 'landing-page',
    templateUrl: './landing-page.component.html',
    styleUrls: ['./landing-page.component.css'],
    animations: [fadeInOut(), slideToLeft(), slideToRight()]
})
export class LandingPage {
    scrollDirection: string = '';
    activeContent: number = 1;
    nextContent: number = 2;
    constructor( @Inject(DOCUMENT) private document: Document, private route: ActivatedRoute, private router: Router) {
    }

    ngOnChange() {
        console.log(this.route);
    }
    ngOnInit() {
        this.router.events.subscribe(event => {
            if (event instanceof NavigationStart) {
                console.log('path = ', event.url);
            }
        });
    }

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

    onmousewheel(direction) {
        if (!this.scrollDirection) {
            this.scrollDirection = this.scrollDirection ? this.scrollDirection : direction;
            this.activeContent = direction == 'up' ? Math.min(this.activeContent + 1, 3) : Math.max(this.activeContent - 1, 1);
            console.log(this.activeContent);
            setTimeout(() => {
                this.scrollDirection = '';
            }, 1500);
        }
        // console.log('up');
    }


};