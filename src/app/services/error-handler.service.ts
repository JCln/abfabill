import { HttpErrorResponse } from '@angular/common/http';
import { ErrorHandler, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { throwError } from 'rxjs';
import { InteractionService } from 'src/app/services/interaction.service';

@Injectable({
  providedIn: 'root'
})
export class ErrorHandlerService implements ErrorHandler {

  constructor(private router: Router,
    private toasterService: ToastrService,
    private interactionService: InteractionService
  ) { }

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

  billIdISValid = () => {
    let billId: string;
    this.interactionService.billId$.subscribe(res => billId = res);
    this.timeOutBeforeRoute(billId);
  }

  public timeOutBeforeRoute = (routeTo: string) => {
    setTimeout(() => {
      this.router.navigate([routeTo]);
    }, 2000);
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
        this.toasterError('اطلاعات شما در شرکت آبفا بدرستی ثبت نشده است،لطفا با شماره 1522 تماس حاصل فرمایید ');
        this.billIdISValid();
        return;
      case 403:
        this.toasterError('دسترسی شما ممکن نیست');
        this.billIdISValid();
        return;
      case 408:
        this.toasterError('مشکلی در نمایش اطلاعات پیش آمد، احتمالا سرعت اینترنت شما کم است. لطفا دقایقی دیگر دوباره امتحان فرمایید');
        this.billIdISValid();
        return;
      case 404:
        this.customToaster(8000, 'اطلاعات قبضی پیدا نشد', 'لطفا شناسه را بدقت وارد فرمایید');
        break;
      case 406:
        this.customToaster(8000, '', 'لطفا شناسه را بدقت وارد فرمایید');
        break;
      case 416: {
        this.interactionService.setmetterAnnounce(message);
        return;
      }
      case 0:
        this.customToaster(8000, 'ارتباط با سرویس دهنده برقرار نشد، احتمالا شما به شبکه دسترسی ندارید', 'لطفا چند دقیقه دیگر امتحان کنید یا با شماره 1522 تماس بگیرید');
        this.billIdISValid();
        return;
      case 500:
        this.toasterError('خطای سرویس دهنده، لطفا دقایقی دیگر دوباره امتحان فرمایید');
        this.billIdISValid();
        return;
      case 502:
        this.toasterError('خطای سرویس دهنده، لطفا دقایقی دیگر دوباره امتحان فرمایید');
        this.billIdISValid();
        return;
      case 504:
        this.customToaster(11000, 'باعرض پوزش', 'خطای سرویس دهنده، لطفا دقایقی دیگر دوباره امتحان فرمایید');
        this.billIdISValid();
        return;
      default:
        this.toasterError('شما به اینترنت دسترسی ندارید');
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
