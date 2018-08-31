import { Component, OnInit } from '@angular/core';
import { Person } from '@app/core';

@Component({
  selector: 'gmt-initiative',
  templateUrl: './initiative.component.html',
  styleUrls: ['./initiative.component.scss']
})
export class InitiativeComponent implements OnInit {
  combatants: any;

  constructor() { }

  ngOnInit() {
    this.combatants = {};
  }

  addCombatant(name:string, initiative:number) {
    if (!Object.hasOwnProperty.call(this.combatants, initiative)) {
      this.combatants[initiative] = [];
      console.log('Settings up property', initiative);
    }
    this.combatants[initiative].push(name);
    console.log(this.combatants);
  }
  
  editCombatant(){
    
  }
}
