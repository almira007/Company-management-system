import { Component, ComponentRef, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Overlay, OverlayConfig, OverlayRef } from '@angular/cdk/overlay';
import { NotificationServiceService } from 'src/app/shared/notification-service.service';
import { Company } from '../model/company.model';
import { CompanyCommunicationService } from '../service/company-communication.service';
import { CompanyService } from '../service/company.service';
import { ConformationComponent } from 'src/app/shared/component/conformation/conformation.component';
import { ComponentPortal } from '@angular/cdk/portal';
import { BreadcrumbService } from '../../core/service/breadcrumb.service';




@Component({
  selector: 'app-company-list',
  templateUrl: './company-list.component.html',
  styleUrls: ['./company-list.component.scss']
})
export class CompanyListComponent implements OnInit {

  @Input() public dataList: any;

  /**
   * store model data in companydata
   */
  public companyList: Company[]

  public searchText = '';

  private overlayRef!: OverlayRef;

  constructor(
    private companyService: CompanyService,
    private router: Router,
    private companyCommunicationService: CompanyCommunicationService,
    private notification: NotificationServiceService,
    private overlay: Overlay,
    private breadcrumbService: BreadcrumbService
  ) {
    this.companyList = [];
  }

  ngOnInit(): void {
    this.getCompany()


    /**
     * add the data using subject
     */
    this.companyCommunicationService.addCompany.subscribe((response: Company) => {
      this.companyList.push(response);
    });

    /**
    * update record data using subject
    */
    this.companyCommunicationService.updateRecord.subscribe((response: Company) => {
      const index = this.companyList.findIndex((res) => res.id === response.id);
      this.companyList.splice(index, 1, response);
    });
  }

  /**
    * for getting data from databaset
    */
  getCompany() {
    this.companyService.getCompany().subscribe((res) => {
      this.companyList = res;
    });
  }

  /**
    * delete the record using overlay
     * @param id 
    * return company
    */
  public deleteCompanyData(item: Company): void {
    // Overlay config
    const overlayConfig: OverlayConfig = new OverlayConfig();
    overlayConfig.positionStrategy = this.overlay.position().global().centerHorizontally().centerVertically();

    this.overlayRef = this.overlay.create(overlayConfig);

    // Over Porat;
    const portal = new ComponentPortal(ConformationComponent);
    // porat attched
    const componentRef = this.overlayRef.attach(portal)
    /**
      * set a instance in name
    */
    componentRef.instance.name = item.companyName;

    componentRef.instance.confirm.subscribe((res) => {
      this.companyService.deleteCompany(item.id).subscribe((result) => {
        this.getCompany();
        /**
        * using toaster
       */
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

  /**
    * breadcrumb using subject
    */
  public redirectAdd(): void {
    this.breadcrumbService.setData(0, 'add');
  }

  public editComapny(company: Company): void {
    this.breadcrumbService.setData(company.id, company.companyName);
    this.router.navigate(['company/edit', company.id]);
  }

}
