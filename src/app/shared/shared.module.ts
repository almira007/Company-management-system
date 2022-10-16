import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NameLogoPipe } from './pipe/name-logo.pipe';
import { FilterRecordPipe } from './pipe/filter-record.pipe';
import { NotificationServiceService } from './notification-service.service';



@NgModule({
  declarations: [
    NameLogoPipe,
    FilterRecordPipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    NameLogoPipe,
    FilterRecordPipe
  ],
  providers:[
    NotificationServiceService
  ]
})
export class SharedModule { }
