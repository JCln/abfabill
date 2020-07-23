import { AfterContentInit, Component, OnInit } from '@angular/core';
import { ErrorHandlerService } from 'src/app/services/error-handler.service';
import { GoogleAnalyticsService } from 'src/app/services/google-analytics.service';
import { InteractionService } from 'src/app/services/interaction.service';
import { IViewBill } from 'src/app/services/iview-bill';
import { ViewBillService } from 'src/app/services/view-bill.service';

import { IbankIcons, IBarcode } from '../ibank-icons';
import { CheckRoute } from './../../../shared/check-route';

const bankIcons: IbankIcons[] = [
  {
    imgUrl: 'assets/imgs/bankIcons/parsian.jpg', name: 'پارسیان', linkToSite: 'https://bill.pec.ir/Bill/payment'
  },
  {
    imgUrl: 'assets/imgs/bankIcons/bpm.png', name: 'به پرداخت ملت', linkToSite: 'https://bill.bpm.bankmellat.ir/bpgwchannel/'
  }
];
@Component({
  selector: 'app-view-bill',
  templateUrl: './view-bill.component.html',
  styleUrls: ['./view-bill.component.scss']
})
export class ViewBillComponent extends CheckRoute implements OnInit, AfterContentInit {
  spinnerBoolean = true;
  showMoreButton = false;

  // a bill kardex with details
  isABillKardex: boolean = false;
  aBillKardex: any = [];

  chooseBank: IbankIcons = { name: 'بانک ملت', linkToSite: 'https://bill.bpm.bankmellat.ir/bpgwchannel/' };
  testObject: any = [];
  bankIcons = bankIcons;

  barcode: IBarcode = { height: 50, width: 1.5, displayValue: false };

  constructor(
    private interfaceService: ViewBillService,
    private errorHandler: ErrorHandlerService,
    private interactionService: InteractionService,
    private googleAnalyticsService: GoogleAnalyticsService
  ) {
    super();
  }

  private removeLoaderAfterResponse = () => this.spinnerBoolean = false;

  private insertValToVar = (res: IViewBill, callback: () => void) => {
    this.testObject = res;
    callback();
  }
  private connectToServer = () => {
    this.interfaceService.getViewBill(this.getedDataIdFromRoute).subscribe((res: any) => {
      if (!this.isNull(res)) { // should implement isNull insead
        this.insertValToVar(res, this.removeLoaderAfterResponse);
        this.interactionService.setReceipt(this.testObject);
      } else {
        this.errorHandler.handleError(404);
      }
    });
  }

  private nestingLevel = () => {
    this.connectToServer();
  }

  sendButtonEventToAnalytics = () => {
    this.googleAnalyticsService.eventEmitter("viewBillPage", "payButtonClicked", "userLabel", 3);
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

  ngAfterContentInit() {
    this.interactionService.abillKardex$.subscribe(res => {
      if (this.isNull(res))
        return;
      this.aBillKardex = res;
      this.removeLoaderAfterResponse();
      this.isABillKardex = true;
    })
  }
  ngOnDestroy(): void {
    this.interactionService.setABillKardex([]);
  }

}
