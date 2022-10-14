import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NameLogoPipe } from './pipe/name-logo.pipe';



@NgModule({
  declarations: [
    NameLogoPipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    NameLogoPipe
  ]
})
export class SharedModule { }
