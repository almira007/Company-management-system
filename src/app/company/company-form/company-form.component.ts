import { TitleCasePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { BreadcrumbService } from 'src/app/core/service/breadcrumb.service';
import { NotificationServiceService } from 'src/app/shared/notification-service.service';
import { Company } from '../model/company.model';
import { CompanyCommunicationService } from '../service/company-communication.service';
import { CompanyService } from '../service/company.service';

@Component({
  selector: 'app-company-form',
  templateUrl: './company-form.component.html',
  styleUrls: ['./company-form.component.scss']
})
export class CompanyFormComponent implements OnInit {

  /**
   * Variable decration
 */
  public isAddMode: boolean;
  private id!: string;
  public url: any;

  //company form 
  public companyForm: FormGroup;

  //for validation on submit
  public isSubmitted: boolean;

  //only charecter patten
  private onlyCharecter: string = '^[A-Za-z\s]+$';

  //Only alphabets patten
  private onlyalphabets: string = '^[a-zA-Z \-\']+';

  //image variable
  public imageString: any;
  public imagePath: any;
  public imageFile!: File;
  public isImagevalue: boolean;
  public company_name!: string;
  public companyId: string;


  //tags decaration 
  filed = [
    { id: 1, name: 'Web' },
    { id: 2, name: 'HTML' },
    { id: 3, name: 'QA' },
    { id: 4, name: 'BA' },
    { id: 5, name: 'Angular' },
  ];

  constructor(
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private companyService: CompanyService,
    private companyCommunicationService: CompanyCommunicationService,
    private notification: NotificationServiceService,
    private activatedRoute: ActivatedRoute) {
    this.isAddMode = true;
    this.isSubmitted = false;
    /**
     * formbuilder
     */
    this.companyForm = this.fb.group({
      id: [],
      companyName: ['', [Validators.required]],
      companyDescription: ['', [Validators.required, Validators.pattern(this.onlyalphabets)]],
      selectTag: ['', Validators.required],
      companyLogo: ['', Validators.required],
      companyPath: [''],
    });

    this.companyId = "";
    this.imageString = '';
    this.imagePath = '';
    this.isImagevalue = false;


    this.activatedRoute.data.subscribe((data) => {
      console.log(data)
      this.companyForm.patchValue(data['Company']);
      this.imageString = this.companyForm.get('companyPath')?.value

    });
  }

  /**
   * getter function
   */
  get formValidation(): { [key: string]: AbstractControl } {
    return this.companyForm.controls;
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.isAddMode = !this.id;
    /**
     * patch value using resolver
     */

    this.activatedRoute.data.subscribe((response) => {
      this.companyForm.patchValue(response['data']);
    });
  }

  /**
     * image upload
     */
  public imageUploaded(event: any) {
    this.imageFile = event.target.files[0];
    console.log(this.imageFile)
    const reader = new FileReader();
    reader.readAsDataURL(this.imageFile);
    reader.onload = () => {
      this.imageString = reader.result;
      console.log(this.imageString)
    }

  }
  /**
   * save data 
   * return companyForm value
   */
  public saveCompany(): void {
    this.isSubmitted = true;
    if (this.companyForm.valid) {
      this.isSubmitted = false;
      if (this.companyForm.value.id) {
        this.updateCompany();
        /**
         * using toaster
        */
        this.notification.showInfo("This is Edit Data", "Data Add sucessfully")
      }
      else {
        this.addCompany();
        /**
        * using toaster
       */
        this.notification.showSuccess("Data shown successfully !!", "Data Add sucessfully");
      }
      this.isSubmitted = false;
      this.resetCompany();
      this.isImagevalue = false;
      this.isSubmitted = false;
    }
    else {
      /**
        * using toaster
       */
      this.notification.showError('Something Went Wrong', 'Message');
    }
  }

  /**
   * for reset
   */
  public resetCompany(): void {
    this.isSubmitted = false;
    this.companyForm.reset();
  }

  /**
   * Add companydata 
   * return companyForm value using subject
   */
  public addCompany(): void {
    this.companyForm.controls['companyPath'].setValue(this.imageString)
    this.companyService.addCompany(this.companyForm.value).subscribe(response => {
      this.companyCommunicationService.addCompany.next(response);
    });
  }

  /**
   * Update Data 
   * return formValue using subject
   */
  public updateCompany(): void {
    this.companyForm.controls['companyPath'].setValue(this.imageString)
    this.companyService.updateCompany(this.companyForm.value).subscribe((response) => {
      this.companyCommunicationService.updateRecord.next(response);
    });
  }
}
