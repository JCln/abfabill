import { Component, OnInit } from '@angular/core';
import { IViewBill } from './../../services/iview-bill';
import { ViewBillService } from './../../services/view-bill.service';
// import { bankIcons } from '../bank-icons';
import { IbankIcons, IBarcode } from '../ibank-icons';
import { ActivatedRoute, Router } from '@angular/router';

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
  dataIdFromRoute: any = [];
  bankIcons = bankIcons;

  barcode: IBarcode = { barcode_height: 50, barcode_width: 1.5, displayValue: false }

  constructor(private viewBillService: ViewBillService, private route: ActivatedRoute, private router: Router) {
    this.getDataFromRoute();
    this.viewBillService.setId(this.dataIdFromRoute);
  }

  insertValToVar = (res: IViewBill) => {
    for (const key in res) {
      if (res.hasOwnProperty(key)) {
        this.testObject[key] = (res[key]);
      }
    }
  }
  removeLoaderAfterResponse = () => {
    this.spinner_boolean = false;
  }
  insertValues = () => {
    this.viewBillService.getViewBill().subscribe((res: any) => {
      if (res) {
        this.removeLoaderAfterResponse();
        this.insertValToVar(res);
      }
    });

  }
  getDataFromRoute = () => {
    this.route.params.subscribe((params: Object) => {
      for (const key in params) {
        if (params.hasOwnProperty(key)) {
          this.dataIdFromRoute = (params[key]);
        }
      }
    });
  }
  passDataToService = () => {

  }
  ngOnInit() {
    this.insertValues();
  }

  changeBankForPay = (bankName: string, bankurl: string) => {
    this.chooseBank["name"] = bankName;
    this.chooseBank["linkToSite"] = bankurl;
  }
  showMoreClicked = (): void => {
    this.showMoreButton = !this.showMoreButton;
    scroll(0, 5000);
  }


}
