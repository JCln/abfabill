import { Component, OnInit } from '@angular/core';

interface IElcServies {
  [index: string]: {
    name: string;
    checked: boolean;
  }[]
}
export const elcServices = [
  {
    bol: false,
    abfa: [
      { name: 'پاسخ به استعلام مالکیت', checked: false },
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
  },
  {
    bol: true,
    sevage: [
      { name: 'واگذاری انشعاب', checked: true },
      { name: 'نصب سیفون اضافی', checked: false },
      { name: 'تغییر قطر سیفون', checked: false }
    ],
  },
  {
    both: [
      { name: 'تغییر نام', checked: false },
      { name: 'تغییر تعداد واحد ', checked: false }
    ]
  }
]

@Component({
  selector: 'app-elc-services',
  templateUrl: './elc-services.component.html',
  styleUrls: ['./elc-services.component.scss']
})
export class ElcServicesComponent implements OnInit {
  elcService = elcServices;
  sevageSelected = false;

  constructor() { }
  // switch between options
  sevageChoosed = (selected: boolean) => {
    this.sevageSelected = selected;
  }

  checkboxChanged = (e: any, d: any) => {
    d.checked = e.target.checked;
    // this.elcService.pipe
  }
  ngOnInit() {
  }

}
