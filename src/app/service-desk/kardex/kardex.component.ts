import { Component, OnInit } from '@angular/core';
import { ViewBillService } from 'src/app/services/view-bill.service';

import { SpinnerWrapperService } from './../../services/spinner-wrapper.service';

@Component({
  selector: 'app-kardex',
  templateUrl: './kardex.component.html',
  styleUrls: ['./kardex.component.scss']
})
export class KardexComponent implements OnInit {
  // bool kardex
  kardex: any;
  ////////
  billId: string;

  constructor(private interfaceService: ViewBillService, private spinnerWrapper: SpinnerWrapperService) {
    this.getDataFromRoute();
    this.createSpinner();
  }
  getDataFromRoute = () => {
    this.billId = window.location.pathname.split('/')[1];
  }
  connectToServer = () => {
    this.interfaceService.getKardex(this.billId).subscribe((res: any) => {
      if (res) {
        this.kardex = res;
        this.spinnerWrapper.loading(false);
      }
    })
  }

  createSpinner = () => {
    this.spinnerWrapper.loading(true);
  }

  ngOnInit(): void {
    this.connectToServer();
  }

}
