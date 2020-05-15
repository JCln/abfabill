import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { GoogleAnalyticsService } from 'src/app/services/google-analytics.service';
import { InteractionService } from 'src/app/services/interaction.service';

import { IServices } from './iservices';

const serviceNames: IServices[] = [
  {
    title: 'صدور قبض میاندوره', desc: '', spanClass: 'fas fa-table', routerLink: 'ma', src: 'assets/imgs/serviceDesk/AnnouncingTheMeter.png'
  },
  {
    title: 'آخرین قبض', desc: '', spanClass: 'fas fa-receipt', routerLink: 'bill', src: 'assets/imgs/serviceDesk/latestBill.png'
  },
  {
    title: 'ده قبض آخر', desc: '', spanClass: 'fas fa-receipt', routerLink: 'kardex', src: 'assets/imgs/serviceDesk/viewBills.png'
  },
  {
    title: 'نمایش اقساط', desc: '', spanClass: 'fas fa-money-bill', routerLink: 'installment', src: 'assets/imgs/serviceDesk/installment.png'
  },
  {
    title: 'خدمات پس از فروش', desc: 'توضیحات', spanClass: 'fas fa-table', routerLink: 'elcs', src: 'assets/imgs/serviceDesk/support.png'
  },
  {
    title: 'پیشنهادات و انتقادات', desc: '', spanClass: 'fas fa-table', routerLink: 'cs', src: 'assets/imgs/serviceDesk/cands.png'
  },
];
declare var ga: Function;

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
    private router: Router
  ) {
    this.serviceNames = serviceNames;
    this.getDataFromRoute();
  }

  ngOnInit() {
    this.setBillIdToChildrens();
  }

  sendButtonEventToAnalytics = () => {
    this.googleAnalyticsService.eventEmitter("userPage", "clicked", "userLabel", 1);

    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        ga('set', 'page', event.urlAfterRedirects);
        ga('send', 'pageview');
      }
    });
  }
}
