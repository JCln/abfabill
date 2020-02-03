import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { OldReceiptComponent } from './../_layout/no-layout/old-receipt/old-receipt.component';
import { FailedComponent } from './../response/failed/failed.component';
import { SuccessComponent } from './../response/success/success.component';

const routes: Routes = [
  { path: 'oldreceipt', component: OldReceiptComponent },
  { path: 'success', component: SuccessComponent },
  { path: 'failed', component: FailedComponent },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PardakhtRoutingModule { }



//   "id": 5571215, 
// "zoneId": 0, 
// "zoneTitle": "خميني شهر", 
// "fullName": "بيمارستان شهيداشرفي", 
// "karbariId": 9, 
// "karbariTitle": "بهداشتي درماني", 
// "ahadMaskooni": 0, 
// "ahadNonMaskooni": 1, 
// "zarfiatQarardadi": 70, 
// "qotrId": 3, 
// "qotr": "1", 
// "qotrSifoonId": 0, 
// "qotrSifoon": "100", 
// "counterStateId": 6, 
// "radif": 100, 
// "eshterak": "41010400", 
// "barge": "4571042", 
// "preCounterReadingDate": "98/11/03", 
// "currentCounterReadingDate": "98/11/03", 
// "preCounterNumber": 4834, 
// "currentCounterNumber": 4834, 
// "masraf": 0, 
// "masrafLiter": 0, 
// "masrafAverage": 0.0, 
// "abBaha": 10000, 
// "karmozdFazelab": 10000, 
// "maliat": 1800, 
// "budget": 0, 
// "lavazemKahande": 0, 
// "jam": 21800, 
// "taxfif": 0, 
// "preBedOrBes": -5120672, 
// "payable": -5099000, 
// "deadLine": "", 
// "days": 30, 
// "billId": "10018315", 
// "payId": "             ", 
// "barCode": "00000000000000000000000000", 
// "isPayed": true, 
// "payDate": "98/05/12", 
// "payBankId": 0, 
// "payBank": "بانک ملت", 
// "payTypeId": 0, 
// "payType": "خودپرداز" }