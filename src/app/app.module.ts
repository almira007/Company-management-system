import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {  ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { OverlayModule } from '@angular/cdk/overlay';
import { CoreModule } from './core/core.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CoreModule,
    AppRoutingModule,
    NgbModule,
    ToastrModule.forRoot({
      "closeButton": true,
      "progressBar": true,
      "timeOut": 3000,
      "extendedTimeOut": 1000,
      "positionClass": "toast-top-center"
    }),
    OverlayModule
    ],
  
  bootstrap: [AppComponent]
})
export class AppModule { }
