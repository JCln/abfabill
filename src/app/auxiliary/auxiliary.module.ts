import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AuxRoutingModule } from './auxiliary-routing.module';
import { HelpComponent } from './help/help.component';
import { InnerComponent } from './inner.component';


@NgModule({
  declarations: [InnerComponent, HelpComponent],
  imports: [
    CommonModule,
    AuxRoutingModule
  ]
})
export class AuxModule { }
