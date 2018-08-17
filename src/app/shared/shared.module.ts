import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';


import { AutofocusDirective } from './directives/autofocus.directive';
import { ListIndexComponent } from './components/list-index/list-index.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { EntityWidgetsModule } from './modules/entity-widgets/entity-widgets.module';



@NgModule({
  declarations: [
    SearchBarComponent,
    AutofocusDirective,
    ListIndexComponent
  ],
  exports: [
    CommonModule,
    EntityWidgetsModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule,
    ListIndexComponent,
    SearchBarComponent,
    AutofocusDirective
  ],
  imports: [
    CommonModule,
    EntityWidgetsModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule
  ]
})
export class SharedModule { }
