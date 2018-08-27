import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { DataService } from './data.service';




@Injectable()
export class NavigationService {
  navigation: Observable<any[]>;

  constructor(private dataService: DataService) {
    this.navigation = this.dataService.getNavigation();
  }

  getNavigation(): Observable<any[]> {
    return this.navigation;
  }
}
