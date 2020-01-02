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
  AbBaha: number;
  AhadMaskooni: number;
  AhadNonMaskooni: number;
  BarCode: number;
  Barge: number;
  BillId: number;
  Budget: number;
  CounterStateId: number;
  CurrentCounterNumber: number;
  CurrentCounterReadingDate: string;
  DeadLine: number;
  Eshterak: number;
  FullName: number;
  Id: number;
  Jam: number;
  KarbariTitle: number;
  KarmozdFazelab: number;
  LavazemKahande: number;
  Maliat: number;
  Masraf: number;
  MasrafAverage: number;
  MasrafLiter: number;
  PayBank: number;
  PayDate: number;
  PayId: number;
  Payable: number;
  PreBedOrBes: number;
  PreCounterNumber: number;
  PreCounterReadingDate: number;
  Qotr: number;
  QotrSifoon: number;
  Radif: number;
  Taxfif: number;
  ZarfiatQarardadi: number;
  ZoneTitle: number;

  // isPayedIs_true: boolean;

  chooseBank: IbankIcons = { name: 'بانک ملت', linkToSite: 'bmi.ir' }
  viewBillTypeOnly = [];

  bankIcons = bankIcons;
  value = '00000100183150000017012345';
  height = 50;
  width = 1.5;
  displayValue = false;

  showMoreButton = false;

  constructor(private viewBillService: ViewBillService) { }

  valueAfterRes = (row: object[]) => {

    let member = {
      AbBaha: Object.values(row)[17],
      AhadMaskooni: Object.values(row)[8], AhadNonMaskooni: Object.values(row)[17],
      BarCode: Object.values(row)[8], Barge: Object.values(row)[17],
      BillId: Object.values(row)[8], Budget: Object.values(row)[17],
      CounterStateId: Object.values(row)[8], CurrentCounterNumber: Object.values(row)[17],
      CurrentCounterReadingDate: Object.values(row)[8], DeadLine: Object.values(row)[17],
      Eshterak: Object.values(row)[8], FullName: Object.values(row)[17],


      Jam: Object.values(row)[20], KarbariTitle: Object.values(row)[11],
      KarmozdFazelab: Object.values(row)[1], LavazemKahande: Object.values(row)[4],
      Maliat: Object.values(row)[16], Masraf: Object.values(row)[2],
      MasrafAverage: Object.values(row)[18], MasrafLiter: Object.values(row)[22],
      PayBank: Object.values(row)[12],
      PayDate: Object.values(row)[9],
      PayId: Object.values(row)[10], Payable: Object.values(row)[21],
      PreBedOrBes: Object.values(row)[14], PreCounterNumber: Object.values(row)[15],
      PreCounterReadingDate: Object.values(row)[13], Qotr: Object.values(row)[0],
      QotrSifoon: Object.values(row)[3], Radif: Object.values(row)[19],
      Taxfif: Object.values(row)[6], ZarfiatQarardadi: Object.values(row)[6],
      ZoneTitle: Object.values(row)[5]
    };

    return Object.values(member);
}

setVals(qabzData: Object[]) {
  var row = this.valueAfterRes(qabzData);

  this.AbBaha = row[0];
  this.AhadMaskooni = row[1];
  this.AhadNonMaskooni = row[2];
  this.BarCode = row[5];
  this.Barge = row[6];
  this.BillId = row[7];
  this.Budget = row[8];
  this.CounterStateId = row[9];
  this.CurrentCounterNumber = row[37];
  this.CurrentCounterReadingDate = row[10];
  this.DeadLine = row[11];
  this.Eshterak = row[12];
  this.FullName = row[13];
  this.Id = row[14];
  this.Jam = row[15];
  this.KarbariTitle = row[16];
  this.KarmozdFazelab = row[17];
  this.LavazemKahande = row[18];
  this.Maliat = row[19];
  this.Masraf = row[20];
  this.MasrafAverage = row[21];
  this.MasrafLiter = row[22];
  this.PayBank = row[23];
  this.PayDate = row[24];
  this.PayId = row[26];
  this.Payable = row[27];
  this.PreBedOrBes = row[28];
  this.PreCounterNumber = row[29];
  this.PreCounterReadingDate = row[30];
  this.Qotr = row[31];
  this.QotrSifoon = row[32];
  this.Radif = row[33];
  this.Taxfif = row[34];
  this.ZarfiatQarardadi = row[35];
  this.ZoneTitle = row[36];

}


insertValues = () => {
  this.viewBillService.getViewBill().subscribe((res:Object[]) => {
    
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
