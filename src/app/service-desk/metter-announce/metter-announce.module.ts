import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';

import { MetterAnnounceRoutingModule } from './metter-announce-routing.module';
import { MetterAnnounceComponent } from './metter-announce.component';


@NgModule({
  declarations: [MetterAnnounceComponent],
  imports: [
    SharedModule,
    MetterAnnounceRoutingModule
  ]
})
export class MetterAnnounceModule { }
