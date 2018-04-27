import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EntityComponent } from './components/entity/entity.component';



const routes: Routes = [
  {
    path: '',
    component: EntityComponent
  }
];

@NgModule({
  exports: [
    RouterModule
  ],
  imports: [
    RouterModule.forChild(routes)
  ],
})
export class EntityRoutingModule { }
