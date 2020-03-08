import { Component, OnInit } from '@angular/core';

import { IServices } from './iservices';

const serviceNames: IServices[] = [
  {
    title: 'نمایش اقساط', desc: '', spanClass: 'fas fa-money-bill', routerLink: 'installment'
  },
  {
    title: 'آخرین قبض', desc: '', spanClass: 'fas fa-receipt', routerLink: 'bill'
  },
  {
    title: 'خدمات الکترونیکی', desc: 'توضیحات', spanClass: 'fas fa-table', routerLink: 'elcs'
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
