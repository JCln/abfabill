import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthGuard } from '../services/auth.guard';
import { ErrorHandlerService } from '../services/error-handler.service';
import { IViewBill } from './../services/iview-bill';
import { LogginsService } from './../services/loggins.service';
import { TrackRequestService } from './../services/track-request.service';

@Component({
  selector: 'app-page-not-found',
  templateUrl: './page-not-found.component.html',
  styleUrls: ['./page-not-found.component.scss']
})
export class PageNotFoundComponent {
  private maxLength = 13;
  private minLength = 4;
  private trackMinLength = 3;
  private trackMaxLength = 9;
  loggin: LogginsService;

  input: number;
  neighbourBillId: number;
  tracks: number;

  constructor(
    private router: Router,
    private errorHandler: ErrorHandlerService,
    private authGuard: AuthGuard,
    private trackRequstService: TrackRequestService,
    private logginsService: LogginsService,
    private fb: FormBuilder
  ) { }

  checkTrackNumber = () => {
    if (isNaN(this.tracks) || this.tracks === null || this.tracks.toString().length > this.trackMaxLength || this.tracks.toString().length <= this.trackMinLength) {
      this.tracks = null;
      this.errorHandler.customToaster(5000, 'شماره پیگیری اشتباه است');
      return;
    } else {
      // console.log(1);
      const canRoute = this.trackRequstService.canConnectToServer(this.tracks);
      // console.log(canRoute);
      // console.log(typeof canRoute);

      if (canRoute)
        this.router.navigate(['tr'])
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
  checkValidInput = () => {
    let a: any;
    if (isNaN(this.input) || this.input === null || this.input.toString().length > this.maxLength || this.input.toString().length <= this.minLength) {
      this.input = null;
      this.errorHandler.handleError(404);
      return;
    } else {
      this.logginsService.checkValidBillId(this.input.toString());
      a = this.logginsService.isLoaded;
      console.log(a);
      // if (a) {
      //   this.authGuard.changeIdRoutePart(this.input.toString());
      //   this.billIdValue(this.input);
      // }
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
