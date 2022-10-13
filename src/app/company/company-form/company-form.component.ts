import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { company } from '../model/company.model';
import { CompanyService } from '../service/company.service';

@Component({
  selector: 'app-company-form',
  templateUrl: './company-form.component.html',
  styleUrls: ['./company-form.component.scss']
})
export class CompanyFormComponent implements OnInit {

  //variable decration
  public add!: company;
  public isAddMode: boolean;
  private id!: string;

  public companyForm: FormGroup;
  public isSubmitted: boolean;
  public companyData: company[];

  //only charecter patten
  private onlyCharecter: string = '^[A-Za-z\s]+$';
  //Only alphabets patten
  private onlyalphabets: string = '^[a-zA-Z \-\']+';

  //inject
  constructor(
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private companyService: CompanyService
  ) {
    this.isAddMode = true;
    this.isSubmitted = false
    this.companyForm = this.fb.group({
      id: [],
      companyname: ['', [Validators.required, Validators.minLength(3), Validators.pattern(this.onlyCharecter)]],
      companydescription: ['', [Validators.required, Validators.pattern(this.onlyalphabets)]],
      selecttag: ['', [Validators.required]]
    });
    this.companyData = [];
  }

  //Validation function
  get formValidation(): { [key: string]: AbstractControl } {
    return this.companyForm.controls;
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.isAddMode = !this.id;
  }

  //submit the data
  public saveCompany(): void {
    this.isSubmitted = true;
    if (this.companyForm.valid) {
      this.isSubmitted = false;
      if (this.companyForm.value.id) {
        console.log(this.companyForm)
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
      console.log();
    });
  }
}
