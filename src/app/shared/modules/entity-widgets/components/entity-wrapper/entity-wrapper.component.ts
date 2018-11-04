import { Component, OnInit, Input } from '@angular/core';

import { Entity, DataService } from '@app/core';



@Component({
  selector: 'gmt-entity-wrapper',
  templateUrl: './entity-wrapper.component.html',
  styleUrls: ['./entity-wrapper.component.scss']
})
export class EntityWrapperComponent implements OnInit {
  @Input() entity: Entity;
  public editing: boolean;

  constructor(private dataService: DataService) {
    this.editing = false;
  }

  ngOnInit() {
    
  }

  updateEntityVisibility(visible: boolean): void {
    this.dataService.update(this.entity.className, Object.assign({}, this.entity, { visible }))
  }
  
  startEdit(): void {
    this.editing = true;
  }
  
  stopEdit(name: string): void {
    this.editing = false;
    this.dataService.update(this.entity.className, Object.assign({}, this.entity, { name }))
  }
}
