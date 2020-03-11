import { NgModule } from '@angular/core';

import { SharedModule } from './../../shared/shared.module';
import { InstallmentRoutingModule } from './installment-routing.module';
import { InstallmentComponent } from './installment.component';

@NgModule({
  declarations: [InstallmentComponent],
  imports: [
    SharedModule,
    InstallmentRoutingModule
  ]
})
export class InstallmentModule { }
