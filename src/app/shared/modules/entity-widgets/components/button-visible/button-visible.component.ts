import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'gmt-button-visible',
  templateUrl: './button-visible.component.html',
  styleUrls: ['./button-visible.component.scss']
})
export class ButtonVisibleComponent implements OnInit {
  @Input() visible: boolean;
  @Output() click = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit() {
  }

  setVisibility(visible: boolean): void {
    this.click.emit(visible);
  }
}
