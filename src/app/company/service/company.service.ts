import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { company } from '../model/company.model';

@Injectable()
export class CompanyService {

  public baseurl: string;

  constructor(
    private http: HttpClient
  ) {
    this.baseurl = "http://localhost:3000/";
  }

  /**
   * Get list of company
   * @returns company list
   */
  public getCompany(): Observable<company[]> {
    const url: string = this.baseurl + 'company';
    return this.http.get<company[]>(url);
  }

  /**
   * Get company by id
   * @param id get id
   * @returns company object
   */
  public getComapnyById(id: number): Observable<company> {
    const url: string = this.baseurl + 'company/' + id;
    return this.http.get<company>(url);
  }


  /**
   * Add new company
   * @param company Get company bosy
   * @returns comapny object
   */
  public addCompany(company: company): Observable<company> {
    const url: string = this.baseurl + 'company';
    return this.http.post<company>(url, company);
  }

  /**
   * Update Company
   * @param company get company
   * @returns company object
   */
  public updateCompany(company: company): Observable<company> {
    const url: string = this.baseurl + 'company/' + company.id;
    return this.http.put<company>(url, company);
  }

  /**
   * Delete company
   * @param id get id
   * @returns 
   */
  public deleteCompany(id: number): Observable<company> {
    const url: string = this.baseurl + 'company/' + id;
    return this.http.delete<company>(url);
  }
}
