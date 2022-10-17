import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NameLogoPipe } from './pipe/name-logo.pipe';
import { FilterRecordPipe } from './pipe/filter-record.pipe';
import { NotificationServiceService } from './notification-service.service';
import { ConformationComponent } from './component/conformation/conformation.component';



@NgModule({
  declarations: [
    NameLogoPipe,
    FilterRecordPipe,
    ConformationComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    NameLogoPipe,
    FilterRecordPipe,
    ConformationComponent
  ],
  providers:[
    NotificationServiceService
  ]
})
export class SharedModule { }
