import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegisterNewRoutingModule } from './register-new-routing.module';
import { RegisterNewComponent } from './register-new/register-new.component';


@NgModule({
  declarations: [RegisterNewComponent],
  imports: [
    CommonModule,
    RegisterNewRoutingModule
  ]
})
export class RegisterNewModule { }
