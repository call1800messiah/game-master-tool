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
import { ButtonVisibleComponent } from './components/button-visible/button-visible.component';



@NgModule({
  declarations: [
    EntityListComponent,
    EntityWrapperComponent,
    InformationComponent,
    InformationListComponent,
    LabelComponent,
    NoteComponent,
    PersonComponent,
    ButtonVisibleComponent
  ],
  exports: [
    EntityWrapperComponent,
    EntityListComponent,
    LabelComponent
  ],
  entryComponents:[
    PersonComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class EntityWidgetsModule { }
