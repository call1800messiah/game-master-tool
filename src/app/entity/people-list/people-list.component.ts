import { Component, OnInit } from '@angular/core';

import {DataService} from '../../core/services/data.service';
import {Person} from '../../core/models/person.model';

@Component({
  selector: 'gmt-people-list',
  templateUrl: './people-list.component.html',
  styleUrls: ['./people-list.component.scss']
})
export class PeopleListComponent implements OnInit {
  people: Person[];

  constructor(private dataService: DataService) {
    this.getPeople();
  }

  ngOnInit() {
  }

  getPeople(): void{
    this.dataService.getPeople()
      .subscribe(people => this.people = people);
  }
}
