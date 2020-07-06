import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { AuthGuard } from '../services/auth.guard';
import { ErrorHandlerService } from '../services/error-handler.service';
import { IViewBill } from './../services/iview-bill';
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

  input: number;
  neighbourBillId: number;
  tracks: number;

  constructor(private router: Router, private errorHandler: ErrorHandlerService, private authGuard: AuthGuard, private trackRequstService: TrackRequestService) { }

  // @HostListener('document: keyup', ['$event'])
  // onkeyUpHandler(event: KeyboardEvent) {
  //   if (event.key === 'Enter' || event.key === 'NumpadEnter') {
  //     if ()      
  //   }
  // }

  checkTrackNumber = () => {
    if (isNaN(this.tracks) || this.tracks === null || this.tracks.toString().length > this.trackMaxLength || this.tracks.toString().length <= this.trackMinLength) {
      this.tracks = null;
      this.errorHandler.customToaster(5000, 'شماره پیگیری اشتباه است');
      return;
    } else {
      const canRoute = this.trackRequstService.canConnectToServer(this.tracks);
      console.log(typeof canRoute);

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
    if (isNaN(this.input) || this.input === null || this.input.toString().length > this.maxLength || this.input.toString().length <= this.minLength) {
      this.input = null;
      this.errorHandler.handleError(404);
      return;
    } else {
      this.authGuard.changeIdRoutePart(this.input.toString());
      this.billIdValue(this.input);
    }
  }

  private billIdValue = (billId: IViewBill['billId']) => {
    this.router.navigate([billId]);
  }

}
