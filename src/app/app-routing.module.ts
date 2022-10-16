import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
     path:'',
     pathMatch:'full',
     redirectTo:'company'
  },
  { 
     path: 'company', 
     loadChildren: () => import('./company/company.module').then(m => m.CompanyModule),
     data:{breadcrumb: {alias: 'Company'}}
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
