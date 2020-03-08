import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { ServiceDeskRoutingModule } from './service-desk-routing.module';
import { ServicesComponent } from './services/services.component';

@NgModule({
  declarations: [ServicesComponent],
  imports: [
    CommonModule,
    FormsModule,
    ServiceDeskRoutingModule
  ]
})
export class ServiceDeskModule { }
