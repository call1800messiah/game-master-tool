import { Component, OnInit, Input } from '@angular/core';

import { Attribute } from '@app/core';



@Component({
  selector: 'gmt-information',
  templateUrl: './information.component.html',
  styleUrls: ['./information.component.scss']
})
export class InformationComponent implements OnInit {
  @Input() info: Attribute;
  editing: boolean = false;

  constructor() { }

  ngOnInit() {
  }
  
  cancelEdit(){
    this.editing = false;
  }

  startEdit(){
    this.editing = true;
  }
}
