import { Component, OnInit, Input } from '@angular/core';

import { Person, Information, DataService, CLASSES } from '@app/core';
import { ModalChild } from '@app/core/interfaces/IModalChild';

@Component({
  selector: 'gmt-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.scss']
})
export class PersonComponent implements OnInit, ModalChild {
  @Input() data: any;
  @Input() person: Person;

  constructor(private dataService: DataService) { }

  ngOnInit() {
    if (this.data && !this.person) {
      this.person = this.data;
    }
  }

  onChanged(info: Information, attribute: string) {
    const personUpdate = {};
    personUpdate[attribute] = info;
    this.dataService.update(CLASSES.Person, Object.assign({}, this.person, personUpdate));
  }
}
