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
    this.getDataFromRoute();
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

  getDataFromRoute = () => {
    this.getedDataIdFromRoute = window.location.pathname.split('/')[1];  
  }

  nestingLevel = () => {
    this.viewBillService.setId(this.getedDataIdFromRoute);

    if (this.viewBillService.checkValidRoute(this.viewBillService.getViewBill())) {
      this.connectToServer();
    } else {
      this.errorHandler.handleError(404);
    }
    this.interactionService.setReceipt(this.testObject);
    this.interactionService.setInstallment(this.getedDataIdFromRoute);
  }

  ngOnInit() {
    this.nestingLevel();
  }

  changeBankForPay = (bankName: string, bankurl: string) => {
    this.chooseBank.name = bankName;
    this.chooseBank.linkToSite = bankurl;
  }
  showMoreButtonClicked = (): void => {
    this.showMoreButton = !this.showMoreButton;
    scroll(0, 700);
  }

}
