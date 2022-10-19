import { Component, ComponentRef, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Overlay, OverlayConfig, OverlayRef } from '@angular/cdk/overlay';
import { NotificationServiceService } from 'src/app/shared/notification-service.service';
import { company } from '../model/company.model';
import { CompanyCommunicationService } from '../service/company-communication.service';
import { CompanyService } from '../service/company.service';
import { ConformationComponent } from 'src/app/shared/component/conformation/conformation.component';
import { ComponentPortal } from '@angular/cdk/portal';
import { BreadcrumbService } from 'src/app/core/service/breadcrumb.service';




@Component({
  selector: 'app-company-list',
  templateUrl: './company-list.component.html',
  styleUrls: ['./company-list.component.scss']
})
export class CompanyListComponent implements OnInit {

  @Input() public dataList: any;

  public companylist: company[]

  public searchText = '';

  private overlayRef!: OverlayRef;

  constructor(
    private companyService: CompanyService,
    private router: Router,
    private companyCommunicationService: CompanyCommunicationService,
    private notification: NotificationServiceService,
    private overlay: Overlay,
    private breadcrumb: BreadcrumbService
  ) {
    this.companylist = [];
  }

  ngOnInit(): void {
    this.getCompany()

    //add data
    this.companyCommunicationService.addCompany.subscribe((response: company) => {
      this.companylist.push(response);
    });

    //update Record
    this.companyCommunicationService.updateRecord.subscribe((response: company) => {
      const index = this.companylist.findIndex((res) => res.id === response.id);
      this.companylist.splice(index, 1, response);
    });
  }
 

  //getCompany data
  getCompany() {
    this.companyService.getCompany().subscribe((res) => {
      this.companylist = res;
    });
  }
  //Delete the record
  public deleteCompanyData(item: company): void {
    // Overlay config
    const overlayConfig: OverlayConfig = new OverlayConfig();
    overlayConfig.positionStrategy = this.overlay.position().global().centerHorizontally().centerVertically();

    this.overlayRef = this.overlay.create(overlayConfig);

    // Over Porat;
    const portal = new ComponentPortal(ConformationComponent);
    // porat attched
    const componentRef = this.overlayRef.attach(portal)

    componentRef.instance.name = item.companyname;

    componentRef.instance.confirm.subscribe((res) => {
      this.companyService.deleteCompany(item.id).subscribe((result) => {
        this.getCompany();
        this.notification.showWarning('Data Deleted successfully', 'Message');
      });
      this.overlayRef.detach();
      console.log(res);
    });

    componentRef.instance.cancle.subscribe((res) => {
      console.log(res);
      this.overlayRef.detach();
    });
  }

  public editComapny(company: company): void {
    this.router.navigate(['company/edit', company.id]);
  }

  // BreadCrumb 
  public redirectBreadAdd() { 
    this.breadcrumb.breadcrumb.next("Add");
  }

  public redirectBreadEdit(companyname: string) {
   this.breadcrumb.breadcrumb.next(companyname)
  }

}
