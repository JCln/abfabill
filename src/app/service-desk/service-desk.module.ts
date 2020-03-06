import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { ViewBillComponent } from '../pardakht/view-bill/view-bill.component';
import { ServiceDeskRoutingModule } from './service-desk-routing.module';
import { ServicesComponent } from './services/services.component';

@NgModule({
  declarations: [ServicesComponent, ViewBillComponent],
  imports: [
    CommonModule,
    FormsModule,
    ServiceDeskRoutingModule
  ]
})
export class ServiceDeskModule { }
