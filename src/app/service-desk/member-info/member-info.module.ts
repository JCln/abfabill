import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { MemberInfoRoutingModule } from './member-info-routing.module';
import { MemberInfoComponent } from './member-info.component';


@NgModule({
  declarations: [MemberInfoComponent],
  imports: [
    CommonModule,
    MemberInfoRoutingModule
  ]
})
export class MemberInfoModule { }
