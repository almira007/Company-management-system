import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable()
export class NotificationServiceService {

  constructor(private toastr: ToastrService) { }
  /**
   * for showing data added successfully
   */
  public showSuccess(message:string,title:string){
    this.toastr.success(message,title);
  }

  /**
   * for showing data deleted
   */
  public showError(message:string,title:string){
    this.toastr.error(message,title);
  }

  /**
   * edit the data
   */
  public showInfo(message:string,title:string){
    this.toastr.info(message,title)
  }

  /**
   * for open pop and delete the record
   */
  public showWarning(message:string,title:string){
    this.toastr.warning(message,title)
  }
}
