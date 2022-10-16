import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { NotificationServiceService } from 'src/app/shared/notification-service.service';
import { company } from '../model/company.model';
import { CompanyCommunicationService } from '../service/company-communication.service';
import { CompanyService } from '../service/company.service';

@Component({
  selector: 'app-company-list',
  templateUrl: './company-list.component.html',
  styleUrls: ['./company-list.component.scss']
})
export class CompanyListComponent implements OnInit {


  public companylist: company[]
  public searchText= '';

  constructor(
    private companyService: CompanyService,
    private router: Router,
    private companyCommunicationService: CompanyCommunicationService,
    private notification: NotificationServiceService
  ) {
    this.companylist = [];
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
    var delBtn = confirm("Are you sure to delete ?");
    if (delBtn == true) {
      this.companyService.deleteCompany(id).subscribe((result) => {
        this.getCompany();
        this.notification.showWarning('Data Deleted successfully','Message');

      });
    }
  }
  public editComapny(company: company): void {
    this.router.navigate(['company/edit',company.id])
    this.companyCommunicationService.editCompany.next(company);

  }

}
