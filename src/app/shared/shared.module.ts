import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { LabelComponent } from './components/label/label.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { AutofocusDirective } from './directives/autofocus.directive';
import { ListIndexComponent } from './components/list-index/list-index.component';



@NgModule({
  declarations: [
    LabelComponent,
    SearchBarComponent,
    AutofocusDirective,
    ListIndexComponent
  ],
  exports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule,
    LabelComponent,
    ListIndexComponent,
    SearchBarComponent,
    AutofocusDirective
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule
  ]
})
export class SharedModule { }
