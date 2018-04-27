import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FlowComponent } from './flow/flow.component';



const routes: Routes = [
  {
    path: '',
    component: FlowComponent
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
export class FlowRoutingModule { }
