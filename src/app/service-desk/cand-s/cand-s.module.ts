import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { CAndSRoutingModule } from './cand-s-routing.module';
import { CAndSComponent } from './cand-s.component';


@NgModule({
  declarations: [CAndSComponent],
  imports: [
    CommonModule,
    CAndSRoutingModule
  ]
})
export class CAndSModule { }
