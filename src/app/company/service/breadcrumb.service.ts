import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable()
export class BreadcrumbService {

  public breadcrumb: Subject<string>

  constructor() { 
    this.breadcrumb = new Subject
  }
}
