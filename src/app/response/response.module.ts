import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { FailedComponent } from './failed/failed.component';
import { ResponseRoutingModule } from './response-routing.module';
import { SuccessComponent } from './success/success.component';

@NgModule({
  declarations: [
    SuccessComponent,
    FailedComponent
  ],
  imports: [
    CommonModule,
    ResponseRoutingModule
  ]
})
export class ResponseModule { }
