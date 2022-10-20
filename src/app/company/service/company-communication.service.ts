import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Company } from '../model/company.model';

@Injectable()
export class CompanyCommunicationService {

  public addCompany: Subject<Company>;
  

  public updateRecord: Subject<Company>;

  
  /**
   * using subject
   * @param Company 
   */
  constructor() { 
    this.addCompany = new Subject();
    this.updateRecord = new Subject();
  }
}
