import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { ViewBillService } from './../services/view-bill.service';
import { PardakhtRoutingModule } from './pardakht-routing.module';
import { ViewBillComponent } from './view-bill/view-bill.component';
import { NgxBarcodeModule } from 'ngx-barcode';

@NgModule({
  declarations: [
    ViewBillComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    NgxBarcodeModule,
    PardakhtRoutingModule
  ],
  providers: [ViewBillService]
})
export class PardakhtModule { }
