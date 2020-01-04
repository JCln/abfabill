import { Injectable, ErrorHandler } from '@angular/core';
import { Router } from '@angular/router';
import { throwError, Observable } from 'rxjs';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class ErrorHandlerService implements ErrorHandler {
  static readonly DEFAULT_ERROR_TITLE: string = "ارتباط شما به اینترنت برقرار نیست.";

  constructor(private router: Router, private toasterService: ToastrService) { }

  private showError(message: string) {
    console.log(message);

  }

  public handleError(error: any) {
    switch (error) {
      case 400:
        this.toasterService.error('درخواست بدرستی ارسال نشده است');
        break;
      case 401:
        this.toasterService.error('اطلاعات شما در شرکت آبفا بدرستی ثبت نشده است،لطفا با 1522 تماس حاصل فرمایید ');
        break;
      case 403:
        this.toasterService.error('دسترسی شما ممکن نیست');
        break;
      case 408:
        this.toasterService.error('زمان ارسال به پایان رسید، احتمالا سرعت اینترنت شما کم است');
        break;
      case 404:
        this.toasterService.error('اطلاعات قبضی پیدا نشد');
        break;
      case 0:
        this.toasterService.error('ارتباط با شرکت آبفا برقرار نشد، لطفا بعدا امتحان فرمایید');
        break;
      case 500:
        this.toasterService.error('مشکلی از شرکت آب رخ داد، لطفا با 1522 تماس حاصل فرمایید');
        break;
      default:
        this.toasterService.error(ErrorHandlerService.DEFAULT_ERROR_TITLE);
    }
  }
  errorHandler(error) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    this.handleError(errorMessage);
    return throwError(errorMessage);
  }
}
