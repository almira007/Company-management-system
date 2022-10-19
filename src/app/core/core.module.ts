import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './navbar/header/header.component';
import { RouterModule } from '@angular/router';
import { EditResolver } from './resolver/edit.resolver';



@NgModule({
  declarations: [
    HeaderComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
  ],
  providers:[
    EditResolver
  ],
  exports:[HeaderComponent]
})
export class CoreModule { }
