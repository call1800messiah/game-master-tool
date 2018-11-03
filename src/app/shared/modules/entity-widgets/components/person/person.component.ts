import { Component, OnInit, Input } from '@angular/core';

import { Person } from '@app/core';
import { ModalChild } from '@app/core/interfaces/IModalChild';

@Component({
  selector: 'gmt-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.scss']
})
export class PersonComponent implements OnInit, ModalChild {
  @Input() data: any;
  @Input() person: Person;

  constructor() { }

  ngOnInit() {
    if (this.data && !this.person) {
      this.person = this.data;
    }
  }

}
