import { Injectable } from '@angular/core';
import { Observable, of, observable, pipe } from 'rxjs';

import { IViewBill } from './iview-bill';
import { MainService } from './main.service';
import { ActivatedRoute } from '@angular/router';
import { map, catchError, tap } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ViewBillService {
  constructor(private mainService: MainService, private route: ActivatedRoute, private http: HttpClient) {
    // const id = this.route.snapshot.paramMap.get('id');

  }
  viewBill: any;
  id = btoa('10018315');

  viewbillTypeOnly = [
    { AbBaha: 1, type: 'مشترک گرامی' },
    { AhadMaskoonivalue: 1, type: 'مشترک گرامی' },
    { AhadNonMaskoonivalue: 1, type: 'مشترک گرامی' },
    { BarCodevalue: 1, type: 'مشترک گرامی' },
    { Barge: 4, value: 'تست تستیان', type: 'مشترک گرامی' },
    { BillId: 1, value: '23434', type: 'شناسه قبض' },
    { Budget: 2, value: '34634', type: 'شناسه پرداخت' },
    { CounterStateId: 3, value: '34634', type: 'مبلغ قابل پرداخت' },
    { CurrentCounterNumber: 1, value: '23434', type: 'مهلت پرداخت' },
    { CurrentCounterReadingDate: 5, value: '1234567890333', type: 'کاربری' },
    { DeadLine: 1, value: ' 23434', type: 'تعداد واحد مسکونی' },
    { Eshterak: 1, value: ' 23434', type: 'تعدادواحدغیرمسکونی' },
    { FullName: 2, value: '34634', type: 'ظرفیت قراردادی' },
    { Id: 5, value: ' 9879', type: 'قطر انشعاب' },
    { Jam: 5, value: '9879', type: 'قطر سیفون' },
    { KarbariTitle: 1, value: '23434', type: 'وضعیت کنتور' },
    { KarmozdFazelab: 3, value: ' 34634', type: 'شماره ردیف' },
    { LavazemKahande: 4, value: '454534', type: 'شمراه برگه' },
    { Maliat: 3, value: ' 34634', type: 'شماره اشتراک' },
    { Masraf: 9, value: '34634', type: 'تاریخ قرائت پیشین' },
    { MasrafAverage: 9, value: ' 34634', type: 'تاریخ قرائت کنونی' },
    { MasrafLiter: 4, value: '454534', type: 'تعداد روز' },
    { PayBank: 5, value: '9879', type: 'شماره کنتور پیشین' },
    { PayDate: 9, value: '34634', type: 'شماره کنتور کنونی' },
    { PayId: 9, value: '34634', type: 'مصرف به متر مکعب' },
    { Payable: 4, value: '454534', type: 'مصرف به لیتر' },
    { PreBedOrBes: 5, value: '9879', type: 'متوسط مصرف' },
    { PreCounterNumber: 11, value: ' 34634', type: 'بهای مصرفی آب بها' },
    { PreCounterReadingDate: 9, value: '34634', type: 'بهای دفع فاضلاب' },
    { Qotr: 4, value: '454534', type: 'مالیات و عوارض' },
    { QotrSifoon: 5, value: '9879', type: 'تکلیف قانون بودجه' },
    { Radif: 3, value: ' 34634', type: 'لوازم کاهنده' },
    { Taxfif: 4, value: ' 454534', type: 'جمع' },
    { ZarfiatQarardadi: 3, value: ' 34634', type: 'تخفیف' },
    { ZoneTitle: 5, type: 'بدهی بستانکاری' }
  ];


  getViewBill = (): any => {
    return this.mainService.GET(this.id, 'moshtarakinapi/bill/getcorrecttest');
  }
  //   let viewBill: IViewBill;
  //   this.mainService.GET(10018315, 'moshtarakinapi/bill/getcorrecttest').pipe(map(data => {
  //     if (data) {
  //       this.viewBill = data;
  //       viewBill = data;
  //       return viewBill;
  //     }
  //     return data;

  //   }));
  //   console.log(viewBill);
  //   return this.viewBill;
  // }

  getTestBillTest = () => {
    console.log(this.id);

    return this.http.get('http://37.191.92.130/moshtarakinapi/bill/getcorrecttest/' + this.id);

    // this.viewBill = this.http.get('http://37.191.92.130/moshtarakinapi/bill/getcorrecttest/')
    // return of(this.viewBill);
  }

}
