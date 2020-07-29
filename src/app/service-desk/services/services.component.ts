import { Component, OnInit } from '@angular/core';
import { ServiceDeskService } from 'src/app/services/DI/service-desk.service';
import { GoogleAnalyticsService } from 'src/app/services/google-analytics.service';
import { InteractionService } from 'src/app/services/interaction.service';

import { IServices } from '../../interfaces/iservices';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent implements OnInit, IServices {
  title: string;
  desc: string;
  spanClass: string;
  routerLink: string;
  serviceNames: IServices[];

  // data get from route
  getedDataIdFromRoute: string = '';

  getDataFromRoute = () => {
    this.getedDataIdFromRoute = window.location.pathname.split('/')[1];
    // i'll change this to reatable for any changed route by using route.params.subscribe OR 
    // for angular 4+ => route.snapshot.paramsMap
  }

  setBillIdToChildrens = () => {
    this.interactionService.setBillId(this.getedDataIdFromRoute);
  }

  constructor(
    private interactionService: InteractionService,
    public googleAnalyticsService: GoogleAnalyticsService,
    desks: ServiceDeskService
  ) {
    this.serviceNames = desks.getServiceDesks();
    this.getDataFromRoute();
  }

  ngOnInit() {
    this.setBillIdToChildrens();
  }

  sendButtonEventToAnalytics = () => {
    this.googleAnalyticsService.eventEmitter("userPage", "clicked", "userLabel", 2);
    this.googleAnalyticsService.routerView();
  }
}
