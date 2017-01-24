import { Component, Output, HostListener, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';

@Component({
    selector: 'landing-page',
    templateUrl: './landing-page.component.html',
    styleUrls: ['./landing-page.component.css'],
})
export class LandingPage {
    scrollDirection: string = '';
    activeContent: number = 1;
    nextContent: number = 2;
    constructor( @Inject(DOCUMENT) private document: Document) {
    }

    ngOnInit() {
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
            this.activeContent = direction == 'up' ? Math.min(this.activeContent + 1, 2) : Math.max(this.activeContent - 1, 0);
            console.log(this.activeContent);
            setTimeout(() => {
                this.scrollDirection = '';
            }, 1500);
        }
        // console.log('up');
    }
};