import { Component, OnInit, OnChanges } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { Http } from '@angular/http'

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
    selector: 'app-gallery',
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
    ])]
    // host: {
    //     '[@fadeInOut]': 'true',
    //     'style': 'display: block;'
    // }
})

export class GalleryComponent implements OnInit, OnChanges {
    galleryName: string;
    images: [string]
    constructor(private route: ActivatedRoute, private router: Router, private _http: Http) {
    }

    ngOnInit() {
        this.route.params
            .subscribe((params: Params) => {
                this.galleryName = params['name']
                this.getImageNames(this.galleryName).subscribe((images) => {
                    this.images = images.filter(image => image.match(/\.(png|jpg)/g))
                    console.log(images)
                })
            });


    }
    ngOnChanges() {
    }

    getImageNames(gallery) {
        return this._http.get(`/api/gallery?name=${gallery}`)
            .map(res => res.json())
    }

    getImageClass(image: string) {
        if (image.match(/L\.(png|jpg)/g)) {
            return 'horizontal-lg'
        }
        if (image.match(/LS\.(png|jpg)/g)) {
            return 'horizontal-sm'
        }
        if (image.match(/Q\.(png|jpg)/g)) {
            return 'square'
        }
        if (image.match(/H\.(png|jpg)/g)) {
            return 'vertical'
        }
    }
};
