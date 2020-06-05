import { Location } from '@angular/common';
import { AfterContentChecked, Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

import { HelpService } from './../../services/help.service';

@Component({
  selector: 'app-anony-header',
  templateUrl: './anony-header.component.html',
  styleUrls: ['./anony-header.component.scss']
})
export class AnonyHeaderComponent implements OnInit, AfterContentChecked {
  showBack = true;
  showMemberInfo = false;
  currentLastRoute: any;

  constructor(private _location: Location, private router: Router, private helpService: HelpService) { }
  changeBackImg = () => {
    if (screen.width > 549) {
      return;
    }
    const abfaImg = document.querySelector('.abfa');
    abfaImg.classList.toggle('toggleImg');
  }
  // back to previous page
  backClicked = () => this._location.back();

  private whereWhere = this._location.path() === '/pg' ? true : false;
  // to check if we are in first page and not show back url
  canShowBackUrl = () => {
    // maybe better with getState()
    if (this.whereWhere) {
      this.showBack = false;
      this.showMemberInfo = false;
    }
    else {
      this.showMemberInfo = true;
    }
  }

  ngOnInit() {
    this.canShowBackUrl();
  }

  private someName = () => {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd)
        this.currentLastRoute = event.url.split('/').pop();
    });

    switch (this.currentLastRoute) {
      case 'pg':
        this.helpService.addMessage('راهنمای استفاده از همراه آبفا استان اصفهان', 'اپلیکیشن اندروید "همراه آبفای استان اصفهان" به سفارش سازمان آب و فاضلاب استان اصفهان جهت سهولت ارتباط مشترکین و سازمان و کاهش مراجعات حضوری از طریق انجام خدمات به صورت غیرحضوری، برنامه ­نویسی و در فروشگاه­ های معتبر اندروید منتشرشد.شما می ­توانید با مراجعه به سایت مايکت با لینک 1https://myket.ir (https://myket.ir/app/com.app.leon.moshtarak)` ', '', 'more pg', 'lot of pg text here');
        break;
      // case 'bill':
      //   this.helpService.addMessage('بررسی آخرین قبض', 'می ­توانید اطلاعات مربوط به آخرین قبض خود، اعم از شناسه قبض، شناسه پرداخت، مهلت و مبلغ قابل پرداخت، شماره فعلی و پیشین و .... را مشاهده کنید', 'assets/axiliaryroute/2.png', 'assets/axiliaryroute/2-2.png','', 'lot of main text');        
      // break;
      case 'ma':
        this.helpService.addMessage('from ma', 'some text', 'more footer', 'assets/imgs/waterMeter.png', 'lot of text here');
        break;
      case 'kardex':
        this.helpService.addMessage('صورتحساب (10 قبض آخر)', ' لیست آخرین قبوض خود و وضعیت آن­ ها را مشاهده نمایید. در این قسمت با تپ بر روی "صورت حساب آب بها" می توانید نمودار مصرف اخیر خود را ملاحظه نمایید. ضمنا با کلیک یا تب کردن روی هر سطر میتوانید جزئیات مربروط به آن آن سطر را مشاهده نمایید.', '', 'more kardex footer', 'lot of text here');
        break;
      case 'installment':
        this.helpService.addMessage('from installment', 'some text', '', 'more installment footer', 'lot of text here');
        break;
      case 'elcs':
        this.helpService.addMessage(
          'خدمات پس از فروش شرکت آبفا',
          `با انتخاب هرکدام از خدمات شرکت آب و فاضلاب و سپس انتخاب گزینه ارسال درخواست میتوانیداز خدمات پس پرداخت آبفا بهره مند شوید. خدمات خدمات مورد ارائه عبارت اند از 
          1-	 واگذاری انشعاب آب (15031452100)
          2-	واگذاری انشعاب فاضلاب (15031452101)
          3-	تغییر کاربری انشعاب آب (15031453100)
          4-	تغییر تعداد واحد مسکونی مشترکین آب و فاضلاب (15031453103)
          5-	تغییر ظرفیت قراردادی انشعاب آب(15031453104)
          6-	تغییر مشخصات مشترکین آب و فاضلاب(15031453102)
          7-	پاسخ به استعلام مالکیت انشعاب آب(15031453101)
          8-	رسیدگی به پیشنهادات حوزه آب و فاضلاب(15031949000)
          9-	پاسخگویی به شکایات مرتبط با حوزه آب و  فاضلاب(15031948000)
          10-	اطلاع رسانی قطعی آب(15031947000)
          11-	رسیدگی و رفع مشکلات ناشی از حوادث آب و فاضلاب(15031946000)
          12-	فروش آب تانکری(15031453119)
          13-	مشاهده سوابق صورتحساب ها و پرداختی های  مشترکین آب و فاضلاب(15031453116)
          14-	اعلام کارکرد کنتور آب(15031453115)
          15-	درخواست بررسی صورتحساب مشترکین آب و فاضلاب(15031453114)
          16-	تسویه حساب بدهی مشترکین آب و فاضلاب(15031453113)
          17-	جمع آوری یا ادغام انشعاب آب(15031453112)
          18-	قطع موقت و وصل انشعاب آب(15031453111)
          19-	نصب سیفون اضافی فاضلاب(15031453110)
          20-	تعویض کنتورآب(15031453109)
          21-	آزمایش کنتورآب(15031453108)
          22-	تغییر مکان  کنتور آب(15031453107)
          23-	تفکیک کنتور  آب(15031453106)
          24-	تغییر قطر انشعاب آب(15031453105)
          `,
          'assets/axiliaryroute/6.png'
        );
        break;
      case 'cs':
        this.helpService.addMessage('from cs', 'در صورتی­که کاربران نسبت به این وب سایت ، پیشنهاد یا انتقادی دارند یا درصورت مشاهده هرگونه خطا می ­توانند کارشناسان سازمان را از طریق بخش "انتقادات و پیشنهادات" باخبر سازند.', '', 'more cs', 'lot of text here');
        break;

      default:
        this.helpService.addMessage('میز خدمات الکترونیکی شرکت آبفا', `1.            آخرین قبض
          2.            صورتحساب
          3.            اعلام کارکرد کنتور
          4.            فروش انشعاب
          5.            خدمات پس از فروش
          6.            پیگیری درخواست ها
          7.            راهنما
          8.            آموزش
          9.            انتقادات و پیشنهادات
          می ­باشد که با انتخاب هر کدام وارد صفحه مربوط به آن می شوید.
          `, '', 'more cs', 'lot of text here');
        break;
    };
  }
  private routeToAxiliary = () => this.router.navigate(["aux", { outlets: { modal: ["help"] } }]);


  help = () => {
    this.routeToAxiliary();
  }

  ngAfterContentChecked(): void {
    this.someName();
  }
}
