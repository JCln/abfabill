import { Component, OnInit } from '@angular/core';
import { GoogleAnalyticsService } from 'src/app/services/google-analytics.service';
import { InteractionService } from 'src/app/services/interaction.service';

import { IServices } from './iservices';

const serviceNames: IServices[] = [
  {
    title: 'اعلام کارکرد کنتور', routerLink: 'ma', src: 'assets/imgs/serviceDesk/meter.png'
  },
  {
    title: 'آخرین قبض', routerLink: 'bill', src: 'assets/imgs/serviceDesk/bill2.png'
  },
  {
    title: 'ده قبض آخر', routerLink: 'kardex', src: 'assets/imgs/serviceDesk/viewBills.png'
  },
  {
    title: 'نمایش اقساط', routerLink: 'installment', src: 'assets/imgs/serviceDesk/installment.png'
  },
  {
    title: 'تغییر واحد مسکونی', routerLink: 'elcs', src: 'assets/imgs/serviceDesk/vahed.png'
  },
  {
    title: 'تغییر مشخصات', routerLink: 'elcs', src: 'assets/imgs/serviceDesk/name.png'
  },
  {
    title: 'تغییر کاربری', routerLink: 'elcs', src: 'assets/imgs/serviceDesk/karbari.png'
  },
  {
    title: 'ثبت شماره همراه', routerLink: 'elcs', src: 'assets/imgs/serviceDesk/mobile.png'
  },
  {
    title: 'صدور قبض میاندوره', routerLink: 'elcs', src: 'assets/imgs/serviceDesk/annMetter.png'
  },
  {
    title: 'تعویض کنتور خراب', routerLink: 'elcs', src: 'assets/imgs/serviceDesk/change.png'
  },
  {
    title: 'آزمایش کنتور', routerLink: 'elcs', src: 'assets/imgs/serviceDesk/test.png'
  },
  {
    title: 'لوله‌گذاری', routerLink: 'elcs', src: 'assets/imgs/serviceDesk/valve.png'
  },
  {
    title: 'استعلام نظام مهندسی', routerLink: 'elcs', src: 'assets/imgs/serviceDesk/ass.png'
  },
  {
    title: 'نصب سیفون اضافی فاضلاب', routerLink: 'elcs', src: 'assets/imgs/serviceDesk/nvalve.png'
  },
  {
    title: 'قطع یا نصب انشعاب', routerLink: 'elcs', src: 'assets/imgs/serviceDesk/opnclose.png'
  },
  {
    title: 'پیشنهادات و انتقادات', routerLink: 'cs', src: 'assets/imgs/serviceDesk/cands.png'
  },
];

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
    public googleAnalyticsService: GoogleAnalyticsService
  ) {
    this.serviceNames = serviceNames;
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
