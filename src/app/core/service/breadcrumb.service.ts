import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';


@Injectable()
export class BreadcrumbService {

  public breadCrumb: Subject<any>;

  constructor() {
 
    this.breadCrumb = new Subject();
  }

  /**
  * setdata 
  */
  public setData(id: number, name: string) {
    this.breadCrumb.next({ id: id, name: name });
  }
}
