import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule }   from '@angular/forms';

import { EntityComponent } from './components/entity/entity.component';
import { EntityRoutingModule } from './entity-routing.module';



@NgModule({
  declarations: [
    EntityComponent
  ],
  exports: [
  ],
  imports: [
    CommonModule,
    FormsModule,
    EntityRoutingModule,
  ]
})
export class EntityModule { }
