import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { company } from '../model/company.model';

@Injectable({
  providedIn: 'root'
})
export class CompanyCommunicationService {

  public addCompany: Subject<company>;
  
  constructor() { 
    this.addCompany = new Subject();
  }
}
