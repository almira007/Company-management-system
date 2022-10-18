import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './navbar/header/header.component';
import { RouterModule } from '@angular/router';
import { BreadcrumbService } from '../company/service/breadcrumb.service';



@NgModule({
  declarations: [
    HeaderComponent
  ],
  imports: [
    CommonModule,
    RouterModule,

  ],
  exports:[HeaderComponent],
  providers:[
    BreadcrumbService
  ]
})
export class CoreModule { }
