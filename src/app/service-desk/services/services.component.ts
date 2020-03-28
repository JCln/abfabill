import { Component, OnInit } from '@angular/core';

import { IServices } from './iservices';

const serviceNames: IServices[] = [
  {
    title: 'آخرین قبض', desc: '', spanClass: 'fas fa-receipt', routerLink: 'bill', src: 'assets/imgs/serviceDesk/p.svg'
  },
  {
    title: 'نمایش اقساط', desc: '', spanClass: 'fas fa-money-bill', routerLink: 'installment', src: 'assets/imgs/serviceDesk/installment2.png'
  },
  {
    title: 'خدمات انشعاب', desc: 'توضیحات', spanClass: 'fas fa-table', routerLink: 'elcs', src: 'assets/imgs/serviceDesk/m1.svg'
  }
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
