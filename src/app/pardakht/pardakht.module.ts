import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NgxBarcodeModule } from 'ngx-barcode';

import { ViewBillService } from './../services/view-bill.service';
import { SharedModule } from './../shared/shared.module';
import { PardakhtRoutingModule } from './pardakht-routing.module';

@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    SharedModule,
    NgxBarcodeModule,
    PardakhtRoutingModule
  ],
  providers: [ViewBillService]
})
export class PardakhtModule { }
