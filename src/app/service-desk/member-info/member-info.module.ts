import { NgModule } from '@angular/core';

import { FilterPipe } from '../pipes/filter.pipe';
import { SharedModule } from './../../shared/shared.module';
import { MemberInfoRoutingModule } from './member-info-routing.module';
import { MemberInfoComponent } from './member-info.component';


@NgModule({
  declarations: [MemberInfoComponent, FilterPipe],
  imports: [
    SharedModule,
    MemberInfoRoutingModule
  ]
})
export class MemberInfoModule { }
