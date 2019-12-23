import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { IViewBill } from './iview-bill';
import { MainService } from './main.service';

@Injectable({
  providedIn: 'root'
})
export class ViewBillService {

  // constructor(private mainService: MainService) { }
  constructor() { }
  viewBill: IViewBill;
  viewbill: IViewBill[] = [
    { id: 1, value: 23434, type: 'تاریخ قرائت پیشین' },
    { id: 2, value: 34634, type: 'تاریخ قرائت فعلی' },
    { id: 3, value: 34634, type: 'شماره کنتور پیشین' },
    { id: 4, value: 454534, type: 'شماره کنتور فعلی' },
    { id: 5, value: 1234567890333, type: '1' },
    { id: 1, value: 23434, type: '2' },
    { id: 2, value: 34634, type: '3' },
    { id: 3, value: 34634, type: '4' },
    { id: 4, value: 454534, type: '5' },
    { id: 5, value: 9879, type: '6' },
    { id: 5, value: 9879, type: '7' },
    { id: 1, value: 23434, type: '8' },
    { id: 2, value: 34634, type: '9' },
    { id: 3, value: 34634, type: '10' },
    { id: 4, value: 454534, type: '11' },
    { id: 5, value: 9879, type: '12' }
  ];

  getViewBill = (): Observable<IViewBill[]> => {
      return of(this.viewbill);
    // this.mainService.GET().subscribe((data: IViewBill) => this.viewBill = {...data});

  }

}
