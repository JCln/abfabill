import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos';
import { ViewBillService } from 'src/app/services/view-bill.service';

import { CheckRoute } from './../../shared/check-route';

@Component({
  selector: 'app-installment',
  templateUrl: './installment.component.html',
  styleUrls: ['./installment.component.scss']
})
export class InstallmentComponent extends CheckRoute implements OnInit {
  spinnerBoolean = true;
  showMoreButton = false;
  sumOfInstallments = 0;
  billId: string = '';
  response;
  respnseIsNull = true;

  testObject: any = [];
  // $asyncPipeTest: any;
  // testObject = a;

  constructor(
    private viewBillService: ViewBillService
  ) {
    super();
  }

  // typeof value !== "object" cleared

  showMoreButtonClicked = (): void => {
    this.showMoreButton = !this.showMoreButton;
    scroll(0, 1200);
  }
  CalcInstallmentAmount = (val: number, event: any): void => {
    if (event.srcElement.checked) {
      this.sumOfInstallments += val;
    } else {
      this.sumOfInstallments -= val;
    }
  }
  insertValToVar = (res: any, callback: () => void) => {
    for (const key in res) {
      if (res.hasOwnProperty(key)) {
        this.testObject[key] = (res[key]);
      }
    }
    callback();
  }
  removeLoaderAfterResponse = () => this.spinnerBoolean = false;
  connectToServer = () => {
    this.viewBillService.getInstallment(this.getedDataIdFromRoute).subscribe((res: any) => {
      if (res) {
        this.response = true;
        // when response is null and means no installment exists
        if (this.isNull(res[0])) {
          this.respnseIsNull = false;
        }
        this.insertValToVar(res, this.removeLoaderAfterResponse);
      }
    });
  }

  nestingLevel = () => this.connectToServer();

  ngOnInit() {
    this.nestingLevel();

    AOS.init(
      {
        duration: 200,
        easing: 'ease-in-quad'
      }
    );
  }

}
