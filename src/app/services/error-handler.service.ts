import { HttpErrorResponse } from '@angular/common/http';
import { ErrorHandler, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ErrorHandlerService implements ErrorHandler {
  private urlToExternal = 'https://www.abfaesfahan.ir/';

  constructor(private router: Router, private toasterService: ToastrService) { }

  toasterError = (message: string, info?: string) => {
    if (info) {
      this.toasterService.info(message, '', {
        timeOut: 5000,
        easeTime: '800',
        easing: 'ease-in-out',
        progressBar: true
      });
    } else {
      this.toasterService.error(message, 'خطا', {
        timeOut: 5000,
        easeTime: '800',
        easing: 'ease-in-out',
        progressBar: true
      });
    }
  }

  private timeoutNavigationToAbfa = () => {
    this.toasterError('شما به سایت آبفا متصل میشوید', 'info');
    setTimeout(() => {
      window.open(this.urlToExternal, '_self');
    }, 6000);
  }

  public handleError(error: number) {
    switch (error) {
      case 400:
        this.toasterError('درخواست بدرستی ارسال نشده است');
        break;
      case 401:
        this.toasterError('اطلاعات شما در شرکت آبفا بدرستی ثبت نشده است،لطفا با 1522 تماس حاصل فرمایید ');
        break;
      case 403:
        this.toasterError('دسترسی شما ممکن نیست');
        break;
      case 408:
        this.toasterError('زمان ارسال به پایان رسید، احتمالا سرعت اینترنت شما کم است');
        break;
      case 404:
        this.toasterError('اطلاعات قبضی پیدا نشد');
        break;
      case 0:
        this.toasterError('ارتباط با شرکت آبفا برقرار نشد، لطفا بعدا امتحان فرمایید');
        break;
      case 500:
        this.toasterError('مشکلی از شرکت آب رخ داده است، لطفا با 1522 تماس حاصل فرمایید');
        break;
      default:
        this.toasterError('شما به شبکه دسترسی ندارید');
    }
    this.timeoutNavigationToAbfa();
  }
  errorHandler(error: HttpErrorResponse) {
    if (error instanceof HttpErrorResponse) {
      this.handleError(error.status);
    }
    const errorMessage = '';
    return throwError(errorMessage);
  }
}
