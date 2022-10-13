import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { company } from '../model/company.model';

@Component({
  selector: 'app-company-form',
  templateUrl: './company-form.component.html',
  styleUrls: ['./company-form.component.scss']
})
export class CompanyFormComponent implements OnInit {

  public isAddMode: boolean;
  private id!: string;

  public companyForm: FormGroup;
  public isSubmitted: boolean;
  public companyData: company[];

  constructor(
    private route: ActivatedRoute,
    private fb: FormBuilder) 
    { 
    this.isAddMode = true;
    this.isSubmitted = false
    this.companyForm = this.fb.group({
      id:[],
      companyname: ['',[Validators.required]],
      companydescription: ['',[Validators.required]],
      selecttag:['',[Validators.required]]
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
 
  public saveCompany(): void{
    this.isSubmitted = true;

  }
}
