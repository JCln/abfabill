import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AuxRoutingModule } from './auxiliary-routing.module';
import { HelpComponent } from './help/help.component';


@NgModule({
  declarations: [HelpComponent],
  imports: [
    CommonModule,
    AuxRoutingModule
  ]
})
export class AuxModule { }
