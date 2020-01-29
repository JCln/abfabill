import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NgxBarcodeModule } from 'ngx-barcode';

import { ViewBillService } from './../services/view-bill.service';
import { SharedModule } from './../shared/shared.module';
import { PardakhtRoutingModule } from './pardakht-routing.module';
import { ViewBillComponent } from './view-bill/view-bill.component';

@NgModule({
  declarations: [
    ViewBillComponent
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
