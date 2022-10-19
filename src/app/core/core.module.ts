import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './navbar/header/header.component';
import { RouterModule } from '@angular/router';
import { EditResolver } from './resolver/edit.resolver';
import { BreadcrumbService } from './service/breadcrumb.service';



@NgModule({
  declarations: [
    HeaderComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,

  ],
  exports:[HeaderComponent],
  providers:[
    EditResolver,
    BreadcrumbService
  ]
})
export class CoreModule { }
