import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { EntityListComponent } from './components/entity-list/entity-list.component';
import { EntityWrapperComponent } from './components/entity-wrapper/entity-wrapper.component';
import { InformationComponent } from './components/information/information.component';
import { InformationListComponent } from './components/information-list/information-list.component';
import { LabelComponent } from './components/label/label.component';
import { NoteComponent } from './components/note/note.component';
import { PersonComponent } from './components/person/person.component';



@NgModule({
  declarations: [
    EntityListComponent,
    EntityWrapperComponent,
    InformationComponent,
    InformationListComponent,
    LabelComponent,
    NoteComponent,
    PersonComponent
  ],
  exports: [
    EntityWrapperComponent,
    EntityListComponent,
    LabelComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class EntityWidgetsModule { }
