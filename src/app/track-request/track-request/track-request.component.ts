import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SpinnerWrapperService } from 'src/app/services/spinner-wrapper.service';

import { ErrorHandlerService } from './../../services/error-handler.service';
import { TrackRequestService } from './../../services/track-request.service';

@Component({
  selector: 'app-track-request',
  templateUrl: './track-request.component.html',
  styleUrls: ['./track-request.component.scss']
})
export class TrackRequestComponent implements OnInit {
  trackRequests: any = [];

  constructor(
    private trackRequestService: TrackRequestService,
    private toasterService: ErrorHandlerService,
    private spinnerWrapper: SpinnerWrapperService,
    private router: Router
  ) {
    // this.spinnerCondition();
    // this.spinnerWrapper.startLoading();
  }
  ngOnInit() {
    this.getTracks();
    this.spinnerWrapper.stopLoading();
  }

  // spinnerCondition = () => {
  //   this.spinnerWrapper.loadingStatus$.subscribe(status => {
  //     console.log(status);
  //   })
  // }

  getTracks() {
    // this.spinnerWrapper.startLoading();
    this.trackRequestService.getTracks().subscribe(res => {
      if (!res) {
        this.toasterService.toasterError('', 'لطفا شماره پیگیری خود را وارد فرمایید', 'true');
        this.trackRequestService.noInfoExists;
        // this.spinnerWrapper.stopLoading();
        console.log(111);
        
        this.router.navigate(['/pg']);
      } else {
        console.log(2);
        this.router.navigate(['tr']);
        this.trackRequests = res;
        // setTimeout(() => {
          // this.spinnerWrapper.stopLoading();
        // }, 2000);
      }
    });
  }

}
