import { Component, OnInit, Input } from '@angular/core';

import {Entity} from '../../../core/models/entity.model';



@Component({
  selector: 'gmt-entity-list',
  templateUrl: './entity-list.component.html',
  styleUrls: ['./entity-list.component.scss']
})
export class EntityListComponent implements OnInit {
  @Input() list: Entity[];

  constructor() {
    
  }

  ngOnInit() {
  }
}
