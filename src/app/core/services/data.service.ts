import { Injectable } from '@angular/core';

import {Observable} from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import {Person} from '../models/person.model';
import {PEOPLE} from '../mock/people';
import {Entity} from '../models/entity.model';
import {FLOW} from '../mock/flow';



@Injectable()
export class DataService {
  constructor() { }
  
  getFlow(): Observable<Entity[]> {
    return of(FLOW);
  }

  getPeople(): Observable<Person[]> {
    return of(PEOPLE);
  }
}
