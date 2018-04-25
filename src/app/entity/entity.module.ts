import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule }   from '@angular/forms';

import { EntityListComponent } from './entity-list/entity-list.component';
import { EntityWrapperComponent } from './entity-wrapper/entity-wrapper.component';
import { InformationComponent } from './information/information.component';
import { NotesComponent } from './notes/notes.component';
import { PersonComponent } from './person/person.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    EntityListComponent,
    EntityWrapperComponent,
    InformationComponent,
    NotesComponent, 
    PersonComponent
  ],
  exports: [
    EntityWrapperComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    SharedModule
  ]
})
export class EntityModule { }
