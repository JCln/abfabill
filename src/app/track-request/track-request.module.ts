import { NgModule } from '@angular/core';

import { SharedModule } from './../shared/shared.module';
import { TrackRequestRoutingModule } from './track-request-routing.module';
import { TrackRequestComponent } from './track-request/track-request.component';


@NgModule({
  declarations: [TrackRequestComponent],
  imports: [
    SharedModule,
    TrackRequestRoutingModule
  ]
})
export class TrackRequestModule { }
