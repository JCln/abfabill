import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos';
import { ViewBillService } from 'src/app/services/view-bill.service';

import { InteractionService } from '../../services/interaction.service';
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
    private interactionService: InteractionService,
    private viewBillService: ViewBillService,
  ) {
    super();
  }

  isNull = (value: any) =>
    typeof value === "undefined" || (typeof value !== "object" || !value)

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
    this.viewBillService.getInstallment().subscribe((res: any) => {
      if (res) {
        // looking for async pipe make ups
        // this.$asyncPipeTest = res;
        this.response = true;

        // when response is null and means no installment exists
        if (this.isNull(res[0])) {
          this.respnseIsNull = false;
        }
        this.insertValToVar(res, this.removeLoaderAfterResponse);
      }
    });
  }

  // seemed that it is unnessesary
  getId = (callback: () => void) => {
    this.interactionService.installmentId$.subscribe(res => {
      if (res)
        this.billId = res;
    });
    callback();
  }

  nestingLevel = async () => {
    this.viewBillService.setInstallmentId(this.getedDataIdFromRoute);

    this.connectToServer();
  }

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
