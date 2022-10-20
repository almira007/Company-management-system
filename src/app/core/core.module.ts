import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { EditResolver } from './resolver/edit.resolver';
import { BreadCrumbComponent } from './navbar/component/bread-crumb/bread-crumb.component';
import { HeaderComponent } from './navbar/component/header/header.component';
import { BreadcrumbService } from './service/breadcrumb.service';



@NgModule({
  declarations: [
    HeaderComponent,
    BreadCrumbComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
  ],
  providers:[
    EditResolver,
    BreadcrumbService
  ],
 exports:[
  HeaderComponent,
  BreadCrumbComponent
 ]
})
export class CoreModule { }
