import { Injectable } from '@angular/core';

import {Observable,  of } from 'rxjs';

import {Person} from '../models/person.model';
import {PEOPLE} from '../mock/people';
import {Entity} from '../models/entity.model';
import {FLOW} from '../mock/flow';
import {NAVIGATION} from '../mock/navigation';
import {NOTES} from '../mock/notes';
import {Note} from '../models/note.model';



@Injectable()
export class DataService {
  constructor() { }
  
  getFlow(): Observable<Entity[]> {
    return of(FLOW);
  }

  getPeople(): Observable<Person[]> {
    return of(PEOPLE);
  }
  
  getNavigation(): Observable<any[]> {
    return of(NAVIGATION);
  }
  
  getNotes(): Observable<Note[]> {
    return of(NOTES);
  }
}
