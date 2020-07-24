import { NgModule } from '@angular/core';

import { SharedModule } from './../../shared/shared.module';
import { UpdateMobileRoutingModule } from './update-mobile-routing.module';
import { UpdateMobileComponent } from './update-mobile.component';


@NgModule({
  declarations: [UpdateMobileComponent],
  imports: [
    SharedModule,
    UpdateMobileRoutingModule
  ]
})
export class UpdateMobileModule { }
