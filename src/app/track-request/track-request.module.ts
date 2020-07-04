import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TrackRequestRoutingModule } from './track-request-routing.module';
import { TrackRequestComponent } from './track-request/track-request.component';


@NgModule({
  declarations: [TrackRequestComponent],
  imports: [
    CommonModule,
    TrackRequestRoutingModule
  ]
})
export class TrackRequestModule { }
