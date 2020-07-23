import { AfterContentChecked, Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ErrorHandlerService } from './../../services/error-handler.service';
import { HelpService } from './../../services/help.service';

interface IElcServies {
  name: string;
  checked: boolean;
}
export const elcServices: IElcServies[] = [
  { name: ' پاسخ به استعلام مالکیت انشعاب', checked: false },
  { name: 'تغییر مکان کنتور', checked: false },
  { name: 'جمع آوری یا ادغام انشعاب', checked: false },
  { name: 'آزمایش کنتور ', checked: false },
  { name: 'قطع موقت و وصل انشعاب', checked: false },
  { name: 'تعویض کنتور ', checked: false },
  { name: 'تغییر کاربری انشعاب', checked: false },
  { name: 'تغییر ظرفیت قراردادی انشعاب', checked: false },
  { name: 'تغییر قطرانشعاب', checked: false },
  { name: 'تفکیک کنتور ', checked: false },
  { name: 'واگذاری انشعاب ', checked: false },
  { name: 'اطلاع رسانی قطعی', checked: false },
  { name: 'فروش آب تانکری', checked: false },
  { name: 'اعلام کارکرد کنتور', checked: false },
  { name: 'واگذاری انشعاب', checked: false },
  { name: 'نصب سیفون اضافی', checked: false },
  { name: 'تغییر قطر سیفون', checked: false },
  { name: 'تغییر مشخصات', checked: false },
  { name: 'تغییر تعداد واحد مسکونی', checked: false },
  { name: 'رسیدگی و رفع مشکلات ناشی از حوادث ', checked: false },
  { name: 'مشاهده سوابق صورتحساب ها و پرداختی ها ', checked: false },
  { name: 'درخواست بررسی صورتحساب', checked: false },
  { name: 'تسویه حساب بدهی', checked: false },
  { name: 'پاسخگویی به شکایات ', checked: false }
]

@Component({
  selector: 'app-elc-services',
  templateUrl: './elc-services.component.html',
  styleUrls: ['./elc-services.component.scss']
})
export class ElcServicesComponent implements OnInit, AfterContentChecked, OnDestroy {
  static elcWarnTime = true;
  elcService = elcServices;
  sevageSelected = false;
  checkedParameter: any;

  constructor(private errorHandler: ErrorHandlerService, private helpService: HelpService, private route: ActivatedRoute) { }
  checkboxChanged = (e: any, d: any) => {
    d.checked = e.target.checked;
    // this.elcService.pipe
  }
  checkboxStatus = (item: number, bol: boolean) => {
    elcServices[item].checked = bol;
  }
  ngOnInit() {
    // if (ElcServicesComponent.elcWarnTime) {
    //   this.helpService.customName();
    //   this.helpService.help();
    //   ElcServicesComponent.elcWarnTime = false;
    // }
    this.errorHandler.toasterError('مشترک گرامی این قسمت درحال بروز رسانی است، لطفااز طریق اپلیکیشن همراه آبفا اصفهان و یا شماره 1522 اقدام نمایید', '', 'makeInfo');

  }
  ngAfterContentChecked(): void {
    this.checkedParameter = this.route.snapshot.queryParamMap.get('checked');
    this.checkboxStatus(this.checkedParameter, true);
  }

  canSendRequest = () => {
    return new Promise(resolve => {
      this.elcService.map(items => {
        if (items.checked === true) {
          resolve(items.name);
        }
        resolve(items);
      });
    })
  }

  connectToServer = async () => {
    const a = await this.canSendRequest();
    console.log(a);

  }
  ngOnDestroy(): void {
    this.elcService.map(items => {
      items.checked = false;
    });
  }
}
