import { NgModule } from '@angular/core';

import { SharedModule } from './../shared/shared.module';
import { TrackRequestRoutingModule } from './track-request-routing.module';
import { TrackRequestComponent } from './track-request/track-request.component';
import { SmsListComponent } from './sms-list/sms-list.component';


@NgModule({
  declarations: [TrackRequestComponent, SmsListComponent],
  imports: [
    SharedModule,
    TrackRequestRoutingModule
  ]
})
export class TrackRequestModule { }
