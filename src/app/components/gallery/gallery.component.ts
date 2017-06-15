import { Component} from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { ActivatedRoute, Router, Params } from '@angular/router';

// function fadeInOut() {
//     return trigger('fadeInOut', [
//         state('void', style({ opacity: 0 })),
//         state('*', style({ opacity: 1.0 })),
//         transition(':leave', [  // before 2.1: transition('* => void', [
//             style({ opacity: 1.0 }),
//             animate('0.5s ease-out', style({ opacity: 0 }))
//         ]),
//         transition(':enter', [  // before 2.1: transition('void => *', [
//             style({ opacity: 0 }),
//             animate('1s ease-in-out', style({ opacity: 1.0 }))
//         ]),
//     ]);
// }
@Component({
    selector: 'gallery',
    templateUrl: './gallery.component.html',
    styleUrls: ['./gallery.component.css'],
    // animations: [fadeInOut()],
    animations: [trigger('fadeInOut', [
        state('void', style({ opacity: 0 })),
        state('*', style({ opacity: 1.0 })),
        transition(':leave', [  // before 2.1: transition('* => void', [
            style({ opacity: 1.0 }),
            animate('0.5s ease-out', style({ opacity: 0 }))
        ]),
        transition(':enter', [  // before 2.1: transition('void => *', [
            style({ opacity: 0 }),
            animate('1s ease-in-out', style({ opacity: 1.0 }))
        ]),
    ])],
    host: {
        '[@fadeInOut]': 'true',
        'style': 'display: block;'
    }
})

export class Gallery {
    galleryName: string;
    constructor(private route: ActivatedRoute, private router: Router) {
    }

    ngOnInit() {
        this.route.params
            .subscribe((params: Params) => {
                this.galleryName = params['name'];
            });
    }
};