import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CompanyRoutingModule } from './company-routing.module';
import { CompanyComponent } from './company.component';
import { CompanyListComponent } from './company-list/company-list.component';
import { CompanyFormComponent } from './company-form/company-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CompanyService } from './service/company.service';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from '../shared/shared.module';
import { CompanyCommunicationService } from './service/company-communication.service';
import { NgSelectModule } from '@ng-select/ng-select';
import { NgDynamicBreadcrumbModule } from 'ng-dynamic-breadcrumb';



@NgModule({
  declarations: [
    CompanyComponent,
    CompanyListComponent,
    CompanyFormComponent
  ],
  imports: [
    CommonModule,
    CompanyRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    SharedModule,
    FormsModule,
    NgSelectModule,
    NgDynamicBreadcrumbModule
  ],
  providers:[
    CompanyService,
    CompanyCommunicationService
  ]
})
export class CompanyModule { }
