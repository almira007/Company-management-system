import { Injectable } from '@angular/core';
import {
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { Company } from 'src/app/company/model/company.model';
import { CompanyService } from 'src/app/company/service/company.service';

@Injectable()
export class EditResolver implements Resolve<Company> {

  constructor(private http: CompanyService){
  }
/**
 * 
 * @param route 
 * @returns 
 */
  resolve(route: ActivatedRouteSnapshot): Observable<Company> {
    const id = route.params['id'];
    console.log('company Id',id);
    return this.http.getComapnyById(id);
  }
}
