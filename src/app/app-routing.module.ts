import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

import { PageNotFoundComponent } from './core/components/page-not-found/page-not-found.component';
import { AuthGuardService } from '@app/core/services/auth-guard.service';



const routes: Routes = [
  {
    loadChildren: './auth/auth.module#AuthModule',
    path: 'auth',
  },
  {
    loadChildren: './combat/combat.module#CombatModule',
    path: 'combat',
  },
  {
    loadChildren: './entity/entity.module#EntityModule',
    path: 'entity',
  },
  {
//    canLoad: [AuthGuardService],
    loadChildren: './flow/flow.module#FlowModule',
    path: 'flow',
  },
  {    
    path: '',
    pathMatch: 'full',
    redirectTo: '/flow',
  },
  {
    component: PageNotFoundComponent,
    path: '**',    
  }
];

@NgModule({
  exports: [
    RouterModule
  ],
  imports: [
    RouterModule.forRoot(routes, {
      preloadingStrategy: PreloadAllModules
    })
  ]
})
export class AppRoutingModule {}
