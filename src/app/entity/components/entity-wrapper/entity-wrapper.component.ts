import { Component, OnInit, Input } from '@angular/core';

import { Entity } from '../../../core/models/entity.model';



@Component({
  selector: 'gmt-entity-wrapper',
  templateUrl: './entity-wrapper.component.html',
  styleUrls: ['./entity-wrapper.component.scss']
})
export class EntityWrapperComponent implements OnInit {
  @Input() entity: Entity;

  constructor() { }

  ngOnInit() {
    
  }

}
