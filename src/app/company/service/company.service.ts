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
  
  addCompany(user: company): Observable<company> {
    const url: string = this.baseurl + 'company';
    return this.http.post<company>(url, user);
  }
  
  updateCompany(company: company): Observable<company> {
    const url: string = this.baseurl + 'company/' + company.id;
    return this.http.put<company>(url, company);
  }

  
  deleteCompany(id: number): Observable<company> {
    const url: string = this.baseurl + 'company/' + id;
    return this.http.delete<company>(url);
  }
}
