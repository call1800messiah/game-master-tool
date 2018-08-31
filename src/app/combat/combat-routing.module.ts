import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InitiativeComponent } from './components/initiative/initiative.component';



const routes: Routes = [
  {
    path: '',
    component: InitiativeComponent
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
export class CombatRoutingModule { }
