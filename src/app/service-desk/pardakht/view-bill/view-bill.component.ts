import { AfterContentInit, Component, OnInit } from '@angular/core';
import { IViewBill } from 'src/app/interfaces/iview-bill';
import { ErrorHandlerService } from 'src/app/services/error-handler.service';
import { GoogleAnalyticsService } from 'src/app/services/google-analytics.service';
import { InteractionService } from 'src/app/services/interaction.service';
import { InterfaceService } from 'src/app/services/interface.service';

import { IbankIcons, IBarcode } from '../../../interfaces/ibank-icons';
import { ViewbillService } from './../../../services/DI/viewbill.service';
import { PayService } from './../../../services/pay.service';
import { CheckRoute } from './../../../shared/check-route';


@Component({
  selector: 'app-view-bill',
  templateUrl: './view-bill.component.html',
  styleUrls: ['./view-bill.component.scss']
})
export class ViewBillComponent extends CheckRoute implements OnInit, AfterContentInit {
  _spinnerBoolean = true;
  _showMoreButton = false;

  // a bill kardex with details
  _isABillKardex: boolean = false;
  $aBillKardex: any = [];

  chooseBank: IbankIcons = { name: 'بانک ملت', linkToSite: 'https://bill.bpm.bankmellat.ir/bpgwchannel/' };
  $testObject: any = [];
  bankIcons: IbankIcons[];

  barcode: IBarcode = { height: 50, width: 1.5, displayValue: false };

  constructor(
    private interfaceService: InterfaceService,
    private errorHandler: ErrorHandlerService,
    private interactionService: InteractionService,
    private googleAnalyticsService: GoogleAnalyticsService,
    private payService: PayService,
    banks: ViewbillService
  ) {
    super();
    this.bankIcons = banks.getBankIcon();
  }

  private removeLoaderAfterResponse = () => this._spinnerBoolean = false;

  private insertValToVar = (res: IViewBill, callback: () => void) => {
    this.$testObject = res;
    callback();
  }
  private connectToServer = () => {
    this.interfaceService.getViewBill(this.getedDataIdFromRoute).subscribe((res: any) => {
      if (!this.isNull(res)) {
        this.insertValToVar(res, this.removeLoaderAfterResponse);
        this.interactionService.setReceipt(this.$testObject);
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
  private token = (getedDataIdFromRoute: string): Promise<any> => {
    return new Promise((resolve, reject) => {
      try {
        this.interfaceService.getPardakhtToken(getedDataIdFromRoute).subscribe((res: string) => {
          if (res) {
            resolve(res);
          }
          else {
            resolve(false);
          }
        });
      } catch (e) { reject(e) }
    });
  }

  protected getbillIdToken = async () => {
    const tokenId = await this.token(this.getedDataIdFromRoute);
    if (tokenId)
      console.log(tokenId);
    // this.sendButtonEventToAnalytics();
    // this.payService.redirectByToken(tokenId);
  }
  ngOnInit() {
    this.nestingLevel();
  }
  changeBankForPay = (bankName: string, bankurl: string) => {
    this.chooseBank.name = bankName;
    this.chooseBank.linkToSite = bankurl;
  }
  showMoreButtonClicked = (): void => {
    this._showMoreButton = !this._showMoreButton;
    scroll(0, 700);
  }
  ngAfterContentInit() {
    this.interactionService.abillKardex$.subscribe(res => {
      if (this.isNull(res))
        return;
      this.$aBillKardex = res;
      this.removeLoaderAfterResponse();
      this._isABillKardex = true;
    })
  }
  ngOnDestroy(): void {
    this.interactionService.setABillKardex([]);
  }

}
