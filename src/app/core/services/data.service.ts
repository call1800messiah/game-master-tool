import { Injectable } from '@angular/core';

import {Observable} from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import {Person} from '../models/person.model';
import {PEOPLE} from '../mock/people';



@Injectable()
export class DataService {
  constructor() { }

  getPeople(): Observable<Person[]> {
    return of(PEOPLE);
  }
}
