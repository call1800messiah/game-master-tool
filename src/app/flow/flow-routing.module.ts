import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FlowComponent } from './flow/flow.component';
import { AuthGuardService } from '@app/core/services/auth-guard.service';



const routes: Routes = [
  {
    canActivate: [ AuthGuardService ],
    component: FlowComponent,
    path: '',    
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
