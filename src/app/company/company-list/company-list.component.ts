import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { company } from '../model/company.model';
import { CompanyCommunicationService } from '../service/company-communication.service';
import { CompanyService } from '../service/company.service';

@Component({
  selector: 'app-company-list',
  templateUrl: './company-list.component.html',
  styleUrls: ['./company-list.component.scss']
})
export class CompanyListComponent implements OnInit {

  // @Output() public edit: EventEmitter<any>;

  public companylist: company[]
  public search= '';

  constructor(
    private companyService: CompanyService,
    private router: Router,
    private companyCommunicationService: CompanyCommunicationService
  ) {
    this.companylist = [];
    // this.edit = new EventEmitter();
  }

  ngOnInit(): void {
    this.getCompany()

    //add data
    this.companyCommunicationService.addCompany.subscribe((response:company) =>{
      this.companylist.push(response);
    });

    //update Record
    this.companyCommunicationService.updateRecord.subscribe((response: company) => {
      const index = this.companylist.findIndex((res) => res.id === response.id);
      this.companylist.splice(index, 1, response);
    })
  }

  //getCompany data
  getCompany() {
    this.companyService.getCompany().subscribe((res) => {
      this.companylist = res;
    });
  }
  //Delete the record
  public deleteCompanyData(id: any): void {
    var delBtn = confirm(" Do you want to delete ?");
    if (delBtn == true) {
      this.companyService.deleteCompany(id).subscribe((result) => {
        this.getCompany();
      });
    }
  }
  public editComapny(company: company): void {
    this.router.navigate(['company/edit',company.id])
    this.companyCommunicationService.editCompany.next(company);

  }

}
