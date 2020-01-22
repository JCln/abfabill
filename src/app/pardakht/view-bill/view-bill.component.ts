import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { IbankIcons, IBarcode } from '../ibank-icons';
import { IViewBill } from './../../services/iview-bill';
import { ViewBillService } from './../../services/view-bill.service';

// import { bankIcons } from '../bank-icons';
const bankIcons: IbankIcons[] = [
  {
    imgUrl: '../../../pardakht/assets/bankIcons/parsian.jpg', name: 'پارسیان', linkToSite: 'http://bmi.ir'
  },
  {
    imgUrl: '../../../pardakht/assets/bankIcons/bpm.png', name: 'به پرداخت ملت', linkToSite: '#'
  }
];
@Component({
  selector: 'app-view-bill',
  templateUrl: './view-bill.component.html',
  styleUrls: ['./view-bill.component.scss', './spinner_loader.scss']
})
export class ViewBillComponent implements OnInit {
  spinnerBoolean = true;
  showMoreButton = false;

  chooseBank: IbankIcons = { name: 'بانک ملت', linkToSite: 'bmi.ir' };
  testObject: any = [];
  getedDataIdFromRoute: any = [];
  bankIcons = bankIcons;

  barcode: IBarcode = { height: 50, width: 1.5, displayValue: false };

  constructor(private viewBillService: ViewBillService, private route: ActivatedRoute) {
    this.getDataFromRoute();
    // this.viewBillService.setId(this.getedDataIdFromRoute);
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

  // getDataFromRoute = () => {
  //   this.route.params.subscribe((params: object) => {
  //     this.getedDataIdFromRoute = Object.values(params);
  //   });
  //   return this;
  // }

  getDataFromRoute = () => {
    console.log('enter to route func');
    
    this.route.params.subscribe((params: object) => {
      // this.getedDataIdFromRoute = Object.values(params);
      return new Promise(resolve => {
        resolve(Object.values(params));
      });
    });
  }

  async nestingLevel() {
    const trueFalseRouteParameter = await this.getDataFromRoute();
    this.viewBillService.setId(this.getedDataIdFromRoute);
    this.connectToServer();
  }

  ngOnInit() {
    this.nestingLevel();
    // this.connectToServer();
  }

  changeBankForPay = (bankName: string, bankurl: string) => {
    this.chooseBank.name = bankName;
    this.chooseBank.linkToSite = bankurl;
  }
  showMoreButtonClicked = (): void => {
    this.showMoreButton = !this.showMoreButton;
    scroll(0, 5000);
  }

}
