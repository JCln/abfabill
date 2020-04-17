import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ErrorHandlerService } from 'src/app/services/error-handler.service';
import { InteractionService } from 'src/app/services/interaction.service';
import { IViewBill } from 'src/app/services/iview-bill';
import { ViewBillService } from 'src/app/services/view-bill.service';

import { IbankIcons, IBarcode } from '../ibank-icons';

const bankIcons: IbankIcons[] = [
  {
    imgUrl: 'assets/bankIcons/parsian.jpg', name: 'پارسیان', linkToSite: 'https://bill.pec.ir/Bill/payment'
  },
  {
    imgUrl: 'assets/bankIcons/bpm.png', name: 'به پرداخت ملت', linkToSite: 'https://bill.bpm.bankmellat.ir/bpgwchannel/'
  }
];
@Component({
  selector: 'app-view-bill',
  templateUrl: './view-bill.component.html',
  styleUrls: ['./view-bill.component.scss']
})
export class ViewBillComponent implements OnInit {
  spinnerBoolean = true;
  showMoreButton = false;

  chooseBank: IbankIcons = { name: 'بانک ملت', linkToSite: 'bmi.ir' };
  testObject: any = [];
  getedDataIdFromRoute: any = [];
  bankIcons = bankIcons;

  barcode: IBarcode = { height: 50, width: 1.5, displayValue: false };

  constructor(
    private viewBillService: ViewBillService,
    private route: ActivatedRoute,
    private errorHandler: ErrorHandlerService,
    private router: Router,
    private interactionService: InteractionService
  ) {
    this.nestingLevel().catch(x => console.log(x.message));
  }


  removeLoaderAfterResponse = () => this.spinnerBoolean = false;

  insertValToVar = (res: IViewBill, callback: () => void) => {
    for (const key in res) {
      if (res.hasOwnProperty(key)) {
        this.testObject[key] = (res[key]);
      }
    }
    callback();
  }
  connectToServer = () => {
    this.viewBillService.getViewBill().subscribe((res: any) => {
      if (res) {
        this.insertValToVar(res, this.removeLoaderAfterResponse);
      }
    });
  }

  getDataFromRoute = (): Promise<string> => {
    this.interactionService.billId$.subscribe(res =>
      this.getedDataIdFromRoute = res);
    return new Promise(resolve => {
      resolve(this.getedDataIdFromRoute);
    });
  }
  // receiptFuc = (): Promise<any> => {
  // if (this.viewBillService.checkValidRoute(this.viewBillService.getViewBill())) {
  //   this.connectToServer();
  // } else {
  //   this.errorHandler.handleError(404);
  // }
  // return new Promise(resolve => {
  //   resolve(this.testObject);
  // });
  // }

  nestingLevel = async () => {
    this.viewBillService.setId(await this.getDataFromRoute());
    console.log(this.getedDataIdFromRoute);

    if (this.viewBillService.checkValidRoute(this.viewBillService.getViewBill())) {
      this.connectToServer();
    } else {
      this.errorHandler.handleError(404);
    }
    this.interactionService.setReceipt(this.testObject);
    // this.receipt.setReceipt(this.receiptFuc());
    const a = this.interactionService.setInstallment(this.getedDataIdFromRoute);
    console.log(a);

    // this.receiptFuc();
  }

  ngOnInit() { }

  changeBankForPay = (bankName: string, bankurl: string) => {
    this.chooseBank.name = bankName;
    this.chooseBank.linkToSite = bankurl;
  }
  showMoreButtonClicked = (): void => {
    this.showMoreButton = !this.showMoreButton;
    scroll(0, 700);
  }

}
