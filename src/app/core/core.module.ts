import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './navbar/header/header.component';
import { RouterModule } from '@angular/router';
import { BreadcrumbService } from '../company/service/breadcrumb.service';
import { EditResolver } from './resolver/edit.resolver';



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
    BreadcrumbService,
    EditResolver
  ]
})
export class CoreModule { }
