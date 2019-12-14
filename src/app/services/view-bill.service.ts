import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { IViewBill } from './iview-bill';

@Injectable({
  providedIn: 'root'
})
export class ViewBillService {

  constructor() { }

  viewbill: IViewBill[] = [
    { id: 1, value: 23434, type: 'تاریخ قرائت پیشین' },
    { id: 2, value: 34634, type: 'تاریخ قرائت فعلی' },
    { id: 3, value: 34634, type: 'شماره کنتور پیشین' },
    { id: 4, value: 454534, type: 'شماره کنتور فعلی' },
    { id: 5, value: 9879, type: 'قطر انشعاب' }
  ];
  getViewBill = (): Observable<IViewBill[]> => {
    return of(this.viewbill);
  }
}
