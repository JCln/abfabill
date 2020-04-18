import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ViewBillLightRoutingModule } from './view-bill-light-routing.module';
import { ViewBillLightComponent } from './view-bill-light.component';


@NgModule({
  declarations: [ViewBillLightComponent],
  imports: [
    CommonModule,
    ViewBillLightRoutingModule
  ]
})
export class ViewBillLightModule { }
