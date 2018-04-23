import { Component, OnInit, Input } from '@angular/core';

import {Person} from '../../core/models/person.model';

@Component({
  selector: 'gmt-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.scss']
})
export class PersonComponent implements OnInit {
  @Input() person: Person;

  constructor() { }

  ngOnInit() {
  }

}
