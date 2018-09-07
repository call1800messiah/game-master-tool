import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddEntityComponent } from './add-entity/add-entity.component';
import { FlowComponent } from './flow/flow.component';
import { FlowRoutingModule } from './flow-routing.module';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    AddEntityComponent,
    FlowComponent
  ],
  exports: [
    
  ],
  imports: [
    CommonModule,
    SharedModule,
    FlowRoutingModule,
  ]
})
export class FlowModule { }
