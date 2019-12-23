import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { IViewBill } from './../../services/iview-bill';
import { ViewBillService } from './../../services/view-bill.service';
import { bankIcons } from '../bank-icons';
import { IbankIcons } from '../ibank-icons';

@Component({
  selector: 'app-view-bill',
  templateUrl: './view-bill.component.html',
  styleUrls: ['./view-bill.component.scss']
})
export class ViewBillComponent implements OnInit {
  chooseBank: IbankIcons = { name: 'بانک ملت', linkToSite: 'bmi.ir' }

  viewBill: Observable<IViewBill[]>;
  bankIcons = bankIcons;
  value = 5;

  constructor(private viewBillService: ViewBillService) { }

  ngOnInit() {
    this.viewBill = this.viewBillService.getViewBill();

  }
  changeBankForPay = (bankName: string, bankurl: string) => {
    this.chooseBank["name"] = bankName;
    this.chooseBank["linkToSite"] = bankurl;
  }

}
