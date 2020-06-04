import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { HelpRoutingModule } from './help-routing.module';
import { HelpComponent } from './help.component';


@NgModule({
  declarations: [HelpComponent],
  imports: [
    CommonModule,
    HelpRoutingModule
  ]
})
export class HelpModule { }
