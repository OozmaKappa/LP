import { Component, Output, EventEmitter, Input } from '@angular/core';

@Component({
    selector: 'app-header-bar',
    templateUrl: './header-bar.component.html',
    styleUrls: ['./header-bar.component.css'],
})

export class HeaderBarComponent {
    active = 'Home';

    constructor() {
    }

    isActive(txt) {
        return txt === this.active;
    }
}
