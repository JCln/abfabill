import { HttpErrorResponse } from '@angular/common/http';
import { ErrorHandler, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ErrorHandlerService implements ErrorHandler {

  constructor(private router: Router, private toasterService: ToastrService) { }

  toasterError = (message: string, info?: string) => {
    if (info) {
      this.toasterService.success(message, info, {
        timeOut: 10000,
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

  customToaster = (timeout: number, message?: string, info?: string) => {
    this.toasterService.error(info, message, {
      timeOut: timeout,
      easeTime: '800',
      easing: 'ease-in-out',
      progressBar: false
    });
  }

  private setTimeOutBeforeRoute = () => {
    setTimeout(() => {
      this.router.navigate(['/pg']);
    }, 2000);
  }

  public handleError(error: number, message?: string) {
    switch (error) {
      case 400:
        this.customToaster(10000, message);
        break;
      case 401:
        this.toasterError('اطلاعات شما در شرکت آبفا بدرستی ثبت نشده است،لطفا با 1522 تماس حاصل فرمایید ');
        break;
      case 403:
        this.toasterError('دسترسی شما ممکن نیست');
        break;
      case 408:
        this.toasterError('مشکلی در نمایش اطلاعات پیش آمد، احتمالا سرعت اینترنت شما کم است');
        break;
      case 404:
        this.customToaster(8000, 'اطلاعات قبضی پیدا نشد', 'لطفا شناسه را بدقت وارد فرمایید');
        break;
      case 406:
        this.customToaster(8000, '', 'لطفا شناسه را بدقت وارد فرمایید');
        break;
      case 416: {
        this.customToaster(10000, message);
        return;
      }
      case 0:
        this.customToaster(8000, 'ارتباط با سرویس دهنده برقرار نشد', 'لطفا چند دقیقه دیگر امتحان کنید یا با شماره 1522 تماس بگیرید');
        break;
      case 500:
        this.toasterError('مشکلی از شرکت آب رخ داده است، لطفا ساعتی دیگر مراجعه فرمایید');
        break;
      case 504:
        this.customToaster(11000, 'باعرض پوزش', 'مشکلی از طرف شرکت آبفا رخ داده است، لطفا بعدا مراجعه نمایید');
        break;
      default:
        this.toasterError('شما به شبکه دسترسی ندارید');
    }
    this.setTimeOutBeforeRoute();
  }
  errorHandler(error: HttpErrorResponse) {
    if (error instanceof HttpErrorResponse) {
      this.handleError(error.status, error.error.message || 'شناسه قبض را بدرستی وارد کنید');
    }
    return throwError(error);
  }
}
