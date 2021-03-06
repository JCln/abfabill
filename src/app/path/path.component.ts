import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { IViewBill } from '../interfaces/iview-bill';
import { AuthGuard } from '../services/auth.guard';
import { ErrorHandlerService } from '../services/error-handler.service';
import { LogginsService } from './../services/loggins.service';
import { SpinnerWrapperService } from './../services/spinner-wrapper.service';
import { TrackRequestService } from './../services/track-request.service';
import { CheckRoute } from './../shared/check-route';

@Component({
  selector: 'app-path',
  templateUrl: './path.component.html',
  styleUrls: ['./path.component.scss']
})
export class PathComponent extends CheckRoute {
  private maxLength = 13;
  private minLength = 3;
  private trackMinLength = 2;
  private trackMaxLength = 10;

  billId: any;
  neighbourBillId: any;
  tracks: any;
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
  track = async () => {
    await this.trackRequstService.setTrackToZero();
    this.spinnerWrapper.startLoading();
    await this.trackRequstService.asyncMethod(this.tracks);
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
    if (this.isNull(this.tracks)) {
      this.errorHandler.customToaster(5000, 'شماره پیگیری را وارد کنید');
      return;
    }
    this.tracks = this.trimStrings(this.tracks);
    this.tracks = this.persianToEngNumbers(this.tracks);
    if (this.tracks.substring(0, 1) === '0') {
      this.errorHandler.customToaster(5000, 'لطفا شماره پیگیری بدون صفر اول وارد شود');
      return;
    }
    if (!this.numbersValidation(this.tracks)) {
      this.errorHandler.customToaster(5000, 'شماره پیگیری اشتباه است');
      return;
    }
    if (this.tracks.length > this.trackMaxLength || this.tracks.length <= this.trackMinLength) {
      this.tracks = null;
      this.errorHandler.customToaster(5000, 'شماره پیگیری اشتباه است');
      return;
    } else {
      this.track();
    }
  }
  checkNeightbourBillId = async () => {
    this.spinnerBooleanNeighbour = true;
    await this.logginsService.checkValidation(this.neighbourBillId);
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
    if (this.isNull(this.neighbourBillId)) {
      this.errorHandler.customToaster(5000, 'شناسه قبض را وارد کنید');
      return;
    }
    this.neighbourBillId = this.trimStrings(this.neighbourBillId);
    this.neighbourBillId = this.persianToEngNumbers(this.neighbourBillId);
    if (!this.numbersValidation(this.neighbourBillId)) {
      this.neighbourBillId = null;
      this.errorHandler.customToaster(5000, 'شناسه قبض همسایه اشتباه است');
      return;
    }
    if (this.neighbourBillId.length > this.maxLength || this.neighbourBillId.length <= this.minLength) {
      this.errorHandler.customToaster(5000, 'شناسه قبض همسایه اشتباه است');
      return;
    } else {
      this.checkNeightbourBillId();
    }
  }
  asyncMethod = async () => {
    this.spinnerBooleanServiceDesk = true;
    await this.logginsService.checkValidation(this.billId);
    this.logginsService.getIsLoaded().subscribe(res => {
      if (res) {
        this.authGuard.changeIdRoutePart(this.billId);
        this.billIdValue(this.billId);
        this.spinnerBooleanServiceDesk = false;
      }
    });
    setTimeout(() => {
      this.spinnerBooleanServiceDesk = false;
    }, 2000);
  }
  checkValidInput = () => {
    if (this.isNull(this.billId)) {
      this.errorHandler.customToaster(5000, 'شناسه قبض را وارد کنید');
      return;
    }
    this.billId = this.trimStrings(this.billId);
    this.billId = this.persianToEngNumbers(this.billId);
    if (!this.numbersValidation(this.billId)) {
      this.billId = null;
      this.errorHandler.customToaster(5000, 'شناسه قبض اشتباه است');
      return;
    }
    if (this.billId.length > this.maxLength || this.billId.length <= this.minLength) {
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
