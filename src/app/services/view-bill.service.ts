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
    { id: 4, value: 'تست تستیان', type: 'مشترک گرامی' },
    { id: 1, value: '23434', type: 'شناسه قبض' },
    { id: 2, value: '34634', type: 'شناسه پرداخت' },
    { id: 3, value: '34634', type: 'مبلغ قابل پرداخت' },
    { id: 1, value: '23434', type: 'مهلت پرداخت' },
    { id: 5, value: '1234567890333', type: 'کاربری' },
    { id: 1, value: ' 23434', type: 'تعداد واحد مسکونی' },
    { id: 1, value: ' 23434', type: 'تعدادواحدغیرمسکونی' },
    { id: 2, value: '34634', type: 'ظرفیت قراردادی' },
    { id: 5, value: ' 9879', type: 'قطر انشعاب' },
    { id: 5, value: '9879', type: 'قطر سیفون' },
    { id: 1, value: '23434', type: 'وضعیت کنتور' },
    { id: 3, value: ' 34634', type: 'شماره ردیف' },
    { id: 4, value: '454534', type: 'شمراه برگه' },
    { id: 3, value: ' 34634', type: 'شماره اشتراک' },
    { id: 9, value: '34634', type: 'تاریخ قرائت پیشین' },
    { id: 9, value: ' 34634', type: 'تاریخ قرائت کنونی' },
    { id: 4, value: '454534', type: 'تعداد روز' },
    { id: 5, value: '9879', type: 'شماره کنتور پیشین' },
    { id: 9, value: '34634', type: 'شماره کنتور کنونی' },
    { id: 9, value: '34634', type: 'مصرف به متر مکعب' },
    { id: 4, value: '454534', type: 'مصرف به لیتر' },
    { id: 5, value: '9879', type: 'متوسط مصرف' },
    { id: 11, value: ' 34634', type: 'بهای مصرفی آب بها' },
    { id: 9, value: '34634', type: 'بهای دفع فاضلاب' },
    { id: 4, value: '454534', type: 'مالیات و عوارض' },
    { id: 5, value: '9879', type: 'تکلیف قانون بودجه' },
    { id: 3, value: ' 34634', type: 'لوازم کاهنده' },
    { id: 4, value: ' 454534', type: 'جمع' },
    { id: 3, value: ' 34634', type: 'تخفیف' },
    { id: 5, value: ' 9879', type: 'بدهی بستانکاری' }
  ];

  getViewBill = (): Observable<IViewBill[]> => {
    return of(this.viewbill);
    // this.mainService.GET().subscribe((data: IViewBill) => this.viewBill = {...data});

  }

}
