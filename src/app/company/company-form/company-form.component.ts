import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { company } from '../model/company.model';
import { CompanyCommunicationService } from '../service/company-communication.service';
import { CompanyService } from '../service/company.service';

@Component({
  selector: 'app-company-form',
  templateUrl: './company-form.component.html',
  styleUrls: ['./company-form.component.scss']
})
export class CompanyFormComponent implements OnInit {

  //variable decration
  public isAddMode: boolean;
  private id!: string;

  //company form 
  public companyForm: FormGroup;
  //for validation on submit
  public isSubmitted: boolean;

  //only charecter patten
  private onlyCharecter: string = '^[A-Za-z\s]+$';
  //Only alphabets patten
  private onlyalphabets: string = '^[a-zA-Z \-\']+';

  //tags decaration 
  filed = [
    { id: 1, name: 'Web' },
    { id: 2, name: 'HTML' },
    { id: 3, name: 'QA' },
    { id: 4, name: 'BA' },
    { id: 5, name: 'Angular'},
   ];

  //inject
  constructor(
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private companyService: CompanyService,
    private companyCommunicationService: CompanyCommunicationService
  ) {
    this.isAddMode = true;
    this.isSubmitted = false
    this.companyForm = this.fb.group({
      id: [],
      companyname: ['', [Validators.required]],
      companydescription: ['', [Validators.required, Validators.pattern(this.onlyalphabets)]],
      selecttag: ['', Validators.required]
    });
  }

  //Validation function
  get formValidation(): { [key: string]: AbstractControl } {
    return this.companyForm.controls;
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.isAddMode = !this.id;

    //edit Data
    this.companyCommunicationService.editCompany.subscribe((response: company) => {
      this.companyForm.patchValue(response);
    });
  }

  //submit the data
  public saveCompany(): void {
    this.isSubmitted = true;
    if (this.companyForm.valid) {
      this.isSubmitted = false;
      if (this.companyForm.value.id) {
        this.updateCompany();
      }
      else {
        this.addCompany();
      }
      this.resetCompany();
    }
  }

  //reset button
  public resetCompany(): void {
    this.isSubmitted = false;
    this.companyForm.reset();
  }

  //add company data
  public addCompany(): void {
    this.companyService.addCompany(this.companyForm.value).subscribe(response => {
    this.companyCommunicationService.addCompany.next(response);
    });
  }

  //updated record add
  public updateCompany(): void {
    this.companyService.updateCompany(this.companyForm.value).subscribe((response) => {
    this.companyCommunicationService.updateRecord.next(response);
    });
  }
}
