import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import * as AOS from 'aos';
import { ErrorHandlerService } from 'src/app/services/error-handler.service';
import { ViewBillService } from 'src/app/services/view-bill.service';

import { InteractionService } from '../../services/interaction.service';

// const a: any[] = [
//   {
//     amount: 'ali', billId: 111,
//     paymentId: 239874,
//     deadlineDate: '98/12/23',
//     isPayed: false
//   },
//   {
//     amount: 'ali', billId: 111,
//     paymentId: 239874,
//     deadlineDate: '98/12/23',
//     isPayed: true
//   }
// ]
@Component({
  selector: 'app-installment',
  templateUrl: './installment.component.html',
  styleUrls: ['./installment.component.scss']
})
export class InstallmentComponent implements OnInit {
  spinnerBoolean = true;
  showMoreButton = false;
  sumOfInstallments = 0;
  billId: string = '';
  getedDataIdFromRoute: any = [];
  response;
  respnseIsNull = true;

  testObject: any = [];
  // $asyncPipeTest: any;
  // testObject = a;

  constructor(
    private interactionService: InteractionService,
    private route: ActivatedRoute,
    private viewBillService: ViewBillService,
    private errorHandler: ErrorHandlerService,
  ) {
    this.nestingLevel().catch(x => console.log(x.message));
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

  getDataFromRoute = (): Promise<string> => {
    this.interactionService.billId$.subscribe(res => {
      if (res) this.getedDataIdFromRoute = res;
    });
    return new Promise(resolve => {
      resolve(this.getedDataIdFromRoute);
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
    const a = await this.getDataFromRoute();
    this.viewBillService.setInstallmentId(a);

    this.connectToServer();
  }

  ngOnInit() {
    AOS.init(
      {
        duration: 200,
        easing: 'ease-in-quad'
      }
    );
  }

}
