import { Component, Output, EventEmitter, Input } from '@angular/core';

@Component({
    selector: 'header-bar',
    templateUrl: './header-bar.component.html',
    styleUrls: ['./header-bar.component.css'],
})

export class HeaderBar {
    active: string = 'Home';

    constructor() {
    }
    
    isActive(txt){
        return txt === this.active;
    }
}