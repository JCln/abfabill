import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { OldReceiptRoutingModule } from './old-receipt-routing.module';
import { OldReceiptComponent } from './old-receipt/old-receipt.component';
import { ReceiptComponent } from './receipt/receipt.component';

@NgModule({
  declarations: [OldReceiptComponent, ReceiptComponent],
  imports: [
    CommonModule,
    OldReceiptRoutingModule
  ]
})
export class OldReceiptModule { }
