import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { OldReceiptRoutingModule } from './old-receipt-routing.module';
import { ReceiptComponent } from './receipt/receipt.component';

@NgModule({
  declarations: [ReceiptComponent],
  imports: [
    CommonModule,
    OldReceiptRoutingModule
  ]
})
export class OldReceiptModule { }
