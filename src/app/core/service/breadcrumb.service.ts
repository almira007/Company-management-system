import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn:'root'
})
export class BreadcrumbService {

  public breadcrumb: Subject<string>;

  constructor() { 
    this.breadcrumb = new Subject();
  }   
}
