import { AfterContentChecked, Component } from '@angular/core';

import { ErrorHandlerService } from './../../services/error-handler.service';
import { TrackRequestService } from './../../services/track-request.service';

@Component({
  selector: 'app-track-request',
  templateUrl: './track-request.component.html',
  styleUrls: ['./track-request.component.scss']
})
export class TrackRequestComponent implements AfterContentChecked {
  trackRequests: any = [];

  constructor(
    private trackRequestService: TrackRequestService,
    private toasterService: ErrorHandlerService
  ) { }

  ngAfterContentChecked() {
    this.trackRequestService.$tracks.subscribe(res => {
      console.log(res);
      console.log(1);
      if (!res) {
        this.toasterService.toasterError('', 'لطفا شماره پیگیری خود را وارد فرمایید', 'true');
        this.trackRequestService.noInfoExists;
      }
    })
  }

}
