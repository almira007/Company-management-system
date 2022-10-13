import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { company } from '../model/company.model';

@Injectable()
export class CompanyService {

  public baseurl:string;

  constructor(private http: HttpClient) { 
    this.baseurl = "http://localhost:3000/";
  }

  getCompany(): Observable<company[]> {
    const url: string = this.baseurl + 'company';
    return this.http.get<company[]>(url);
  }

  // addCompany(user:company): Observable<company> {

  // }
}
