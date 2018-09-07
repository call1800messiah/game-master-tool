import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { NavigationService } from './services/navigation.service';
import { SearchService } from './services/search.service';
import { ModuleImportGuard } from './module-import.guard';
import { HeaderBarComponent } from './components/header-bar/header-bar.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { DiceModule } from '../dice/dice.module';



@NgModule({
  declarations: [
    HeaderBarComponent,
    NavigationComponent,
    PageNotFoundComponent
  ],
  exports: [
    HeaderBarComponent,
    PageNotFoundComponent
  ],
  imports: [
    CommonModule,
    DiceModule,
    RouterModule
  ],
  providers: [
    NavigationService,
    SearchService,
    ModuleImportGuard
  ]
})
export class CoreModule {
  constructor( @Optional() @SkipSelf() parentModule: CoreModule, private moduleImportGuard: ModuleImportGuard) {
    this.moduleImportGuard.throwIfAlreadyLoaded(parentModule, 'CoreModule');
  }
}
