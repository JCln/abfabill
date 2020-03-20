import { NgModule } from '@angular/core';
import { ViewBillService } from 'src/app/services/view-bill.service';
import { SharedModule } from 'src/app/shared/shared.module';

import { CurrencySplitterModule } from './../../shared/currency-splitter.module';
import { PardakhtRoutingModule } from './pardakht-routing.module';
import { ViewBillComponent } from './view-bill/view-bill.component';

@NgModule({
  declarations: [ViewBillComponent],
  imports: [
    SharedModule,
    CurrencySplitterModule,
    PardakhtRoutingModule
  ],
  providers: [ViewBillService]
})
export class PardakhtModule { }
