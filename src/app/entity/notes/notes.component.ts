import { Component, OnInit, Input } from '@angular/core';
import { Information } from '../../core/models/information.model';



@Component({
  selector: 'gmt-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.scss']
})
export class NotesComponent implements OnInit {
  @Input() notes: Information[];

  constructor() { }

  ngOnInit() {
  }

  addInfo(){
    
  }
}
