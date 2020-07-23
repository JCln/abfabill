import { NgModule } from '@angular/core';

import { SharedModule } from './../../shared/shared.module';
import { KardexRoutingModule } from './kardex-routing.module';
import { KardexComponent } from './kardex.component';


@NgModule({
  declarations: [KardexComponent],
  imports: [
    SharedModule,
    KardexRoutingModule
  ]
})
export class KardexModule { }
