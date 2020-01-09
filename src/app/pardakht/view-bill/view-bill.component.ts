import { Component, OnInit } from '@angular/core';
import { IViewBill } from './../../services/iview-bill';
import { ViewBillService } from './../../services/view-bill.service';
// import { bankIcons } from '../bank-icons';
import { IbankIcons, IBarcode } from '../ibank-icons';
import { ActivatedRoute, Router } from '@angular/router';
import { map } from 'rxjs/operators';

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
  spinner_boolean = true;
  showMoreButton = false;

  chooseBank: IbankIcons = { name: 'بانک ملت', linkToSite: 'bmi.ir' }
  testObject: any = [];
  getedDataIdFromRoute: any = [];
  bankIcons = bankIcons;

  barcode: IBarcode = { height: 50, width: 1.5, displayValue: false }

  constructor(private viewBillService: ViewBillService, private route: ActivatedRoute, private router: Router) {
    this.getDataFromRoute();
    this.viewBillService.setId(this.getedDataIdFromRoute);
  }


  removeLoaderAfterResponse = () => this.spinner_boolean = false;

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
    this.route.params.subscribe((params: Object) => {
      this.getedDataIdFromRoute = Object.values(params);
    });
    return this;
  }

  ngOnInit() {
    this.connectToServer();
  }

  changeBankForPay = (bankName: string, bankurl: string) => {
    this.chooseBank["name"] = bankName;
    this.chooseBank["linkToSite"] = bankurl;
  }
  showMoreButtonClicked = (): void => {
    this.showMoreButton = !this.showMoreButton;
    scroll(0, 5000);
  }

}
