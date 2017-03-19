import { Component, Input, ViewChild } from '@angular/core';

@Component({
  selector: 'modal',
  styleUrls: ['modal.component.css'],
  templateUrl: './modal.component.html'
})
export class ModalComponent {

  @Input()
  visible = false;

  public show() {
    this.visible = true;
  }

  public hide() {
    this.visible = false;
  }

  private stopPropagation(event) {
    if (event.stopPropagation) {
      event.stopPropagation();
    } else {
      event.cancelBubble = true;
    }
  }
}