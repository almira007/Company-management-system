import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BreadcrumbModule, BreadcrumbService } from 'xng-breadcrumb';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    NgbModule,
    BreadcrumbModule,
    ToastrModule.forRoot({
      "closeButton": true,
      "progressBar": true,
      "timeOut": 3000,
      "extendedTimeOut": 1000,
      "positionClass": "toast-top-center"
    }),
    BrowserAnimationsModule
    ],
  providers: [
    BreadcrumbService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
