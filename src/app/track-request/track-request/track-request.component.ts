import { Component, OnInit } from '@angular/core';

import { ErrorHandlerService } from './../../services/error-handler.service';
import { TrackRequestService } from './../../services/track-request.service';
import { CheckRoute } from './../../shared/check-route';

@Component({
  selector: 'app-track-request',
  templateUrl: './track-request.component.html',
  styleUrls: ['./track-request.component.scss']
})
export class TrackRequestComponent extends CheckRoute implements OnInit {
  trackRequests: any = [];

  constructor(
    private trackRequestService: TrackRequestService,
    private toasterService: ErrorHandlerService
  ) {
    super();
  }

  getTracks() {
    this.trackRequestService.getTracks().subscribe(res => {
      if (this.isNull(res[0])) {
        this.toasterService.toasterError('', 'لطفا شماره پیگیری خود را وارد فرمایید', 'true');
        this.trackRequestService.noInfoExists();
      } else {
        this.trackRequests = res;
        console.log(this.trackRequests);
        
      }
    });
  }

  ngOnInit() {
    this.getTracks();
  }
}
