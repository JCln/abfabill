import { NgModule } from '@angular/core';

import { SharedModule } from './../../shared/shared.module';
import { MemberInfoPipe } from './../pipes/member-info.pipe';
import { MemberInfoRoutingModule } from './member-info-routing.module';
import { MemberInfoComponent } from './member-info.component';


@NgModule({
  declarations: [MemberInfoComponent, MemberInfoPipe],
  imports: [
    SharedModule,
    MemberInfoRoutingModule
  ]
})
export class MemberInfoModule { }
