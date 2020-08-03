import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { GenerateBillRoutingModule } from './generate-bill-routing.module';
import { GenerateBillComponent } from './generate-bill.component';


@NgModule({
  declarations: [GenerateBillComponent],
  imports: [
    CommonModule,
    GenerateBillRoutingModule
  ]
})
export class GenerateBillModule { }
