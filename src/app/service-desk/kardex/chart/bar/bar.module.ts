import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ChartsModule } from 'ng2-charts';

import { BarRoutingModule } from './bar-routing.module';
import { BarComponent } from './bar.component';



@NgModule({
  declarations: [BarComponent],
  imports: [
    CommonModule,
    ChartsModule,
    BarRoutingModule
  ]
})
export class BarModule { }
