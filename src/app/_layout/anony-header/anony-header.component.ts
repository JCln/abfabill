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
        this.helpService.addMessage('فروش انشعاب', ' شما می ­توانید فرم درخواست اولیه خرید انشعاب جدید (آب یا آب و فاضلاب) را پرکنید و کد پیگیری دریافت کنید. توجه شود ارزیابی صحت مقدار ورودی ملی، تلفن ثابت و کد پستی به صورت درون برنامه ای و شناسه همسایه به صورت آنلاین انجام و نتیجه اعلام  می شود.', '', 'more elcs footer', 'lot of text here');
        break;
      case 'cs':
        this.helpService.addMessage('from cs', 'در صورتی­که کاربران نسبت به این وب سایت ، پیشنهاد یا انتقادی دارند یا درصورت مشاهده هرگونه خطا می ­توانند کارشناسان سازمان را از طریق بخش "انتقادات و پیشنهادات" باخبر سازند.', '', 'more cs', 'lot of text here');
        break;

      default:
        this.helpService.addMessage('from cs', `1.            آخرین قبض
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
  private routeToAxiliary = () => this.router.navigate(["/aux/inner", { outlets: { modal: ["help"] } }]);


  help = () => {
    this.routeToAxiliary();
  }

  ngAfterContentChecked(): void {
    this.someName();
  }
}
