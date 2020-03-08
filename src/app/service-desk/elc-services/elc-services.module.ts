import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ElcServicesRoutingModule } from './elc-services-routing.module';
import { ElcServicesComponent } from './elc-services.component';

@NgModule({
  declarations: [ElcServicesComponent],
  imports: [
    CommonModule,
    ElcServicesRoutingModule
  ]
})
export class ElcServicesModule { }
