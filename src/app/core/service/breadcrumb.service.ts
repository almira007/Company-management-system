import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class BreadcrumbService {

  public breadCrumb: Subject<any>;

  constructor() {
    this.breadCrumb = new Subject();
  }

  public setData(id: number, name: string) {
    this.breadCrumb.next({ id: id, name: name });
  }
}
