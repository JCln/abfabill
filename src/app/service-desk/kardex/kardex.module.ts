import { NgModule } from '@angular/core';
import { ChartsModule } from 'ng2-charts';

import { CurrencySplitterModule } from './../../shared/currency-splitter.module';
import { SharedModule } from './../../shared/shared.module';
import { KardexRoutingModule } from './kardex-routing.module';
import { KardexComponent } from './kardex.component';
import { BubbleComponent } from './chart/bubble/bubble.component';
import { BarComponent } from './chart/bar/bar.component';


@NgModule({
  declarations: [KardexComponent, BubbleComponent, BarComponent],
  imports: [
    SharedModule,
    CurrencySplitterModule,
    ChartsModule,
    KardexRoutingModule
  ]
})
export class KardexModule { }
