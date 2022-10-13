import { Component, OnInit } from '@angular/core';
import { company } from '../model/company.model';
import { CompanyService } from '../service/company.service';

@Component({
  selector: 'app-company-list',
  templateUrl: './company-list.component.html',
  styleUrls: ['./company-list.component.scss']
})
export class CompanyListComponent implements OnInit {

  public companylist: company[]
  constructor(
    private companyService: CompanyService
  ) {
    this.companylist =[];
   }

  ngOnInit(): void {
    this.getCompany();
  }

  //getCompany data
  getCompany() {
    this.companyService.getCompany().subscribe((res) =>{
     this.companylist = res;
    });
  }
}
