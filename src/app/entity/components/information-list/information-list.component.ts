import { Component, OnInit, Input } from '@angular/core';
import { Information } from '../../../core/models/information.model';



@Component({
  selector: 'gmt-information-list',
  templateUrl: './information-list.component.html',
  styleUrls: ['./information-list.component.scss']
})
export class InformationListComponent implements OnInit {
  @Input() information: Information[];

  constructor() { }

  ngOnInit() {
  }

  addInfo(){
    
  }
}
