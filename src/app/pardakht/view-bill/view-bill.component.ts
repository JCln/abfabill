import { Component, OnInit } from '@angular/core';
import { IViewBill } from './../../services/iview-bill';
import { ViewBillService } from './../../services/view-bill.service';
import { bankIcons } from '../bank-icons';
import { IbankIcons } from '../ibank-icons';

// export interface ITestObject {
//   type: string;
//   value: string;
// }

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
  bankIcons = bankIcons;

  value = '00000100183150000017012345';
  height = 50;
  width = 1.5;
  displayValue = false;


  constructor(private viewBillService: ViewBillService) { }

  insertValToVar = (res: IViewBill) => {
    for (const key in res) {
      if (res.hasOwnProperty(key)) {
        this.testObject[key] = (res[key]);
      }
    }
  }

  insertValues = () => {
    this.viewBillService.getViewBill().subscribe((res: any) => {
      if (res) {
        // this.spinner_boolean = false;
        this.insertValToVar(res);
      }
    });

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
