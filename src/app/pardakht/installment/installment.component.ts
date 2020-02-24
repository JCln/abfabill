import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos';
import { ViewBillService } from 'src/app/services/view-bill.service';

import { InteractionService } from './../../services/interaction.service';

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

  testObject: any = [];

  constructor(
    private getBillId: InteractionService,
    private viewBillService: ViewBillService) { }

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
    this.viewBillService.getInstallment(this.billId).subscribe((res: any) => { // 7790222118
      if (res) {
        console.log(res);

        this.insertValToVar(res, this.removeLoaderAfterResponse);
      }
    });
  }

  getId = (callback: () => void) => {
    this.getBillId.installmentId$.subscribe(res => {
      this.billId = res;
    });
    callback();
  }

  ngOnInit() {
    this.getId(this.connectToServer);
    AOS.init(
      {
        duration: 200,
        easing: 'ease-in-quad'
      }
    );
  }

}
