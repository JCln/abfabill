import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthGuard } from '../services/auth.guard';
import { ErrorHandlerService } from '../services/error-handler.service';
import { IViewBill } from './../services/iview-bill';
import { LogginsService } from './../services/loggins.service';
import { SpinnerWrapperService } from './../services/spinner-wrapper.service';
import { TrackRequestService } from './../services/track-request.service';
import { CheckRoute } from './../shared/check-route';

@Component({
  selector: 'app-page-not-found',
  templateUrl: './page-not-found.component.html',
  styleUrls: ['./page-not-found.component.scss']
})
export class PageNotFoundComponent extends CheckRoute {
  private maxLength = 13;
  private minLength = 4;
  private trackMinLength = 3;
  private trackMaxLength = 9;

  billId: number;
  neighbourBillId: number;
  tracks: number;
  // small spinner
  spinnerBooleanServiceDesk: boolean = false;
  spinnerBooleanNeighbour: boolean = false;

  constructor(
    private router: Router,
    private errorHandler: ErrorHandlerService,
    private authGuard: AuthGuard,
    private trackRequstService: TrackRequestService,
    private logginsService: LogginsService,
    private fb: FormBuilder,
    private spinnerWrapper: SpinnerWrapperService
  ) {
    super();
  }

  numbersValidation = (values: number) => {
    const stringVal = values.toString();
    // eslint-disable-next-line no-control-regex
    const regexIsPersian = /^[\u06F0-\u06F90-9]+$/;
    if (regexIsPersian.test(stringVal))
      return true;
    return false;
  }
  track = async () => {
    await this.trackRequstService.setTrackToZero();
    this.spinnerWrapper.startLoading();
    await this.trackRequstService.asyncMethod(this.tracks.toString());
    this.trackRequstService.getTracks().subscribe((res: Array<object>[]) => {
      if (res) {
        if (!this.isNull(res[0]))
          this.spinnerWrapper.stopLoading();
        else
          this.spinnerWrapper.startLoading();

      }
    })

  }
  checkTrackNumber = () => {
    this.tracks = this.persianToEngNumbers(this.tracks);
    if (this.tracks.toString().trim().substring(0, 1) === '0') {
      this.errorHandler.customToaster(5000, 'لطفا شماره پیگیری بدون صفر اول وارد شود');
      return;
    }
    if (!this.numbersValidation(this.tracks)) {
      this.errorHandler.customToaster(5000, 'شماره پیگیری اشتباه است');
      return;
    }
    if (this.tracks === null || this.tracks.toString().trim().length > this.trackMaxLength || this.tracks.toString().trim().length <= this.trackMinLength) {
      this.tracks = null;
      this.errorHandler.customToaster(5000, 'شماره پیگیری اشتباه است');
      return;
    } else {
      this.track();
    }
  }
  checkNeightbourBillId = async () => {
    this.spinnerBooleanNeighbour = true;
    await this.logginsService.asyncMethod(this.neighbourBillId.toString());
    this.logginsService.getIsLoaded().subscribe(res => {
      if (res) {
        this.router.navigate(['rn'], { queryParams: { nid: this.neighbourBillId } });
      }
    });
    setTimeout(() => {
      this.spinnerBooleanNeighbour = false;
    }, 2000);
  }
  isNeighbourBillId = () => {
    this.neighbourBillId = this.persianToEngNumbers(this.neighbourBillId);
    if (!this.numbersValidation(this.neighbourBillId)) {
      this.errorHandler.customToaster(5000, 'شناسه قبض اشتباه است');
      return;
    }
    if (this.neighbourBillId === null || this.neighbourBillId.toString().length > this.maxLength || this.neighbourBillId.toString().length <= this.minLength) {
      this.neighbourBillId = null;
      this.errorHandler.handleError(404);
      return;
    } else {
      this.checkNeightbourBillId();
    }
  }
  asyncMethod = async () => {
    this.spinnerBooleanServiceDesk = true;
    await this.logginsService.asyncMethod(this.billId.toString());
    this.logginsService.getIsLoaded().subscribe(res => {
      if (res) {
        this.authGuard.changeIdRoutePart(this.billId.toString());
        this.billIdValue(this.billId);
        this.spinnerBooleanServiceDesk = false;
      }
    });
    setTimeout(() => {
      this.spinnerBooleanServiceDesk = false;
    }, 2000);
  }
  checkValidInput = () => {
    this.billId = this.persianToEngNumbers(this.billId);
    if (!this.numbersValidation(this.billId)) {
      this.errorHandler.customToaster(5000, 'شناسه قبض اشتباه است');
      return;
    }
    if (this.billId === null || this.billId.toString().length > this.maxLength || this.billId.toString().length <= this.minLength) {
      this.billId = null;
      this.errorHandler.handleError(404);
      return;
    } else {
      this.asyncMethod();
    }
  }
  private billIdValue = (billId: IViewBill['billId']) => {
    this.router.navigate([billId]);
  }
  trackRequestForm = this.fb.group({
    trackNumber: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(10)]],
  });
  registerNewForm = this.fb.group({
    neighbourBillId: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(13)]],
  });
  serviceDeskForm = this.fb.group({
    billId: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(13)]],
  });
}
