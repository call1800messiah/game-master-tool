import { Injectable } from '@angular/core';
import * as socketIO from 'socket.io-client';
import { Observable, Subject,  of } from 'rxjs';

import { CONFIG } from "../config";
import { Person } from '../models/person.model';
import { PEOPLE } from '../mock/people';
import { Entity } from '../models/entity.model';
import { FLOW } from '../mock/flow';
import { NAVIGATION } from '../mock/navigation';
import { NOTES } from '../mock/notes';
import { Note } from '../models/note.model';



@Injectable({
  providedIn: 'root'
})
export class DataService {
  private socket;
  private people: Person[];
  private dataSubject: Subject<any[]>;
  
  constructor() {
    this.socket = socketIO(CONFIG.DB);
  }
  
  getFlow(): Observable<Entity[]> {
    return of(FLOW);
  }

  getPeople(): Observable<Person[]> {
    return of(PEOPLE);
//    this.setupDataSubject();
//    this.socket.emit('retrieve', null);
//    return this.dataSubject.asObservable();
  }
  
  getNavigation(): Observable<any[]> {
    return of(NAVIGATION);
  }
  
  getNotes(): Observable<Note[]> {
    return of(NOTES);
  }
  
  
  private setupDataSubject() {
    if (this.dataSubject === undefined) {
      this.dataSubject = new Subject();
      
      this.socket.on('retrieveAllData', (data) => {
        this.people = data;
        this.dataSubject.next(this.people)
      });
      this.socket.on('dataCreated', (data) => {
        this.people.push(data);
        this.dataSubject.next(this.people);
      });
      this.socket.on('dataDeleted', (id) => {
        this.people.splice(this.people.indexOf(this.people.filter((obj) => obj._id === id)[0]), 1);
        this.dataSubject.next(this.people);
      });
      this.socket.on('dataUpdated', (data) => {
        this.people.splice(this.people.indexOf(this.people.filter((obj) => obj._id === data._id)[0]), 1, data);
        this.dataSubject.next(this.people);
      });
    }
  }
}
