import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { SharedModule } from './../shared/shared.module';
import { RegisterNewRoutingModule } from './register-new-routing.module';
import { RegisterNewComponent } from './register-new/register-new.component';


@NgModule({
  declarations: [RegisterNewComponent],
  imports: [
    SharedModule,
    ReactiveFormsModule,
    RegisterNewRoutingModule
  ]
})
export class RegisterNewModule { }
