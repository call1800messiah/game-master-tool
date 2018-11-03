import { Component, OnInit } from '@angular/core';
import { DataService, ModalService, CLASSES, Information, Person, Note } from '@app/core';
import { PersonComponent } from '@app/shared/modules/entity-widgets/components/person/person.component';

@Component({
  selector: 'gmt-add-entity',
  templateUrl: './add-entity.component.html',
  styleUrls: ['./add-entity.component.scss']
})
export class AddEntityComponent implements OnInit {

  constructor(private dataService: DataService, private modalService: ModalService) { }

  ngOnInit() {
  }

  onAddEntity(className: string): void {
    console.log(`Creating a ${className}`);
    
    switch(className) {
      case 'person': 
        this.modalService.openModal(PersonComponent, {});
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
