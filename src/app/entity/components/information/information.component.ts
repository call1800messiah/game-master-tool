import { Component, OnInit, Input } from '@angular/core';

import { Information } from '../../../core/models/information.model';

@Component({
  selector: 'gmt-information',
  templateUrl: './information.component.html',
  styleUrls: ['./information.component.scss']
})
export class InformationComponent implements OnInit {
  @Input() info: Information;
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
