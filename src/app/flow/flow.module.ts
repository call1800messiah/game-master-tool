import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddEntityComponent } from './add-entity/add-entity.component';
import { EntityModule } from '../entity/entity.module';
import { FlowComponent } from './flow/flow.component';
import { SharedModule } from '../shared/shared.module';




@NgModule({
  declarations: [
    AddEntityComponent,
    FlowComponent
  ],
  exports: [
    FlowComponent
  ],
  imports: [
    CommonModule,
    EntityModule
  ]
})
export class FlowModule { }
