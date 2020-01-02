import { Component, OnInit } from '@angular/core';
import { Observable, Subject, BehaviorSubject, observable } from 'rxjs';

import { IViewBill } from './../../services/iview-bill';
import { ViewBillService } from './../../services/view-bill.service';
import { bankIcons } from '../bank-icons';
import { IbankIcons } from '../ibank-icons';
import { MainService } from 'src/app/services/main.service';
import { map } from 'rxjs/operators';

export interface ITestObject {
  type: string;
  value: string;
}

@Component({
  selector: 'app-view-bill',
  templateUrl: './view-bill.component.html',
  styleUrls: ['./view-bill.component.scss']
})
export class ViewBillComponent implements OnInit {
  spinner_boolean = true;
  chooseBank: IbankIcons = { name: 'بانک ملت', linkToSite: 'bmi.ir' }
  viewBillTypeOnly = [];
  testObject: any = {}

  bankIcons = bankIcons;
  value = '00000100183150000017012345';
  height = 50;
  width = 1.5;
  displayValue = false;

  showMoreButton = false;

  constructor(private viewBillService: ViewBillService) { }

  valueAfterRes = (row: object[]): Object[] => {

    let member = {
      Id: Object.values(row)[0],

      AhadMaskooni: Object.values(row)[1], AhadNonMaskooni: Object.values(row)[2],
      BarCode: Object.values(row)[3], Barge: Object.values(row)[4],
      BillId: Object.values(row)[5], Budget: Object.values(row)[6],
      CounterStateId: Object.values(row)[7], CurrentCounterNumber: Object.values(row)[8],
      CurrentCounterReadingDate: Object.values(row)[9], DeadLine: Object.values(row)[10],
      Eshterak: Object.values(row)[11], FullName: Object.values(row)[12],


      Jam: Object.values(row)[13], KarbariTitle: Object.values(row)[14],
      KarmozdFazelab: Object.values(row)[15], LavazemKahande: Object.values(row)[16],
      Maliat: Object.values(row)[17], Masraf: Object.values(row)[18],
      MasrafAverage: Object.values(row)[19], MasrafLiter: Object.values(row)[20],
      PayBank: Object.values(row)[21],
      PayDate: Object.values(row)[22],
      PayId: Object.values(row)[23], Payable: Object.values(row)[24],
      PreBedOrBes: Object.values(row)[25], PreCounterNumber: Object.values(row)[26],
      PreCounterReadingDate: Object.values(row)[27], Qotr: Object.values(row)[28],
      QotrSifoon: Object.values(row)[29],
      Radif: Object.values(row)[30],
      Taxfif: Object.values(row)[31], ZarfiatQarardadi: Object.values(row)[32],
      ZoneTitle: Object.values(row)[33],
      zoneId: Object.values(row)[34], karbariId: Object.values(35),
      QoqotrSifoonId: Object.values(row)[36],
      payTypeId: Object.values(row)[37],
      payBankId: Object.values(row)[38]

    };

    return Object.values(member);
  }


  insertValues = () => {
    this.viewBillService.getViewBill().subscribe((res: any) => {
      if (res) {
        this.spinner_boolean = false;
        this.viewBillTypeOnly = this.valueAfterRes(res);
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
