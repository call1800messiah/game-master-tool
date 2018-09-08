import { Component, OnInit } from '@angular/core';
import { DataService, CLASSES, Information, Person, Note } from '@app/core';

@Component({
  selector: 'gmt-add-entity',
  templateUrl: './add-entity.component.html',
  styleUrls: ['./add-entity.component.scss']
})
export class AddEntityComponent implements OnInit {

  constructor(private dataService: DataService) { }

  ngOnInit() {
  }

  onAddEntity(className: string): void {
    console.log(`Creating a ${className}`);
    
    switch(className) {
      case 'person': 
        this.dataService.create(CLASSES.Person, new Person(
          "Alrik Backmann",
          true,
        ));
        break;
      case 'note':
        this.dataService.create(CLASSES.Note, new Note(
          'Eine wichtige Notiz',
          true,
        ));
        break;
    }
  }
}
