import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Information } from '@app/core';



@Component({
  selector: 'gmt-information',
  templateUrl: './information.component.html',
  styleUrls: ['./information.component.scss']
})
export class InformationComponent implements OnInit {
  @Input() info: Information;
  @Output() changed = new EventEmitter<object>();
  editing: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  startEdit(): void {
    this.editing = true;
  }
  
  stopEdit(content: string): void {
    this.editing = false;
    this.changed.emit(Object.assign({}, this.info, { content }));
  }
  
  setVisibility(visible: boolean): void {
    this.info.visible = visible;
    this.changed.emit(Object.assign({}, this.info, { visible }));
  }
}
