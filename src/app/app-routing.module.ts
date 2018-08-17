import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

import { PageNotFoundComponent } from './core/components/page-not-found/page-not-found.component';



const routes: Routes = [
  {
    path: 'entity',
    loadChildren: './entity/entity.module#EntityModule'
  },
  {
    path: 'flow',
    loadChildren: './flow/flow.module#FlowModule'
  },
  {
    path: '',
    redirectTo: '/flow',
    pathMatch: 'full'
  },
  {
    path: '**',
    component: PageNotFoundComponent
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
