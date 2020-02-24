import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NgxBarcodeModule } from 'ngx-barcode';

import { HeaderComponent } from './../_layout/header/header.component';
import { LayoutComponent } from './../_layout/layout/layout.component';
import { ViewBillService } from './../services/view-bill.service';
import { SharedModule } from './../shared/shared.module';
import { InstallmentComponent } from './installment/installment.component';
import { PardakhtRoutingModule } from './pardakht-routing.module';
import { OldReceiptComponent } from './view-bill/old-receipt/old-receipt.component';

@NgModule({
  declarations: [
    LayoutComponent,
    OldReceiptComponent,
    HeaderComponent,
    InstallmentComponent
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
