import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';

import { GoogleAnalyticsService } from './../services/google-analytics.service';
import { ServiceDeskRoutingModule } from './service-desk-routing.module';
import { ServicesComponent } from './services/services.component';

@NgModule({
  declarations: [ServicesComponent],
  imports: [
    SharedModule,
    ServiceDeskRoutingModule
  ],
  providers: [GoogleAnalyticsService]
})
export class ServiceDeskModule { }
