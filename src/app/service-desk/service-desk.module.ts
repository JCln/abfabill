import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ServiceDeskRoutingModule } from './service-desk-routing.module';
import { ServicesComponent } from './services/services.component';

@NgModule({
  declarations: [ServicesComponent],
  imports: [
    CommonModule,
    ServiceDeskRoutingModule
  ]
})
export class ServiceDeskModule { }
