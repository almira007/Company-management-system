import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { company } from '../model/company.model';

@Injectable()
export class CompanyCommunicationService {

  public addCompany: Subject<company>;
  

  public updateRecord: Subject<company>;

  constructor() { 
    this.addCompany = new Subject();
    this.updateRecord = new Subject();
  }
}
