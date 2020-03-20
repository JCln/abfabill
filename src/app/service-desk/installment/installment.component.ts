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

  testObject: any = [];
  // testObject = a;

  constructor(
    private getBillId: InteractionService,
    private route: ActivatedRoute,
    private viewBillService: ViewBillService,
    private errorHandler: ErrorHandlerService) {
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
        // when response is null and means no installment exists
        if (this.isNull(Object.values(res[0]))) {
          this.response = true;
        }
        this.insertValToVar(res, this.removeLoaderAfterResponse);
      }
    });
  }

  getDataFromRoute = (): Promise<string> => {
    this.route.params.subscribe((params: object) => {
      this.getedDataIdFromRoute = Object.values(params);
    });
    return new Promise(resolve => {
      resolve(this.getedDataIdFromRoute);
    });
  }

  getId = (callback: () => void) => {
    this.getBillId.installmentId$.subscribe(res => {
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
