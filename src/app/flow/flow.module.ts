import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddEntityComponent } from './add-entity/add-entity.component';
import { EntityWrapperComponent } from './entity-wrapper/entity-wrapper.component';
import { FlowComponent } from './flow/flow.component';




@NgModule({
  declarations: [
    AddEntityComponent,
    EntityWrapperComponent,
    FlowComponent
  ],
  exports: [
    FlowComponent
  ],
  imports: [
    CommonModule
  ]
})
export class FlowModule { }
