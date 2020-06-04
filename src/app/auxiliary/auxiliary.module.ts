import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AuxRoutingModule } from './auxiliary-routing.module';
import { InnerComponent } from './inner.component';


@NgModule({
  declarations: [InnerComponent],
  imports: [
    CommonModule,
    AuxRoutingModule
  ]
})
export class AuxModule { }
