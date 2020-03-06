import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { InstallmentRoutingModule } from './installment-routing.module';
import { InstallmentComponent } from './installment.component';

@NgModule({
  declarations: [InstallmentComponent],
  imports: [
    CommonModule,
    FormsModule,
    InstallmentRoutingModule
  ]
})
export class InstallmentModule { }
