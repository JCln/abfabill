import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';

import { ServiceDeskRoutingModule } from './service-desk-routing.module';
import { ServicesComponent } from './services/services.component';
import { MemberInfoPipe } from './pipes/member-info.pipe';

@NgModule({
  declarations: [ServicesComponent, MemberInfoPipe],
  imports: [
    SharedModule,
    ServiceDeskRoutingModule
  ]
})
export class ServiceDeskModule { }
