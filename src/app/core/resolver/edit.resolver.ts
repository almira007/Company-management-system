import { Injectable } from '@angular/core';
import {
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { company } from 'src/app/company/model/company.model';
import { CompanyService } from 'src/app/company/service/company.service';

@Injectable()
export class EditResolver implements Resolve<company> {

  constructor(private http: CompanyService){
  }
/**
 * 
 * @param route 
 * @returns 
 */
  resolve(route: ActivatedRouteSnapshot): Observable<company> {
    const id = route.params['id'];
    console.log('company Id',id);
    return this.http.getComapnyById(id);
  }
}
