import { Component, OnInit } from '@angular/core';

interface IElcServies {
  name: string;
  checked: boolean;
}

export const elcServices = {
  'abfa': [
    { name: 'پاسخ به استعلام مالکیت انشعاب', checked: false },
    { name: 'تغییر مکان کنتور', checked: false },
    { name: 'جمع آوری یا ادغام انشعاب', checked: false },
    { name: 'آزمایش کنتور ', checked: false },
    { name: 'قطع موقت و وصل انشعاب', checked: false },
    { name: 'تعویض کنتور ', checked: false },
    { name: 'تغییر کاربری انشعاب', checked: false },
    { name: 'تغییر ظرفیت قراردادی انشعاب', checked: false },
    { name: 'تغییرقطرانشعاب', checked: false },
    { name: 'تفکیک کنتور ', checked: false }
  ],
  'sevage': [
    { name: 'واگذاری انشعاب', checked: false },
    { name: 'نصب سیفون اضافی', checked: false },
    { name: 'تغییر قطر سیفون', checked: false }
  ],
  'both': [
    { name: 'تغییر مشخصات مشترکین' },
    { name: 'تغییر تعداد واحد مسکونی مشترکین' }
  ]
}
@Component({
  selector: 'app-elc-services',
  templateUrl: './elc-services.component.html',
  styleUrls: ['./elc-services.component.scss']
})
export class ElcServicesComponent implements OnInit {
  elcService = elcServices;
  sevageSelected: boolean;

  constructor() { }
  sevageChoosed = (selected: boolean) => {
    this.sevageSelected = selected;
  }
  ngOnInit() {
  }

}
