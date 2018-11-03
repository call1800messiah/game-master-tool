import { Injectable } from '@angular/core';
import { Observable, Subject,  of } from 'rxjs';

import { Person } from '../models/person.model';
import { PEOPLE } from '../mock/people';
import { Entity } from '../models/entity.model';
import { FLOW } from '../mock/flow';
import { NAVIGATION } from '../mock/navigation';
import { NOTES } from '../mock/notes';
import { Note } from '../models/note.model';
import { CLASSES } from '../enum/classes';
import { AuthService } from '@app/core/services/auth.service';



@Injectable({
  providedIn: 'root'
})
export class DataService {
  private socket;
  private data: object = {};
  private dataSubject = {};
  
  constructor(private auth: AuthService) {
    this.socket = this.auth.getSocket();
    
    this.socket.on('dataRetrieved', (data: any) => {
      if (data.content) {
        this.data[data.className] = data.content as Entity[];
      } else {
        this.data[data.className] = [];
      }
      this.dataSubject[data.className].next(this.data[data.className])
    });
    this.socket.on('dataCreated', (data: any) => {
      this.data[data.className].push(data.content);
      this.dataSubject[data.className].next(this.data[data.className]);
    });
    this.socket.on('dataDeleted', (data: any) => {
      this.data[data.className].splice(this.data[data.className].indexOf(this.data[data.className].filter((obj) => obj._id === data.id)[0]), 1);
      this.dataSubject[data.className].next(this.data[data.className]);
    });
    this.socket.on('dataUpdated', (data: any) => {
      this.data[data.className].splice(this.data[data.className].indexOf(this.data[data.className].filter((obj) => obj._id === data.content._id)[0]), 1, data.content);
      this.dataSubject[data.className].next(this.data[data.className]);
    });
  }
  
  getFlow(): Observable<Entity[]> {
//    return of(FLOW);
    return this.retrieve(CLASSES.Person);
  }

  getPeople(): Observable<Person[]> {
//    return of(PEOPLE);
    return this.retrieve(CLASSES.Person);
  }
  
  getNavigation(): Observable<any[]> {
    return of(NAVIGATION);
  }
  
  getNotes(): Observable<Note[]> {
//    return of(NOTES);
    return this.retrieve(CLASSES.Note);
  }
  
  create(className: CLASSES, data: any): void {
    this.socket.emit('create', { className: className, content: data });
  }

  delete(className: CLASSES, data:any): void {
    this.socket.emit('delete', { className: className, content: data });
  }

  update(className: CLASSES, data:any): void {
    this.socket.emit('update', { className: className, content: data });
  }

  retrieve(className: CLASSES): Observable<any[]> {
    this.setupDataSubject(className);
    this.socket.emit('retrieve', { className: className });
    return this.dataSubject[className].asObservable();
  }
  
  private setupDataSubject(className: CLASSES) {
    if (this.dataSubject[className] === undefined) {
      this.dataSubject[className] = new Subject();
    }
  }
}
