import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { CurrencySplitterModule } from './../../../shared/currency-splitter.module';
import { OldReceiptRoutingModule } from './old-receipt-routing.module';
import { ReceiptComponent } from './receipt/receipt.component';

@NgModule({
  declarations: [ReceiptComponent],
  imports: [
    CommonModule,
    CurrencySplitterModule,
    OldReceiptRoutingModule
  ]
})
export class OldReceiptModule { }
