import { NgModule } from '@angular/core';

import { SharedModule } from './../../shared/shared.module';
import { MemberInfoRoutingModule } from './member-info-routing.module';
import { MemberInfoComponent } from './member-info.component';


@NgModule({
  declarations: [MemberInfoComponent],
  imports: [
    SharedModule,
    MemberInfoRoutingModule
  ]
})
export class MemberInfoModule { }
