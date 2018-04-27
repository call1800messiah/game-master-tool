import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule }   from '@angular/forms';

import { EntityComponent } from './components/entity/entity.component';
import { EntityListComponent } from './components/entity-list/entity-list.component';
import { EntityWrapperComponent } from './components/entity-wrapper/entity-wrapper.component';
import { InformationComponent } from './components/information/information.component';
import { InformationListComponent } from './components/information-list/information-list.component';
import { NoteComponent } from './components/note/note.component';
import { PersonComponent } from './components/person/person.component';
import { SharedModule } from '../shared/shared.module';
import { EntityRoutingModule } from './entity-routing.module';



@NgModule({
  declarations: [
    EntityComponent,
    EntityListComponent,
    EntityWrapperComponent,
    InformationComponent,
    InformationListComponent, 
    NoteComponent, 
    PersonComponent 
  ],
  exports: [
    EntityComponent,
    EntityWrapperComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    //EntityRoutingModule,
    SharedModule
  ]
})
export class EntityModule { }
