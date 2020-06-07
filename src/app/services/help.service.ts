import { Injectable } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class HelpService {
  messages: string[] = [];
  currentLastRoute: any;

  addMessage = (header: string, mainText: string, img: string, secondImg?: string, footer?: string, secondMainText?: string) => {
    this.messages[0] = header;
    this.messages[1] = mainText;
    this.messages[2] = img;
    this.messages[3] = footer;
    this.messages[4] = secondImg;
    this.messages[5] = secondMainText;

  }
  private routeToAxiliary = () => this.router.navigate(["aux", { outlets: { modal: ["help"] } }]);

  someName = () => {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd)
        this.currentLastRoute = event.url.split('/').pop();
    });

    switch (this.currentLastRoute) {
      case 'pg':
        this.addMessage('راهنمای استفاده از همراه آبفا استان اصفهان', 'اپلیکیشن اندروید "همراه آبفای استان اصفهان" به سفارش سازمان آب و فاضلاب استان اصفهان جهت سهولت ارتباط مشترکین و سازمان و کاهش مراجعات حضوری از طریق انجام خدمات به صورت غیرحضوری، برنامه ­نویسی و در فروشگاه­ های معتبر اندروید منتشرشد.شما می ­توانید با مراجعه به سایت مايکت با لینک 1https://myket.ir (https://myket.ir/app/com.app.leon.moshtarak)` ', 'assets/axiliaryroute/id.png', 'more pg', 'lot of pg text here');
        break;
      case 'bill':
        this.addMessage('بررسی آخرین قبض', 'می ­توانید اطلاعات مربوط به آخرین قبض خود، اعم از شناسه قبض، شناسه پرداخت، مهلت و مبلغ قابل پرداخت، شماره فعلی و پیشین و .... را مشاهده کنید', 'assets/axiliaryroute/2.PNG', 'assets/axiliaryroute/2-2.PNG', '', 'برای آن دسته از کاربران که تمایل به مشاهده قبض همانند قبض کاغذی دارند میتوانند با کلیک برروی مشاهد قبض کاغذی به این قسمت دسترسی داشته باشند');
        break;
      case 'ma':
        this.addMessage('from ma', 'some text', 'more footer', 'assets/imgs/waterMeter.png', 'lot of text here');
        break;
      case 'kardex':
        this.addMessage('صورتحساب (10 قبض آخر)', ' لیست آخرین قبوض خود و وضعیت آن­ ها را مشاهده نمایید. در این قسمت با تپ بر روی "صورت حساب آب بها" می توانید نمودار مصرف اخیر خود را ملاحظه نمایید. ضمنا با کلیک یا تب کردن روی هر سطر میتوانید جزئیات مربروط به آن آن سطر را مشاهده نمایید.', '', 'more kardex footer', 'lot of text here');
        break;
      case 'installment':
        this.addMessage('from installment', 'some text', '', 'more installment footer', 'lot of text here');
        break;
      case 'myInfo':
        this.addMessage('اطلاعات انشعاب', 'some text', '', 'more installment footer', 'lot of text here');
        break;
      case 'elcs':
        this.addMessage(
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
        this.addMessage('from cs', 'در صورتی­که کاربران نسبت به این وب سایت ، پیشنهاد یا انتقادی دارند یا درصورت مشاهده هرگونه خطا می ­توانند کارشناسان سازمان را از طریق بخش "انتقادات و پیشنهادات" باخبر سازند.', '', 'more cs', 'lot of text here');
        break;
      case 'receipt':
        this.addMessage('inside receipt', 'wooow', 'assets/axiliaryroute/2-3.PNG');
        break;
      case 'bar':
        this.addMessage('نمودار مصرف', 'wooow', 'assets/axiliaryroute/2-3.PNG');
        break;

      default:
        this.addMessage('میز خدمات الکترونیکی شرکت آبفا', `1.            آخرین قبض
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
  help = () => this.routeToAxiliary();

  constructor(private router: Router) { }
}
