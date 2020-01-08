import { Injectable, ErrorHandler } from '@angular/core';
import { Router } from '@angular/router';
import { throwError, Observable } from 'rxjs';
import { ToastrService } from 'ngx-toastr';
import { HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ErrorHandlerService implements ErrorHandler {
  static readonly DEFAULT_ERROR_TITLE: string = "شما به شبکه دسترسی ندارید";

  constructor(private router: Router, private toasterService: ToastrService) { }

  toasterError = (message: string) => {
    this.toasterService.error(message, 'خطا', {
      timeOut: 5000,
      easeTime: '800',
      easing: 'ease-in-out',
      progressBar: true,
      progressAnimation: 'increasing'
    });
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
  }
  errorHandler(error: HttpErrorResponse) {
    if (error instanceof HttpErrorResponse) {
      this.handleError(error.status);
    }
    const errorMessage = '';
    return throwError(errorMessage);
  }
}
