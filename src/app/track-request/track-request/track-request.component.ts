import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { TrackRequestService } from './../../services/track-request.service';
import { CheckRoute } from './../../shared/check-route';

@Component({
  selector: 'app-track-request',
  templateUrl: './track-request.component.html',
  styleUrls: ['./track-request.component.scss']
})
export class TrackRequestComponent extends CheckRoute implements OnInit {
  trackRequests: any = [];
  smsList: object;
  smsStatus: string;

  constructor(
    private trackRequestService: TrackRequestService,
    // for route between nesting component and hide the parent after child routed
    public route: ActivatedRoute
  ) {
    super();
  }
  getTracks() {
    const b = this.trackRequestService;
    b.getTracks().subscribe(res => {
      if (!this.isNull(res[0]))
        this.trackRequests = res;
      else {
        const a = b.insertedLocationPath();
        b.asyncMethod(a);
        this.getTracks();
      }
    });
  }
  getSMSList = (sms: object, status: string) => {
    this.smsList = sms;
    this.smsStatus = status;
  }

  ngOnInit() {
    this.getTracks();
  }
}
