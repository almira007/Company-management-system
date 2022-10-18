import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditResolver } from '../core/resolver/edit.resolver';
import { CompanyFormComponent } from './company-form/company-form.component';
import { CompanyComponent } from './company.component';

const routes: Routes = [
  {
    path: '',
    component: CompanyComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'add'
      },
      {
        path: 'add',
        component: CompanyFormComponent,
      },
      {
        path: 'edit/:id',
        component: CompanyFormComponent,
        resolve: { data: EditResolver }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [EditResolver]
})
export class CompanyRoutingModule { }
