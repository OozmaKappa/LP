import { Component } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';

@Component({
    selector: 'gallery',
    templateUrl: './gallery.component.html',
    styleUrls: ['./gallery.component.css'],
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