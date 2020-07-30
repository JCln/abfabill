import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';

import { ElcServicesRoutingModule } from './elc-services-routing.module';
import { ElcServicesComponent } from './elc-services.component';

@NgModule({
  declarations: [ElcServicesComponent],
  imports: [
    SharedModule,
    ElcServicesRoutingModule
  ]
})
export class ElcServicesModule { }
