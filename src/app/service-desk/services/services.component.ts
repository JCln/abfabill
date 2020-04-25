import { Component, OnInit } from '@angular/core';
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

  // data get from route
  getedDataIdFromRoute: string = '';

  getDataFromRoute = () => {
    this.getedDataIdFromRoute = window.location.pathname.split('/')[1];
  }

  setBillIdToChildrens = () => {
    this.interactionService.setBillId(this.getedDataIdFromRoute);
  }

  constructor(private interactionService: InteractionService) {
    this.serviceNames = serviceNames;
    this.getDataFromRoute();
  }
  
  ngOnInit() {
    this.setBillIdToChildrens();
  }

}
