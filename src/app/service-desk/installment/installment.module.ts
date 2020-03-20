import { NgModule } from '@angular/core';

import { CurrencySplitterModule } from './../../shared/currency-splitter.module';
import { SharedModule } from './../../shared/shared.module';
import { InstallmentRoutingModule } from './installment-routing.module';
import { InstallmentComponent } from './installment.component';

@NgModule({
  declarations: [InstallmentComponent],
  imports: [
    SharedModule,
    CurrencySplitterModule,
    InstallmentRoutingModule
  ]
})
export class InstallmentModule { }
