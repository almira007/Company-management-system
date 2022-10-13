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

  public add!: company;
  public isAddMode: boolean;
  private id!: string;

  public companyForm: FormGroup;
  public isSubmitted: boolean;
  public companyData: company[];

  constructor(
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private companyService: CompanyService) 
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
    if(this.companyForm.valid){
      this.isSubmitted = false;
      if(this.companyForm.value.id){
        console.log(this.companyForm)
      }
      else{
        this.addCompany();
      }
      this.resetCompany();
    }
  }
  
  
  public resetCompany(): void {
    this.isSubmitted = false;
    this.companyForm.reset();
  }
  public addCompany(): void {
    this.companyService.addCompany(this.companyForm.value).subscribe(response => {
    });
  }
}
