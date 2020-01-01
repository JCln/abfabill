import { Component, OnInit } from '@angular/core';
import { Observable, Subject, BehaviorSubject, observable } from 'rxjs';

import { IViewBill } from './../../services/iview-bill';
import { ViewBillService } from './../../services/view-bill.service';
import { bankIcons } from '../bank-icons';
import { IbankIcons } from '../ibank-icons';
import { MainService } from 'src/app/services/main.service';
import { map } from 'rxjs/operators';

export interface ITestObject {
  type: string;
  value: string;
}

@Component({
  selector: 'app-view-bill',
  templateUrl: './view-bill.component.html',
  styleUrls: ['./view-bill.component.scss']
})
export class ViewBillComponent implements OnInit {
  chooseBank: IbankIcons = { name: 'بانک ملت', linkToSite: 'bmi.ir' }

  // viewBill: Observable<IViewBill>;
  viewbillArray: any = [];
  testForPersianKeys: any[] = [
    '     مشترک گرامی',
    '    مشترک گرامی',
    '   مشترک گرامی',
    '   مشترک گرامی',
    'مشترک گرامی',
    ' شناسه قبض',
    ' شناسه پرداخت',
    ' مبلغ قابل پرداخت',
    ' مهلت پرداخت',
    ' کاربری',
    'تعداد واحد مسکونی',
    'تعدادواحدغیرمسکونی',
    ' ظرفیت قراردادی',
    'قطر انشعاب',
    'قطر سیفون',
    ' وضعیت کنتور',
    'شماره ردیف',
    'شمراه برگه',
    'شماره اشتراک',
    'تاریخ قرائت پیشین',
    'تاریخ قرائت کنونی',
    'تعداد روز',
    ' شماره کنتور پیشین',
    ' شماره کنتور کنونی',
    ' مصرف به متر مکعب',
    ' مصرف به لیتر',
    ' متوسط مصرف',
    'بهای مصرفی آب بها',
    ' بهای دفع فاضلاب',
    '  مالیات و عوارض',
    '  تکلیف قانون بودجه',
    'لوازم کاهنده',
    'جمع',
    'تخفیف',
    ' بدهی بستانکاری'
  ];
  testObject2: any[] = [
    { value: 'sdfsdf', type: 'مشترک گرامی' },
    { value: 'sdf', type: 'مشترک گرامی' },
    { value: 'sdf', type: 'مشترک گرامی' },
    { value: 'sdf', type: 'مشترک گرامی' },
    { value: 'تست تستیان', type: 'مشترک گرامی' },
    { value: '23434', type: 'شناسه قبض' },
    { value: '34634', type: 'شناسه پرداخت' },
    { value: '34634', type: 'مبلغ قابل پرداخت' },
    { value: '23434', type: 'مهلت پرداخت' },
    { value: '1234567890333', type: 'کاربری' },
    { value: ' 23434', type: 'تعداد واحد مسکونی' },
    { value: ' 23434', type: 'تعدادواحدغیرمسکونی' },
    { value: '34634', type: 'ظرفیت قراردادی' },
    { value: ' 9879', type: 'قطر انشعاب' },
    { value: '9879', type: 'قطر سیفون' },
    { value: '23434', type: 'وضعیت کنتور' },
    { value: ' 34634', type: 'شماره ردیف' },
    { value: '454534', type: 'شمراه برگه' },
    { value: ' 34634', type: 'شماره اشتراک' },
    { value: '34634', type: 'تاریخ قرائت پیشین' },
    { value: ' 34634', type: 'تاریخ قرائت کنونی' },
    { value: '454534', type: 'تعداد روز' },
    { value: '9879', type: 'شماره کنتور پیشین' },
    { value: '34634', type: 'شماره کنتور کنونی' },
    { value: '34634', type: 'مصرف به متر مکعب' },
    { value: '454534', type: 'مصرف به لیتر' },
    { value: '9879', type: 'متوسط مصرف' },
    { value: ' 34634', type: 'بهای مصرفی آب بها' },
    { value: '34634', type: 'بهای دفع فاضلاب' },
    { value: '454534', type: 'مالیات و عوارض' },
    { value: '9879', type: 'تکلیف قانون بودجه' },
    { value: ' 34634', type: 'لوازم کاهنده' },
    { value: ' 454534', type: 'جمع' },
    { value: ' 34634', type: 'تخفیف' },
    { value: 'sdf', type: 'بدهی بستانکاری' }
  ];
  testObject: any[] = [
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
  ]
  // viewbillKeys: IViewBill = [
  //   {Abbaha: ''}
  // ];
  viewBillTypeOnly = [];

  bankIcons = bankIcons;
  value = '00000100183150000017012345';
  height = 50;
  width = 1.5;
  displayValue = false;

  showMoreButton = false;

  constructor(private viewBillService: ViewBillService) { }

  valueAfterRes = (res: object) => {
    // this.testObject.AbBaha = res.AbBaha;
  }

  insertValues = () => {
    this.viewBillService.getViewBill().subscribe(res => {
      // this.testObject = res;
      this.testObject2 = Object.keys(res);
      // console.log(this.testObject);
      // let value = Object.keys(res);
      // value = Object.keys(this.testObject);
      // console.log(value);

      this.viewbillArray = res;
      this.valueAfterRes(res);
    });
  }

  ngOnInit() {
    this.insertValues();
  }
  changeBankForPay = (bankName: string, bankurl: string) => {
    this.chooseBank["name"] = bankName;
    this.chooseBank["linkToSite"] = bankurl;
  }
  showMoreClicked = (): void => {
    this.showMoreButton = !this.showMoreButton;
    scroll(0, 5000);
  }


}
