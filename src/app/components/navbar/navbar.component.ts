import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  isIn = false;   // store state
  constructor() { }

  ngOnInit() {
  }
  toggleState() { // click handler
    this.isIn = !this.isIn;
  }

}
