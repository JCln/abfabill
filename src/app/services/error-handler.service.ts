import { Injectable, ErrorHandler } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ErrorHandlerService implements ErrorHandler {
  static readonly REFRESH_PAGE_ON_TOAST_CLICK_MESSAGE: string = "An error occurred: Please click this message to refresh";
  static readonly DEFAULT_ERROR_TITLE: string = "Something went wrong";

  constructor(private router: Router) { }

  private showError(message: string) {
    console.log(message);
    // this.toastManager.error(message, ErrorHandlerService.DEFAULT_ERROR_TITLE, { dismiss: 'controlled' }).then((toast: Toast) => {
    //   let currentToastId: number = toast.id;
    //   this.toastManager.onClickToast().subscribe(clickedToast => {
    //     if (clickedToast.id === currentToastId) {
    //       this.toastManager.dismissToast(toast);
    //       window.location.reload();
    //     }
    //   });
    // });
  }

  public handleError(error: any) {
    console.error(error);
    let httpErrorCode = error.httpErrorCode;
    switch (httpErrorCode) {
      case 400:
        this.showError(error.message);
        break;
      case 401:
        this.showError(error.message);
        break;
      case 403:
        this.showError(error.message);
        break;
      case 408:
        this.showError(error.message)
        break;
        case 500:
        this.showError(error.message)
        break;
      default:
        this.showError(ErrorHandlerService.REFRESH_PAGE_ON_TOAST_CLICK_MESSAGE);
    }
  }
}
