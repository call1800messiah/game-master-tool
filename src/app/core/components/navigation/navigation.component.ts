import { Component, OnInit } from '@angular/core';

import { NavigationService } from '../../services/navigation.service';



@Component({
  selector: 'gmt-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {
  navigation: any[];

  constructor(private navigationService: NavigationService) {
    this.navigationService.getNavigation().subscribe((nav) => {
      this.navigation = nav;
    });
  }

  ngOnInit() {
  }
}
