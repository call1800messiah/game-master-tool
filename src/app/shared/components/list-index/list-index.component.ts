import { Component, OnInit, Input } from '@angular/core';

import { Entity } from '../../../core/models/entity.model';



@Component({
  selector: 'gmt-list-index',
  templateUrl: './list-index.component.html',
  styleUrls: ['./list-index.component.scss']
})
export class ListIndexComponent implements OnInit {
  @Input() list: Entity[];
  @Input() listOrder: string;
  @Input() listDirection: boolean;
  @Input() showLabel:boolean;

  constructor() { }

  ngOnInit() {
  }
  
  trackByFn(index: number, item: Entity) {
    return item.id;
  }
}
