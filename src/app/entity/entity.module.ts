import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InformationComponent } from './information/information.component';
import { PersonComponent } from './person/person.component';
import { PeopleListComponent } from './people-list/people-list.component';



@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    InformationComponent, 
    PeopleListComponent,
    PersonComponent
  ],
  exports: [
    PeopleListComponent
  ]
})
export class EntityModule { }
