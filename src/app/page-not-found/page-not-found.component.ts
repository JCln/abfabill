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
  loggin: LogginsService;

  billId: number;
  neighbourBillId: number;
  tracks: number;

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

  track = async () => {
    await this.trackRequstService.asyncMethod(this.tracks);
    this.trackRequstService.getTracks().subscribe(res => {
      if (res) {
        if (this.isNull(res[0]))
          return;
        this.spinnerWrapper.stopLoading();
      }
    })

  }

  checkTrackNumber = () => {
    if (isNaN(this.tracks) || this.tracks === null || this.tracks.toString().trim().length > this.trackMaxLength || this.tracks.toString().trim().length <= this.trackMinLength) {
      this.tracks = null;
      this.errorHandler.customToaster(5000, 'شماره پیگیری اشتباه است');
      return;
    } else {
      this.spinnerWrapper.startLoading();
      this.track();
    }
  }
  isNeighbourBillId = () => {
    if (isNaN(this.neighbourBillId) || this.neighbourBillId === null || this.neighbourBillId.toString().length > this.maxLength || this.neighbourBillId.toString().length <= this.minLength) {
      this.neighbourBillId = null;
      this.errorHandler.handleError(404);
      return;
    } else {
      this.router.navigate(['rn'])
    }
  }
  async asyncMethod() {
    await this.logginsService.asyncMethod(this.billId.toString());
    this.logginsService.getIsLoaded().subscribe(res => {
      if (res) {
        this.authGuard.changeIdRoutePart(this.billId.toString());
        this.billIdValue(this.billId);
      }
    });

  }

  checkValidInput = () => {
    if (isNaN(this.billId) || this.billId === null || this.billId.toString().length > this.maxLength || this.billId.toString().length <= this.minLength) {
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
    trackNumber: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(10), Validators.pattern("^[0-9]*$")]],
  });
  registerNewForm = this.fb.group({
    neighbourBillId: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(13), Validators.pattern("^[0-9]*$")]],
  });
  serviceDeskForm = this.fb.group({
    billId: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(13), Validators.pattern("^[0-9]*$")]],
  });
}
