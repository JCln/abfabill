import { Component, OnInit } from '@angular/core';
import { SpinnerWrapperService } from 'src/app/services/spinner-wrapper.service';
import { ViewBillService } from 'src/app/services/view-bill.service';

import { Implemens } from './../../shared/implemens';

@Component({
  selector: 'app-track-request',
  templateUrl: './track-request.component.html',
  styleUrls: ['./track-request.component.scss']
})
export class TrackRequestComponent implements OnInit, Implemens {
  trackRequests: any = [];

  constructor(
    private interfaceService: ViewBillService,
    private spinnerWrapper: SpinnerWrapperService
  ) { }

  connectToServer = () => {
  }

  createSpinner = (canLoad: boolean) => {
    canLoad ? this.spinnerWrapper.startLoading() : this.spinnerWrapper.stopLoading()
  }


  ngOnInit(): void {
  }

}
