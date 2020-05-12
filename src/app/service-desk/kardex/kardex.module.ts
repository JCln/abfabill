import { NgModule } from '@angular/core';

import { CurrencySplitterModule } from './../../shared/currency-splitter.module';
import { SharedModule } from './../../shared/shared.module';
import { KardexRoutingModule } from './kardex-routing.module';
import { KardexComponent } from './kardex.component';


@NgModule({
  declarations: [KardexComponent],
  imports: [
    SharedModule,
    CurrencySplitterModule,
    KardexRoutingModule
  ]
})
export class KardexModule { }
