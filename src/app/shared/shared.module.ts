import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompanyPipe } from './pipe/company.pipe';



@NgModule({
  declarations: [
    CompanyPipe
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
