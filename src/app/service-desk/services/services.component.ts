import { Component, OnInit } from '@angular/core';

import { IServices } from './iservices';

const serviceNames: IServices[] = [
  {
    title: 'صدور قبض میاندوره', desc: '', spanClass: 'fas fa-table', routerLink: 'ma', src: 'assets/imgs/serviceDesk/AnnouncingTheMeter.png'
  },
  {
    title: 'آخرین قبض', desc: '', spanClass: 'fas fa-receipt', routerLink: 'bill', src: 'assets/imgs/serviceDesk/latestBill.png'
  },
  {
    title: 'نمایش اقساط', desc: '', spanClass: 'fas fa-money-bill', routerLink: 'installment', src: 'assets/imgs/serviceDesk/viewBills.png'
  },
  {
    title: 'خدمات پس از فروش', desc: 'توضیحات', spanClass: 'fas fa-table', routerLink: 'elcs', src: 'assets/imgs/serviceDesk/support.png'
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
  serviceNames: any[];

  constructor() {
    this.serviceNames = serviceNames;
  }

  ngOnInit() {
  }

}
