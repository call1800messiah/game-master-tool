import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InitiativeComponent } from './components/initiative/initiative.component';
import { CombatRoutingModule } from '@app/combat/combat-routing.module';

@NgModule({
  imports: [
    CommonModule,
    CombatRoutingModule,
  ],
  declarations: [InitiativeComponent]
})
export class CombatModule { }
