import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { InstallmentComponent } from './installment/installment.component';
import { ServiceDeskRoutingModule } from './service-desk-routing.module';
import { ServicesComponent } from './services/services.component';

@NgModule({
  declarations: [ServicesComponent, InstallmentComponent],
  imports: [
    CommonModule,
    FormsModule,
    ServiceDeskRoutingModule
  ]
})
export class ServiceDeskModule { }
