import { Component, OnInit, Input } from '@angular/core';

import { Information, AuthService } from '@app/core/';



@Component({
  selector: 'gmt-information-list',
  templateUrl: './information-list.component.html',
  styleUrls: ['./information-list.component.scss']
})
export class InformationListComponent implements OnInit {
  @Input() information: Information[];

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  addInfo(index?: number){
    
  }
}
