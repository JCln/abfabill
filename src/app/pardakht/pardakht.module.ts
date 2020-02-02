import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NgxBarcodeModule } from 'ngx-barcode';

import { PageNotFoundComponent } from './../page-not-found/page-not-found.component';
import { ViewBillService } from './../services/view-bill.service';
import { SharedModule } from './../shared/shared.module';
import { PardakhtRoutingModule } from './pardakht-routing.module';
import { OldReceiptComponent } from './view-bill/old-receipt/old-receipt.component';
import { ViewBillComponent } from './view-bill/view-bill.component';

@NgModule({
  declarations: [
    ViewBillComponent,
    // SuccessComponent,
    // FailedComponent,
    PageNotFoundComponent,
    OldReceiptComponent
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
