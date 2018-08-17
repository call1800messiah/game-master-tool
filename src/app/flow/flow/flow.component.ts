import { Component, OnInit } from '@angular/core';

import {DataService} from '../../core/services/data.service';
import {Entity} from '../../core/models/entity.model';



@Component({
  selector: 'gmt-flow',
  templateUrl: './flow.component.html',
  styleUrls: ['./flow.component.scss']
})
export class FlowComponent implements OnInit {
  flow: Entity[];

  constructor(private dataService: DataService) {
    this.dataService.getFlow().subscribe((flow) =>  {
      this.flow = flow;
    });
  }

  ngOnInit() {
  }

}
