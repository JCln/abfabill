import { NgModule } from '@angular/core';
import { NgxBarcodeModule } from 'ngx-barcode';
import { SharedFooterModule } from 'src/app/shared/shared-footer.module';
import { SharedModule } from 'src/app/shared/shared.module';

import { HeaderComponent } from './../../_layout/header/header.component';
import { LayoutComponent } from './../../_layout/layout/layout.component';
import { CurrencySplitterModule } from './../../shared/currency-splitter.module';
import { PardakhtRoutingModule } from './pardakht-routing.module';
import { ViewBillComponent } from './view-bill/view-bill.component';

@NgModule({
  declarations: [ViewBillComponent, LayoutComponent, HeaderComponent],
  imports: [
    SharedModule,
    SharedFooterModule,
    CurrencySplitterModule,
    NgxBarcodeModule,
    PardakhtRoutingModule
  ]
})
export class PardakhtModule { }
