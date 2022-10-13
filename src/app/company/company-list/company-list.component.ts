import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { company } from '../model/company.model';
import { CompanyService } from '../service/company.service';

@Component({
  selector: 'app-company-list',
  templateUrl: './company-list.component.html',
  styleUrls: ['./company-list.component.scss']
})
export class CompanyListComponent implements OnInit {

  @Output() public edit: EventEmitter<any>;

  public companylist: company[]

  constructor(
    private companyService: CompanyService
  ) {
    this.companylist =[];
    this.edit = new EventEmitter();
   }

  ngOnInit(): void {
    this.getCompany()
  }

  //getCompany data
  getCompany() {
    this.companyService.getCompany().subscribe((res) =>{
     this.companylist = res;
    });
  }

  
  //Delete the record
  public deleteCompanyData(id: any): void {
    this.companyService.deleteCompany(id).subscribe((result) => {
      this.getCompany();
    });
  }
  public editCompany(company: company): void {
    // this.router.navigate(['employee/edit/', employee.id]);
    this.edit.emit(company)
  }

}
